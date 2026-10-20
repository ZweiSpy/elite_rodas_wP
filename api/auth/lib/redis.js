/**
 * Utilitário de comunicação com Upstash Redis / Vercel KV via REST API nativa,
 * com fallback automático em memória + /tmp (TTL + one-shot) caso a instância
 * gratuita do Upstash entre em hibernação (fetch failed).
 */

const fs = require("fs");
const os = require("os");
const path = require("path");

const FALLBACK_FILE = path.join(os.tmpdir(), "olist_oauth_store.json");

if (!globalThis.__olistMemoryStore) {
  globalThis.__olistMemoryStore = new Map();
}

function writeFallback(key, value, seconds) {
  const entry = {
    value,
    expiresAt: Date.now() + seconds * 1000,
  };
  globalThis.__olistMemoryStore.set(key, entry);
  try {
    let data = {};
    if (fs.existsSync(FALLBACK_FILE)) {
      data = JSON.parse(fs.readFileSync(FALLBACK_FILE, "utf-8") || "{}");
    }
    data[key] = entry;
    fs.writeFileSync(FALLBACK_FILE, JSON.stringify(data), "utf-8");
  } catch (_) {
    // Ignora erro de disco se /tmp não estiver disponível
  }
}

function readDelFallback(key) {
  let entry = globalThis.__olistMemoryStore.get(key) || null;
  globalThis.__olistMemoryStore.delete(key);

  try {
    if (fs.existsSync(FALLBACK_FILE)) {
      const data = JSON.parse(fs.readFileSync(FALLBACK_FILE, "utf-8") || "{}");
      if (!entry && data[key]) {
        entry = data[key];
      }
      if (data[key]) {
        delete data[key];
        fs.writeFileSync(FALLBACK_FILE, JSON.stringify(data), "utf-8");
      }
    }
  } catch (_) {
    // Ignora erro de leitura em /tmp
  }

  if (!entry) return null;
  if (Date.now() > entry.expiresAt) return null;
  return entry.value;
}

async function executeCommand(commandArray) {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ||
    process.env.KV_REST_API_URL ||
    process.env.STORAGE_REST_API_URL ||
    process.env.STORAGE_KV_REST_API_URL ||
    process.env.STORAGE_UPSTASH_REDIS_REST_URL;

  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    process.env.KV_REST_API_TOKEN ||
    process.env.STORAGE_REST_API_TOKEN ||
    process.env.STORAGE_KV_REST_API_TOKEN ||
    process.env.STORAGE_UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error(
      "Credenciais do Upstash Redis / Vercel KV não encontradas."
    );
  }

  const cleanUrl = url.replace(/\/$/, "");
  const response = await fetch(cleanUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commandArray),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro Upstash Redis HTTP ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  if (data.error) {
    throw new Error(`Erro Upstash Redis comando: ${data.error}`);
  }

  return data.result;
}

/**
 * Grava uma chave com tempo de expiração em segundos (TTL).
 * Salva sempre no fallback local (warm container) e tenta o Upstash Redis.
 */
async function setEx(key, value, seconds) {
  writeFallback(key, value, seconds);
  try {
    return await executeCommand(["SET", key, value, "EX", seconds]);
  } catch (err) {
    console.warn("Upstash indisponível/hibernado em setEx, usando store em memória+/tmp:", err.message);
    return "OK";
  }
}

/**
 * Lê e remove o valor de forma atômica (one-shot).
 */
async function getDel(key) {
  const localVal = readDelFallback(key);
  try {
    const remoteVal = await executeCommand(["GETDEL", key]);
    return remoteVal || localVal;
  } catch (err) {
    try {
      const val = await executeCommand(["GET", key]);
      if (val) {
        await executeCommand(["DEL", key]);
        return val;
      }
    } catch (_) {
      // Upstash hibernado/offline: retorna valor do fallback local one-shot
    }
    return localVal;
  }
}

module.exports = {
  executeCommand,
  setEx,
  getDel,
};
