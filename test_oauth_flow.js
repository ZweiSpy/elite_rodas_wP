const assert = require("assert");
const http = require("http");

async function runTests() {
  console.log("=== Iniciando Testes Unitários e de Integração do Fluxo OAuth (P1.2) ===\n");

  // 1. Iniciar Mock Server para simular a REST API do Upstash Redis
  const redisStorage = new Map();
  const mockRedisServer = http.createServer((req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const auth = req.headers["authorization"];
      if (!auth || auth !== "Bearer mock_token") {
        res.writeHead(401);
        return res.end(JSON.stringify({ error: "Unauthorized" }));
      }

      const cmd = JSON.parse(body);
      const [action, key, val, opt, ttl] = cmd;

      if (action === "SET") {
        redisStorage.set(key, val);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ result: "OK" }));
      } else if (action === "GETDEL") {
        const value = redisStorage.get(key) || null;
        redisStorage.delete(key);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ result: value }));
      } else if (action === "GET") {
        const value = redisStorage.get(key) || null;
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ result: value }));
      } else if (action === "DEL") {
        redisStorage.delete(key);
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ result: 1 }));
      }

      res.writeHead(400);
      res.end(JSON.stringify({ error: "Unknown command" }));
    });
  });

  await new Promise(resolve => mockRedisServer.listen(0, resolve));
  const port = mockRedisServer.address().port;
  const mockUrl = `http://127.0.0.1:${port}`;

  process.env.UPSTASH_REDIS_REST_URL = mockUrl;
  process.env.UPSTASH_REDIS_REST_TOKEN = "mock_token";
  process.env.OLIST_CODE_PICKUP_SECRET = "secret123";
  process.env.OLIST_CLIENT_ID = "olist_app_test_id";

  const { setEx, getDel } = require("./api/auth/lib/redis");
  const loginHandler = require("./api/auth/login");
  const callbackHandler = require("./api/auth/callback");
  const consumeHandler = require("./api/auth/consume");

  function createMockRes() {
    return {
      statusCode: 200,
      headers: {},
      body: "",
      setHeader(k, v) { this.headers[k.toLowerCase()] = v; },
      end(chunk) { if (chunk) this.body += chunk; }
    };
  }

  // Teste 1: Redis Helper (setEx e getDel)
  console.log("Teste 1: Validando lib/redis (setEx e getDel)...");
  await setEx("teste_key", "valor_teste", 120);
  assert.strictEqual(redisStorage.get("teste_key"), "valor_teste");
  const readVal1 = await getDel("teste_key");
  assert.strictEqual(readVal1, "valor_teste");
  const readVal2 = await getDel("teste_key");
  assert.strictEqual(readVal2, null, "One-shot falhou: chave ainda existe após getDel");
  console.log("✔ lib/redis: setEx e getDel (one-shot) aprovados.");

  // Teste 2: api/auth/login
  console.log("\nTeste 2: Validando api/auth/login...");
  const resLogin = createMockRes();
  await loginHandler({ query: {} }, resLogin);
  assert.strictEqual(resLogin.statusCode, 302);
  const location = resLogin.headers["location"];
  assert.ok(location.includes("client_id=olist_app_test_id"));
  assert.ok(location.includes("https%3A%2F%2Fwww.eliterodas.com.br%2Fauth%2Fcallback"));
  console.log("✔ api/auth/login: redirecionamento 302 e parâmetros aprovados.");

  // Teste 3: api/auth/callback com erro do Olist
  console.log("\nTeste 3: Validando api/auth/callback com erro do Olist...");
  const resCallbackErr = createMockRes();
  await callbackHandler({ query: { error: "access_denied", error_description: "Usuario recusou" } }, resCallbackErr);
  assert.strictEqual(resCallbackErr.statusCode, 400);
  assert.ok(resCallbackErr.body.includes("Acesso Não Autorizado"));
  assert.strictEqual(redisStorage.has("olist_auth_code"), false, "Não deve depositar código em caso de erro");
  console.log("✔ api/auth/callback: tratamento de erro aprovado.");

  // Teste 4: api/auth/callback com código válido (depósito TTL 120s)
  console.log("\nTeste 4: Validando api/auth/callback com código válido...");
  const resCallbackOk = createMockRes();
  await callbackHandler({ query: { code: "olist_auth_code_xyz123" } }, resCallbackOk);
  assert.strictEqual(resCallbackOk.statusCode, 200);
  assert.ok(resCallbackOk.body.includes("Autorização Recebida!"));
  assert.strictEqual(redisStorage.get("olist_auth_code"), "olist_auth_code_xyz123");
  console.log("✔ api/auth/callback: depósito e mensagem de sucesso aprovados.");

  // Teste 5: api/auth/consume não autorizado (sem token)
  console.log("\nTeste 5: Validando api/auth/consume sem token...");
  const resConsumeNoAuth = createMockRes();
  await consumeHandler({ method: "GET", headers: {} }, resConsumeNoAuth);
  assert.strictEqual(resConsumeNoAuth.statusCode, 401);
  console.log("✔ api/auth/consume: 401 Unauthorized verificado.");

  // Teste 6: api/auth/consume com token errado
  console.log("\nTeste 6: Validando api/auth/consume com token incorreto...");
  const resConsumeWrongToken = createMockRes();
  await consumeHandler({ method: "GET", headers: { authorization: "Bearer wrong_secret" } }, resConsumeWrongToken);
  assert.strictEqual(resConsumeWrongToken.statusCode, 401);
  console.log("✔ api/auth/consume: rejeição de token incorreto aprovada.");

  // Teste 7: api/auth/consume autorizado (leitura com sucesso)
  console.log("\nTeste 7: Validando api/auth/consume com token válido...");
  const resConsumeOk = createMockRes();
  await consumeHandler({ method: "GET", headers: { authorization: "Bearer secret123" } }, resConsumeOk);
  assert.strictEqual(resConsumeOk.statusCode, 200);
  const data1 = JSON.parse(resConsumeOk.body);
  assert.strictEqual(data1.success, true);
  assert.strictEqual(data1.code, "olist_auth_code_xyz123");
  console.log("✔ api/auth/consume: código recuperado com sucesso.");

  // Teste 8: api/auth/consume subsequente (one-shot: deve vir null)
  console.log("\nTeste 8: Validando consumo subsequente (one-shot)...");
  const resConsume2 = createMockRes();
  await consumeHandler({ method: "GET", headers: { authorization: "Bearer secret123" } }, resConsume2);
  assert.strictEqual(resConsume2.statusCode, 200);
  const data2 = JSON.parse(resConsume2.body);
  assert.strictEqual(data2.success, false);
  assert.strictEqual(data2.code, null);
  console.log("✔ api/auth/consume: one-shot confirmado (segunda leitura retornou null).");

  mockRedisServer.close();
  console.log("\n>>> TODOS OS 8 TESTES PASSARAM COM SUCESSO! <<<");
}

runTests().catch(err => {
  console.error("FALHA NOS TESTES:", err);
  process.exit(1);
});
