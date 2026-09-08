/**
 * Endpoint de consumo autenticado one-shot para o Bot (Opção B).
 * Responde a GET ou POST em /api/auth/consume.
 */

const { getDel } = require("./lib/redis");

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  // 1. Verificação de método
  if (req.method !== "GET" && req.method !== "POST") {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: "Method not allowed. Use GET or POST." }));
  }

  // 2. Verificação de segurança (Pickup Secret)
  const pickupSecret = process.env.OLIST_CODE_PICKUP_SECRET;
  if (!pickupSecret) {
    res.statusCode = 500;
    return res.end(JSON.stringify({
      error: "OLIST_CODE_PICKUP_SECRET não configurado nas variáveis de ambiente da Vercel."
    }));
  }

  const authHeader = req.headers["authorization"] || "";
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  const clientToken = match ? match[1].trim() : null;

  if (!clientToken || clientToken !== pickupSecret) {
    res.statusCode = 401;
    return res.end(JSON.stringify({
      error: "Unauthorized. Header Authorization: Bearer <OLIST_CODE_PICKUP_SECRET> inválido ou ausente."
    }));
  }

  // 3. Leitura atômica one-shot (GETDEL)
  try {
    const code = await getDel("olist_auth_code");

    if (code) {
      res.statusCode = 200;
      return res.end(JSON.stringify({
        success: true,
        code: code
      }));
    } else {
      res.statusCode = 200;
      return res.end(JSON.stringify({
        success: false,
        code: null,
        message: "Nenhum código disponível ou o TTL de 120s expirou."
      }));
    }
  } catch (err) {
    console.error("Erro ao consumir código do Redis:", err.message);
    res.statusCode = 500;
    return res.end(JSON.stringify({
      error: "Falha interna ao acessar o store temporário.",
      details: err.message
    }));
  }
};
