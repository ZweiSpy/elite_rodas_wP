/**
 * Rota para iniciar a autorização OAuth com o Olist.
 * Redireciona o usuário para o endpoint oficial do Olist Accounts.
 */

module.exports = async function handler(req, res) {
  const clientId = process.env.OLIST_CLIENT_ID;
  const redirectUri = process.env.OLIST_REDIRECT_URI || "https://www.eliterodas.com.br/auth/callback";

  if (!clientId) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <title>Configuração Pendente | Elite Rodas</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <main class="legal-main" style="max-width: 600px; margin: 4rem auto; padding: 2rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border);">
          <h1 style="color: var(--accent); margin-bottom: 1rem;">Configuração Incompleta</h1>
          <p>A variável de ambiente <strong>OLIST_CLIENT_ID</strong> não está configurada no painel da Vercel.</p>
          <p style="margin-top: 1rem;"><a href="/auth" style="color: #fff; text-decoration: underline;">&larr; Voltar</a></p>
        </main>
      </body>
      </html>
    `);
  }

  const olistAuthUrl = new URL("https://accounts.olist.com/oauth/authorize");
  olistAuthUrl.searchParams.set("client_id", clientId);
  olistAuthUrl.searchParams.set("redirect_uri", redirectUri);
  olistAuthUrl.searchParams.set("response_type", "code");
  olistAuthUrl.searchParams.set("scope", "openid");

  res.statusCode = 302;
  res.setHeader("Location", olistAuthUrl.toString());
  res.end();
};
