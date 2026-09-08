/**
 * Handler do Callback OAuth do Olist.
 * Recebe o código temporário via redirect do Olist e deposita no Redis com TTL de 120s.
 */

const { setEx } = require("./lib/redis");

function renderPage({ title, statusColor, badgeText, heading, message, subMessage, showBack = true }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Elite Rodas</title>
  <link rel="icon" href="/assets/favicon.jpeg" type="image/jpeg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">
  <style>
    .result-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 3rem 2rem;
      max-width: 620px;
      margin: 3rem auto;
      box-shadow: var(--shadow);
      text-align: center;
    }
    .status-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 1rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1.5rem;
      background: ${statusColor}1A;
      color: ${statusColor};
      border: 1px solid ${statusColor}4D;
    }
    .result-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      background: ${statusColor}1A;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${statusColor};
    }
    .result-msg {
      font-size: 1.1rem;
      color: var(--text-primary);
      margin: 1rem 0 0.5rem;
      line-height: 1.5;
    }
    .result-sub {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    .result-actions {
      border-top: 1px solid var(--border);
      padding-top: 1.5rem;
      margin-top: 1.5rem;
    }
    .btn-return {
      display: inline-block;
      padding: 0.75rem 1.75rem;
      background: var(--border);
      color: var(--text-primary);
      border-radius: var(--radius);
      font-weight: 600;
      transition: background var(--transition);
    }
    .btn-return:hover {
      background: #4a4a4a;
    }
  </style>
</head>
<body>
  <header class="legal-header">
    <div class="legal-header__inner">
      <a href="/" class="logo" aria-label="Elite Rodas — Voltar ao site">
        <svg class="logo__bolt" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08 7-8.34V3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15-7 8.18V21z"/></svg>
        ELITE <span class="logo__rodas">RODAS</span>
      </a>
      <a href="/" class="legal-back">&larr; Voltar ao site</a>
    </div>
  </header>

  <main class="legal-main">
    <div class="container">
      <div class="result-card">
        <div class="status-badge">${badgeText}</div>
        <h1 class="legal-title" style="font-size: 1.75rem;">${heading}</h1>
        <p class="result-msg">${message}</p>
        <p class="result-sub">${subMessage}</p>
        ${showBack ? `
        <div class="result-actions">
          <a href="/auth" class="btn-return">&larr; Tentar novamente</a>
        </div>` : ""}
      </div>
    </div>
  </main>
</body>
</html>`;
}

module.exports = async function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  const { code, error, error_description } = req.query;

  // Caso de erro reportado pelo Olist
  if (error) {
    res.statusCode = 400;
    return res.end(renderPage({
      title: "Erro na Autorização",
      statusColor: "#E60000",
      badgeText: "Falha na Conexão",
      heading: "Acesso Não Autorizado",
      message: `O Olist retornou o erro: <strong>${error}</strong>`,
      subMessage: error_description ? error_description : "O processo de autorização foi recusado ou cancelado.",
      showBack: true
    }));
  }

  // Caso sem código
  if (!code) {
    res.statusCode = 400;
    return res.end(renderPage({
      title: "Código Ausente",
      statusColor: "#E60000",
      badgeText: "Parâmetro Ausente",
      heading: "Código de Autorização Não Encontrado",
      message: "Nenhum código foi recebido na chamada de callback.",
      subMessage: "Certifique-se de iniciar o fluxo pelo painel de autorização oficial.",
      showBack: true
    }));
  }

  // Depósito seguro no Redis com TTL de 120s
  try {
    const TTL_SECONDS = 120;
    await setEx("olist_auth_code", code, TTL_SECONDS);

    res.statusCode = 200;
    return res.end(renderPage({
      title: "Autorização Concluída",
      statusColor: "#22c55e",
      badgeText: "Sucesso",
      heading: "Autorização Recebida!",
      message: "O código temporário foi registrado com sucesso.",
      subMessage: "Você já pode retornar ao bot no terminal para concluir a captura e o pareamento do ERP. Esta janela pode ser fechada.",
      showBack: false
    }));
  } catch (err) {
    console.error("Erro ao depositar código no Redis:", err.message);
    res.statusCode = 500;
    return res.end(renderPage({
      title: "Erro no Servidor",
      statusColor: "#E60000",
      badgeText: "Erro Interno",
      heading: "Falha ao Armazenar o Código",
      message: "O código foi recebido do Olist, mas ocorreu uma falha ao registrá-lo no servidor temporário.",
      subMessage: "Verifique se o Upstash Redis / Vercel KV está configurado corretamente.",
      showBack: true
    }));
  }
};
