# AGENTS.md — Elite Rodas WebSimples

## Papéis

| Papel | Responsável | Função |
|-------|-------------|--------|
| PO (Product Owner) | Vinícius Tavares de Miranda | Dados de negócio, aprovação de textos legais e escopo |
| PM / Arquiteto | Cursor + PO | Spec-Driven (SSD): documenta em `PLAN.md` / `AGENTS.md`, revisão |
| Desenvolvedor | Antigravity | Implementação HTML/CSS, `README.md` e assets conforme `PLAN.md` |

**Divisão obrigatória:** Cursor/PM atualiza **somente** os arquivos Markdown de especificação (`PLAN.md`, `AGENTS.md`). Antigravity implementa o código (HTML/CSS e demais arquivos de entrega listados no plano). Não inverter esses papéis.

## Fluxo de decisão

1. PO define requisitos e dados jurídicos confirmados.
2. PM/Arquiteto documenta em `PLAN.md`.
3. Antigravity implementa conforme o plano.
4. **Se faltar dado ou houver ambiguidade jurídica → parar e perguntar ao PO.** Nunca inventar informações.

## Stack

- HTML estático
- CSS em **arquivo externo** (stylesheet linkado; extrair do embutido conforme pendência em `PLAN.md`)
- Assets locais em `assets/`
- Deploy: Vercel (Hobby)

## Regras para Antigravity

### Obrigatório

- Manter **Política de Privacidade** e **Termos de Uso** em **arquivos separados** — nunca unificar.
- Usar **somente** dados confirmados pelo PO em `PLAN.md` (CNPJ, razão social, tipos de dados, finalidades, **canais de contato**, **URLs de redes sociais**).
- Em `termos-de-uso.html`, a seção de **dúvidas/contato** deve usar o telefone SAC/pós-vendas confirmado em `PLAN.md`: **(21) 99306-1329** (link opcional: `https://wa.me/5521993061329`).
- Em `politica-de-privacidade.html`, as **seções 8 e 10** devem listar **WhatsApp comercial (21) 97320-8542** e **WhatsApp SAC/pós-vendas (21) 99306-1329**, explicando que o SAC é o canal para dúvidas, solicitações e exercício de direitos do titular relacionados à **LGPD**.
- Na seção **Assistência Técnica** (`#assistencia-tecnica` em `index.html`), os CTAs devem usar o **WhatsApp SAC/pós-vendas (21) 99306-1329** (`https://wa.me/5521993061329`), conforme `PLAN.md`.
- Números de telefone, papéis de cada canal e **links de redes sociais** vêm **exclusivamente** de `PLAN.md` — sem inventar contatos ou URLs.
- Nos cards de catálogo **X16**, **X18** e **Raptor**, a linha de especificação incompleta deve ser **“Consulte”** (não “Especificações em breve...”).
- Preferir CSS em stylesheet externo compartilhado; não reinventar tokens de marca fora do documentado.
- Não alterar o WhatsApp comercial **(21) 97320-8542** no header, catálogo, CTA banner e float sem instrução do PO.
- Declarar ausência de cookies e Google Analytics nesta versão do site.
- Parar e solicitar orientação ao PO em caso de dúvida.

### Footer (`index.html`) — layout obrigatório

Seguir a spec de 3 zonas em `PLAN.md`:

1. **`footer__grid` → Contato:** apenas **WhatsApp comercial**, **WhatsApp SAC/pós-vendas** e **e-mail**. **Não** exibir `@instagram` / handle Instagram nesta coluna (meios principais de contato = WhatsApp e e-mail; SAC é o terceiro canal de contato).
2. **`footer__utility`** (corpo do footer): **4 ícones circulares** no mesmo padrão visual (Instagram, Facebook, YouTube, TikTok) com URLs de `PLAN.md` + links **Política de Privacidade** · **Termos de Uso** na mesma faixa tipográfica. Instagram aparece **somente** como ícone aqui.
3. **`footer__bottom`:** copyright + **razão social** + **CNPJ** (valores de `PLAN.md`) + disclaimer **`Desenvolvido por Vinícius Tavares de Miranda`** (link `https://zweicoorp.com.br`). Remover “Projeto de Demonstração / Portfólio”.

### Proibido

- Inventar CNPJ, razão social, encarregado LGPD, parceiros, cookies, ferramentas de analytics, **números de telefone** ou **URLs de redes** não confirmados em `PLAN.md`.
- Alterar copy comercial, catálogo ou funcionalidades fora do escopo da sprint atual documentada em `PLAN.md`.
- Cursor/PM implementar HTML/CSS no lugar do Antigravity (exceto se o PO ordenar explicitamente o contrário).
- Colocar Instagram como linha de contato na coluna Contato.
- Alterar o texto do disclaimer para outro que não o confirmado em `PLAN.md` sem ordem do PO.

### Arquivos permitidos — entrega legal (histórico)

- `politica-de-privacidade.html`
- `termos-de-uso.html`
- Trecho de links legais no footer de `index.html`
- `README.md` (seção Documentos legais)
- `PLAN.md` (atualização de pendências, se necessário)

### Arquivos permitidos — sprint de melhorias (conforme `PLAN.md`)

- `index.html` (specs Consulte, assistência → SAC, footer grid/utility/bottom, link CSS)
- Arquivo(s) `.css` externo(s) (ex.: `styles.css` ou `assets/css/styles.css`)
- `politica-de-privacidade.html` / `termos-de-uso.html` (somente se CSS compartilhado)
- `README.md` (seção redes sociais / footer com URLs oficiais)

## Referências legais (Brasil)

- LGPD — Lei nº 13.709/2018
- Marco Civil da Internet — Lei nº 12.965/2014
- CDC — Lei nº 8.078/1990 (quando aplicável a relações de consumo)
