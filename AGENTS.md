# AGENTS.md — Elite Rodas WebSimples

## Papéis

| Papel | Responsável | Função |
|-------|-------------|--------|
| PO (Product Owner) | Vinícius Tavares de Miranda | Dados de negócio, aprovação de textos, modelos e escopo |
| PM / Arquiteto / Desenvolvedor | Antigravity | Gestão técnica dos documentos-verdade (`PLAN.md`, `SDD.md`), arquitetura do sistema, auditorias e implementação HTML/CSS/JS e assets |

**Documentos-verdade:** [`PLAN.md`](PLAN.md), [`SDD.md`](SDD.md), [`AGENTS.md`](AGENTS.md).

**Governança:** Antigravity atua de ponta a ponta na especificação técnica, documentação e implementação, com validação e aprovação do PO antes de publicação em produção (`main`).

## Fluxo de decisão

1. PO define requisitos, modelos, fotos e dados confirmados.
2. Antigravity documenta e atualiza `PLAN.md` / `SDD.md` / `AGENTS.md`.
3. Antigravity implementa o código e assets conforme as especificações aprovadas.
4. Antigravity audita (escopo, UTF-8 sem BOM, JSON válido, links e paths case-sensitive).
5. PO valida no preview (`develop`) para autorizar publicação em produção (`main`).
6. **Se faltar dado ou houver ambiguidade → parar e perguntar ao PO.** Nunca inventar informações comerciais ou cadastrais.

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

### Auditoria Técnica (pré-push / pré-merge)

- [ ] Diff alinhado ao escopo da sprint em `PLAN.md` / `SDD.md`
- [ ] Sem BOM nos arquivos tocados (UTF-8 estrito)
- [ ] `package.json` / `vercel.json` parseiam sem erros
- [ ] Números, URLs e modelos só os documentados e aprovados pelo PO
- [ ] Site institucional / OAuth / footer intocados se fora do escopo
- [ ] Paths de assets case-sensitive e arquivos versionados no Git

## Regras para Antigravity

### Obrigatório

- Usar **somente** dados de `PLAN.md` / `SDD.md` confirmados pelo PO.
- Manter **Política** e **Termos** em arquivos separados.
- Canais WhatsApp e redes: exclusivamente os documentados em `PLAN.md`.
- Catálogo: seguir **`SDD.md`** (modelos ativos, modal interativo, CTA WA comercial, sem descrição longa no modal padrão).
- Preferir CSS externo; tokens de marca alinhados a `styles.css`.
- Declarar ausência de cookies e GA nesta versão do site (páginas legais).
- Parar e perguntar ao PO em caso de dúvida.

### Sprint Atual — Novos Modelos (Zenvo, Savage) e Lançamentos Confidenciais (Outubro/2026)

- Seguir **`SDD.md`** e **`PLAN.md`**.
- Adicionar **Scooter Zenvo** (Vermelho, 3 fotos `.webp`) e **Scooter Savage** (Verde, 3 fotos `.webp`).
- Adicionar 2 cards misteriosos com fita "EM BREVE", estética de suspense e design confidencial:
  - **Lançamento Confidencial I**
  - **Lançamento Confidencial II**
- No modal dos cards confidenciais: descrição instigante/teaser e CTA para entrada na Lista VIP do WhatsApp.
- Preservar integridade dos modelos anteriores (X11, X13, Tank Pro, DOT, M16, Triciclo BIG, AG MAX).

### Footer (`index.html`) — layout (já entregue; não redesenhar nesta sprint)

1. Contato: comercial + SAC + e-mail (sem @instagram).
2. `footer__utility`: 4 ícones + Política · Termos.
3. `footer__bottom`: © + razão + CNPJ + Desenvolvido por…

### Proibido

- Inventar CNPJ, contatos, URLs ou cores não confirmadas pelo PO.
- Commitar arquivos com BOM UTF-8.
- Incluir arquivos soltos do tipo `WhatsApp Image…` no catálogo.

### Arquivos permitidos nesta sprint

- `catalogos/catalogo-data.js` (novos modelos e dados)
- `catalogos/index.html` e `catalogos/catalogo.css` (fita "EM BREVE", estilos de suspense e modal teaser)
- Documentos-verdade: `PLAN.md`, `SDD.md`, `AGENTS.md`, `README.md`
- Assets oficiais vinculados aos novos modelos (`assets/*.webp`, `placeholder-moto.png`)

## Referências legais (Brasil)

- LGPD — Lei nº 13.709/2018
- Marco Civil da Internet — Lei nº 12.965/2014
- CDC — Lei nº 8.078/1990 (quando aplicável a relações de consumo)
