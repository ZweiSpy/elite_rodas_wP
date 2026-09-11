# AGENTS.md — Elite Rodas WebSimples

## Papéis

| Papel | Responsável | Função |
|-------|-------------|--------|
| PO (Product Owner) | Vinícius Tavares de Miranda | Dados de negócio, aprovação de textos e escopo |
| PM / Arquiteto | Cursor + PO | Spec-Driven: documentos-verdade + auditorias reais |
| Desenvolvedor | Antigravity | Implementação HTML/CSS/JS, `README.md` e assets conforme docs |

**Documentos-verdade (Cursor):** [`PLAN.md`](PLAN.md), [`SDD.md`](SDD.md), [`AGENTS.md`](AGENTS.md).

**Divisão obrigatória:** Cursor/PM atualiza **somente** esses Markdown de especificação. Antigravity implementa o código. Não inverter.

## Fluxo de decisão

1. PO define requisitos e dados confirmados.
2. Cursor documenta em `PLAN.md` / `SDD.md` / `AGENTS.md`.
3. Antigravity implementa conforme os docs.
4. Cursor audita (escopo, BOM, JSON, links) antes de merge/`main`.
5. **Se faltar dado ou houver ambiguidade → parar e perguntar ao PO.** Nunca inventar informações.

## Stack

- HTML estático na raiz + páginas em pastas (`catalogos/`, `auth/`)
- CSS externo (`styles.css`, e/ou CSS de página)
- Assets em `assets/`
- Serverless em `api/` (OAuth Olist — fora do escopo do catálogo)
- Deploy: Vercel (Hobby)

## Lógica de funcionamento na Vercel (obrigatório conhecer)

| Recurso | Comportamento |
|---------|----------------|
| Arquivos estáticos | `index.html` → `/`; `catalogos/index.html` → **`/catalogos/`**; `auth/index.html` → `/auth` (rewrite) |
| `api/**/*.js` | Serverless Functions em `/api/...` |
| [`vercel.json`](vercel.json) | Rewrites OAuth (`/auth/login` → `/api/auth/login`, etc.) |
| [`package.json`](package.json) | Manifesto do projeto; **deve ser JSON UTF-8 sem BOM** |
| Preview | Branch **`develop`** |
| Produção | Branch **`main`** após merge aprovado pelo PO |
| Env Olist / Redis / KV | Só runtime OAuth — **não** necessárias para build/deploy do catálogo estático |

### Encoding (causa histórica de deploy vermelho)

- `vercel.json`, `package.json` e qualquer `.js`/`.html` commitado: **UTF-8 sem BOM** (`EF BB BF` proibido).
- Antes de push: validar `JSON.parse` em `package.json` e `vercel.json`; scan de BOM nos arquivos novos/alterados.

### Auditoria Cursor (pré-push / pré-merge)

- [ ] Diff limitado ao escopo da sprint em `PLAN.md` / `SDD.md`
- [ ] Sem BOM nos arquivos tocados
- [ ] `package.json` / `vercel.json` parseiam se alterados
- [ ] Números, URLs e modelos só os documentados
- [ ] Site institucional / OAuth / footer intocados se fora do escopo
- [ ] Paths de assets case-sensitive e arquivos `*-{cor}` versionados no Git

## Regras para Antigravity

### Obrigatório

- Usar **somente** dados de `PLAN.md` / `SDD.md`.
- Manter **Política** e **Termos** em arquivos separados.
- Canais WhatsApp e redes: exclusivamente `PLAN.md`.
- Catálogo: seguir **`SDD.md`** (8 modelos, modal, CTA WA agressivo, sem descrição longa no modal).
- Preferir CSS externo; tokens de marca alinhados a `styles.css`.
- Declarar ausência de cookies e GA nesta versão do site (páginas legais).
- Parar e perguntar ao PO em caso de dúvida.

### Sprint atual — assets por cor (11/09/2026)

- Seguir **`SDD.md`** §§4–7 e checklist §11; tabela em **`PLAN.md`**.
- Padrão: `{modelo}[-{n}]-{cor}.jpeg` (cor por último).
- **M16, X13, DOT, AG MAX:** `photos` com paths `*-{cor}` reais (não usar nomes antigos sem cor).
- **X13:** cores `preto-brilhoso` + `preto-fosco` (não `preto` único); carbono com **3** fotos; não inventar `x13-3-carbono.jpeg`.
- **X11, X16, Raptor, Triciclo:** provisórios (arquivo sem cor na 1ª cor; demais `photos: []`).
- Case: `M16-cinza.jpeg` etc. com **M maiúsculo**.
- Modal: cor sem fotos → fallback + “Fotos desta cor em breve”.
- Ignorar `WhatsApp Image…` e `placeholder-moto.png`. WhatsApp catálogo: **(21) 97320-8542**.
- Não alterar index raiz / footer / OAuth / legais nesta sprint.

### Footer (`index.html`) — layout (já entregue; não redesenhar nesta sprint)

1. Contato: comercial + SAC + e-mail (sem @instagram).
2. `footer__utility`: 4 ícones + Política · Termos.
3. `footer__bottom`: © + razão + CNPJ + Desenvolvido por…

### Proibido

- Inventar CNPJ, contatos, URLs, cores oficiais ou fotos não confirmadas pelo PO.
- Inventar `x13-3-carbono.jpeg` ou `*-{cor}` dos modelos provisórios.
- Alterar OAuth, footer, assistência, legais nesta sprint.
- Cursor implementar HTML/CSS no lugar do Antigravity (exceto ordem explícita do PO).
- Commitar arquivos com BOM UTF-8.
- Incluir arquivos `WhatsApp Image…` / `placeholder-moto.png` no catálogo.

### Arquivos permitidos — sprint assets por cor

- `catalogos/catalogo-data.js` (reescrever cores + photos)
- `catalogos/index.html` / `catalogos/catalogo.css` (somente se o fallback/modal já não cobrir a UX)
- `assets/` — versionar os `*-{cor}` entregues pelo PO (sem `WhatsApp Image…`)
- Documentos-verdade: só Cursor (`PLAN.md`, `SDD.md`, `AGENTS.md`)

## Referências legais (Brasil)

- LGPD — Lei nº 13.709/2018
- Marco Civil da Internet — Lei nº 12.965/2014
- CDC — Lei nº 8.078/1990 (quando aplicável a relações de consumo)
