/**
 * Utilitário de comunicação com Upstash Redis / Vercel KV via REST API nativa.
 * Usa fetch nativo do Node 18+ (sem dependências externas necessárias).
 */

async function executeCommand(commandArray) {
  // Suporta qualquer prefixo gerado pela Vercel (STORAGE_, KV_, UPSTASH_REDIS_ ou sem prefixo)
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
      "Credenciais do Upstash Redis / Vercel KV não encontradas. " +
      "Configure as variáveis de ambiente REST_URL e REST_TOKEN no painel da Vercel."
    );
  }

  const cleanUrl = url.replace(/\/$/, "");
  const response = await fetch(cleanUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(commandArray)
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
 * @param {string} key
 * @param {string} value
 * @param {number} seconds
 */
async function setEx(key, value, seconds) {
  return await executeCommand(["SET", key, value, "EX", seconds]);
}

/**
 * Lê e remove o valor de forma atômica (one-shot).
 * @param {string} key
 * @returns {Promise<string|null>}
 */
async function getDel(key) {
  try {
    return await executeCommand(["GETDEL", key]);
  } catch (err) {
    // Fallback de compatibilidade caso o Redis não suporte GETDEL (legado)
    const val = await executeCommand(["GET", key]);
    if (val) {
      await executeCommand(["DEL", key]);
    }
    return val;
  }
}

module.exports = {
  executeCommand,
  setEx,
  getDel
};
