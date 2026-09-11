# PLAN.md — Elite Rodas WebSimples (SSD)

## Papéis de execução

| Papel | Responsável | Escopo |
|-------|-------------|--------|
| PO | Vinícius Tavares de Miranda | Dados, links, aprovação |
| PM / Arquiteto | Cursor | Documentos-verdade: `PLAN.md`, `SDD.md`, `AGENTS.md` + auditorias |
| Desenvolvedor | Antigravity | HTML, CSS, JS, `README.md` e assets conforme `PLAN.md` / `SDD.md` |

---

## Sprint: Páginas Legais (concluída — 02/09/2026)

### Objetivo

Entregar Política de Privacidade (LGPD) e Termos de Uso como páginas HTML separadas, linkadas no rodapé de `index.html`.

### Baseline do site (já existente)

- Landing Elite Rodas (hero, sobre, galeria)
- Catálogo com 9 modelos
- Assistência técnica
- Footer com contato, Instagram, redes, WhatsApp flutuante
- Open Graph configurado

### Escopo da sprint legal

- [x] Gate PO: CNPJ e razão social confirmados
- [x] `AGENTS.md` e `PLAN.md`
- [x] `politica-de-privacidade.html`
- [x] `termos-de-uso.html`
- [x] Links no footer de `index.html`
- [x] Seção legal no `README.md`

### Fora de escopo (legal)

- Unificar política e termos em uma página
- Cookie banner, formulários de consentimento, backend
- Google Analytics (não utilizado nesta versão)

### Dados confirmados pelo PO (02/09/2026)

#### Identificação jurídica

| Campo | Valor |
|-------|-------|
| Razão social | Elite Rodas Comercio de Veiculos e Acessorios Automotivos LTDA |
| CNPJ | 31.915.664/0001-04 |
| Marca | Elite Rodas |
| Endereço | Rua Doutor Barros Júnior, 433 — Nova Iguaçu/RJ |
| WhatsApp comercial | (21) 97320-8542 |
| WhatsApp SAC/pós-vendas (dúvidas, LGPD, Termos e Assistência Técnica) | (21) 99306-1329 |
| E-mail | adm.eliterodas@gmail.com |
| Instagram | @eliterodas021 |

#### Contatos para documentos legais

| Documento | Canal | Valor |
|-----------|-------|-------|
| Termos de Uso — seção Contato / dúvidas | WhatsApp SAC/pós-vendas | (21) 99306-1329 |
| Termos de Uso — link WhatsApp (opcional) | URL | `https://wa.me/5521993061329` |
| Política de Privacidade — seção 8 (Direitos do titular) | E-mail + WhatsApp comercial + WhatsApp SAC/pós-vendas | adm.eliterodas@gmail.com · (21) 97320-8542 · (21) 99306-1329 |
| Política de Privacidade — seção 10 (Canal de contato / encarregado) | E-mail + WhatsApp comercial + WhatsApp SAC/pós-vendas | adm.eliterodas@gmail.com · (21) 97320-8542 · (21) 99306-1329 |
| Política — papel do comercial | WhatsApp comercial | (21) 97320-8542 — contato geral / vendas |
| Política — papel do SAC | WhatsApp SAC/pós-vendas | (21) 99306-1329 — dúvidas, solicitações e direitos do titular (LGPD) |
| Política — link WhatsApp SAC (opcional) | URL | `https://wa.me/5521993061329` |
| Ambos | E-mail | adm.eliterodas@gmail.com |

#### Dados pessoais coletados

CPF, CEP, endereço completo, nome completo, telefone, e-mail, data de nascimento.

#### Finalidades

- Venda de produtos e serviços
- Geração de notas fiscais
- Fins comerciais internos da empresa

#### Cookies e analytics

- Sem cookies nesta implementação
- Sem Google Analytics nesta implementação
- Uso futuro de analytics: somente após aviso e atualização dos documentos legais pelo PO

### Critérios de aceite (legal)

- [x] Duas páginas HTML distintas existem
- [x] Links acessíveis no footer de `index.html`
- [x] Política conforme LGPD com os 7 tipos de dados listados
- [x] Política declara ausência de cookies e GA
- [x] Termos deixam claro: coleta para venda, NF e operação comercial interna (sem cessão comercial externa)
- [x] CNPJ e razão social corretos em ambos os documentos

### Status da sprint legal

**Concluída** — 2 de setembro de 2026.

**Ajuste pós-entrega (02/09/2026):**
- Canal SAC/pós-vendas `(21) 99306-1329` documentado para Termos de Uso e Política de Privacidade.
- Política: seções 8 e 10 listam comercial + SAC (SAC = dúvidas e direitos LGPD).
- Implementação HTML legal concluída por Antigravity (02/09/2026).

### Checklist Antigravity — páginas legais (concluído)

- [x] `termos-de-uso.html` seção 11: WhatsApp SAC `(21) 99306-1329`
- [x] `politica-de-privacidade.html` seções 8 e 10: comercial + SAC
- [x] Não inventar DPO dedicado

---

## Sprint: Melhorias de site (documentação 02/09/2026 — implementação Antigravity)

### Decisões do PO

| Item | Decisão |
|------|---------|
| Redes sociais | 4 ícones circulares (IG, FB, YT, TikTok) na faixa `footer__utility`, URLs oficiais abaixo |
| Specs X16 / X18 / Raptor | Trocar “Especificações em breve...” por **“Consulte”** |
| Assistência técnica | CTAs de `#assistencia-tecnica` → **WhatsApp SAC `(21) 99306-1329`** (`https://wa.me/5521993061329`); mensagens pré-preenchidas mantidas |
| CSS | Separar CSS do HTML em arquivo(s) externo(s) + `<link rel="stylesheet">` |
| Coluna Contato do footer | Só **WhatsApp comercial**, **WhatsApp SAC/pós-vendas** e **e-mail**. **Sem** `@instagram` / linha Instagram |
| Instagram | Apenas como **ícone** em `footer__utility` (não como meio de contato) |
| Disclaimer | **Suavizar** → `Desenvolvido por Vinícius Tavares de Miranda` (link `https://zweicoorp.com.br`) |
| Barra final do footer | Copyright + **razão social** + **CNPJ** + disclaimer acima |

### Mapeamento de canais WhatsApp (site)

| Uso no site | Canal | Telefone / URL |
|-------------|-------|----------------|
| Vendas, header CTA, catálogo “Consultar Modelo”, CTA banner, WhatsApp flutuante | Comercial | (21) 97320-8542 · `https://wa.me/5521973208542` |
| Coluna **Contato** do footer — WhatsApp comercial | Comercial | (21) 97320-8542 · `https://wa.me/5521973208542` |
| Coluna **Contato** do footer — WhatsApp SAC/pós-vendas | SAC/pós-vendas | (21) 99306-1329 · `https://wa.me/5521993061329` |
| Seção **Assistência Técnica** (`#assistencia-tecnica`) | SAC/pós-vendas | (21) 99306-1329 · `https://wa.me/5521993061329` |
| Termos / Política (dúvidas e LGPD) | Conforme tabela legal acima | SAC (+ comercial na Política) |

**Não** alterar o WhatsApp comercial no restante do site (header, catálogo, CTA banner, float) sem instrução do PO.

### Redes sociais oficiais (PO)

| Rede | URL |
|------|-----|
| Instagram | https://www.instagram.com/eliterodas021 (URL limpa, sem query `utm` / `igsh`) |
| Facebook | https://www.facebook.com/p/Elite-rodas-61563207035024/ |
| YouTube | https://www.youtube.com/@EliteRodas |
| TikTok | https://www.tiktok.com/@elite.rodas2 |

### Spec de layout do footer (3 zonas)

| Zona | Conteúdo |
|------|----------|
| `footer__grid` → Contato | WhatsApp comercial · WhatsApp SAC/pós-vendas · E-mail. **Remover** `@eliterodas021` desta coluna. Brand e Endereço permanecem. |
| `footer__utility` (corpo do footer, acima da linha fina) | 4 ícones circulares no **mesmo** padrão visual (IG, FB, YT, TikTok) + links **Política de Privacidade** · **Termos de Uso** (tipografia/hover unificados) |
| `footer__bottom` | Identidade legal + crédito (ver textos abaixo) |

Textos da barra final (`footer__bottom`):

```text
© 2026 Elite Rodas · Elite Rodas Comercio de Veiculos e Acessorios Automotivos LTDA · CNPJ 31.915.664/0001-04
Desenvolvido por Vinícius Tavares de Miranda
```

HTML sugerido do disclaimer:

```html
<p class="footer__disclaimer">Desenvolvido por <a href="https://zweicoorp.com.br" target="_blank" rel="noopener noreferrer">Vinícius Tavares de Miranda</a>.</p>
```

Antigravity pode quebrar a linha de © / razão / CNPJ em duas linhas no mobile; manter tipografia unificada (`var(--text-muted)`).

### Pendência para Antigravity (melhorias)

Ordem sugerida: CSS → specs → assistência SAC → footer (contato + utility + bottom) → README.

- [x] Extrair CSS embutido de `index.html` (e das páginas legais, se compartilhado) para arquivo `.css` (ex.: `styles.css` ou `assets/css/styles.css`) e linkar com `<link rel="stylesheet" href="...">`
- [x] Nos cards **X16**, **X18** e **Raptor**: substituir `Especificações em breve...` por `Consulte`
- [x] Em `#assistencia-tecnica`, ambos os CTAs: trocar `wa.me/5521973208542` por `https://wa.me/5521993061329` (manter textos das mensagens pré-preenchidas)
- [x] Coluna Contato: listar comercial `(21) 97320-8542`, SAC/pós-vendas `(21) 99306-1329` e e-mail; **remover** linha `@eliterodas021`
- [x] Criar/ajustar `footer__utility`: 4 ícones (IG, FB, YT, TikTok) com URLs oficiais + Política · Termos na mesma faixa tipográfica
- [x] `footer__bottom`: © + razão social + CNPJ + disclaimer **Desenvolvido por Vinícius Tavares de Miranda** (link zweicoorp); remover texto “Projeto de Demonstração / Portfólio”
- [x] Atualizar `README.md` (seção redes sociais) com as URLs oficiais e a nova estrutura do footer, se aplicável
- [x] Não alterar WhatsApp comercial no header, catálogo, CTA banner e float sem ordem do PO

### Fora de escopo nesta sprint de melhorias

- Menu mobile, zoom do catálogo, a11y extras, OG 1200×630, JSON-LD, remoção de `placeholder-moto.png` — salvo nova ordem do PO

---

## Sprint: Catálogo dedicado (documentação 09/09/2026 — implementação Antigravity)

Spec técnica completa: [`SDD.md`](SDD.md).

### Objetivo

Criar página pública **`/catalogos/`** com grade de cards rápida, modal por modelo (fotos + cores + CTA WhatsApp agressivo), e no `index.html` substituir a grade embutida por CTA + link no menu.

### Decisões do PO

| Item | Decisão |
|------|---------|
| URL pública | `/catalogos/` |
| Path no repo | `catalogos/index.html` |
| Index | Remover grade `#catalogo`; **CTA “Ver catálogo”** + item **Catálogo** no menu → `/catalogos/` |
| Modal | Fotos + seletor de cores (cor troca as fotos) + **CTA agressivo WhatsApp** — **sem** descrição longa do modelo |
| WhatsApp do modal / cards | Comercial `(21) 97320-8542` · `https://wa.me/5521973208542` |
| Assets atuais | Fotos em `assets/*.jpeg` como **referência** até o PO enviar cores/fotos definitivas |
| Modelos | Remover **X17** e **X18**; **X13** único (sem Pro / Pro Max); incluir **AG MAX** como card próprio |
| Fora de escopo | Contatos, assistência, OAuth (`api/`, `auth/`), footer, legais, demais seções do site |

### Catálogo alvo (8 modelos)

| id | Nome | Foto de referência (temporária) |
|----|------|----------------------------------|
| x11 | Scooter X11 | `assets/x11.jpeg` |
| x13 | Scooter X13 | `assets/x13.jpeg` |
| x16 | Scooter X16 | `assets/x16.jpeg` |
| dot | Scooter DOT | `assets/dot.jpeg` |
| m16 | Scooter M16 | `assets/m16.jpeg` |
| triciclo-big | Triciclo BIG | `assets/triciclo.jpeg` |
| raptor | Scooter Raptor | `assets/raptor.jpeg` |
| ag-max | AG MAX | Temporário: `assets/placeholder-moto.png` até o PO entregar a foto oficial |

**Removidos do catálogo:** X17, X18 (e qualquer menção a X13 Pro / Pro Max).

### Pendência para Antigravity (catálogo)

Ordem sugerida: `catalogo-data.js` → `catalogos/index.html` + CSS → modal JS → ajustes mínimos no `index.html` (menu + CTA) → README (link `/catalogos/`).

- [x] Criar `catalogos/index.html` (página dedicada, carregamento rápido)
- [x] Criar `catalogos/catalogo-data.js` com os **8** modelos conforme `SDD.md` (cor `Referência` + foto atual; AG MAX com placeholder)
- [x] Criar CSS do catálogo (`catalogos/catalogo.css` ou extensão de `styles.css`) — **UTF-8 sem BOM**
- [x] Grade de cards; clique abre modal (fotos + cores + CTA WA agressivo, sem texto descritivo longo)
- [x] Seletor de cores troca o conjunto `photos` da cor ativa
- [x] Em `index.html`: nav **Catálogo** → `/catalogos/`; seção `#catalogo` vira CTA “Ver catálogo”; link “Conhecer os modelos” → `/catalogos/`
- [x] Remover cards X17 e X18 do fluxo (não recriar na nova página)
- [x] Não alterar OAuth, footer, assistência, legais, contatos
- [x] Atualizar `README.md` com a URL `/catalogos/` (seção estrutura / catálogo)

### Auditoria Cursor (09/09/2026)

**Veredito: APROVADO** para teste do PO (preview `develop` após commit/push).

- Entrega conforme `SDD.md` / este `PLAN.md` nos critérios bloqueantes (8 modelos, modal, WA comercial, index CTA, sem BOM, OAuth intocado).
- **Ressalvas menores (não bloqueiam):** specs curtas (“Destaques”) no modal; AG MAX ainda com `placeholder-moto.png`; estilos inline no CTA do `index`.
- **Não mergear `main`** até o PO validar visualmente o preview.

### Pendências do PO (catálogo — estrutura base)

- Validação visual no preview `develop` e autorização de merge `main` (estrutura base)
- Refino do copy dos CTAs WhatsApp (`waCtaLabel` / `waText`), se desejar

---

## Sprint: Cores e ângulos do catálogo (documentação 10/09/2026 — implementação Antigravity)

Spec: [`SDD.md`](SDD.md). **Atualização PO 11/09/2026:** assets renomeados para `{modelo}[-{n}]-{cor}.jpeg` (M16, X13, DOT, AG MAX).

### Decisões do PO

| Item | Decisão |
|------|---------|
| Padrão de nome | `{modelo}[-{n}]-{cor}.jpeg` — **cor sempre por último** |
| Ângulos | `modelo-cor`, `modelo-1-cor`, `modelo-2-cor`… = **mesma cor**, ângulos diferentes |
| Cores sem arquivo | Swatch visível; fallback da última cor com fotos + “Fotos desta cor em breve” |
| `WhatsApp Image…` / `placeholder-moto.png` | **Ignorar** — não usar no catálogo |
| X13 — Preto | Substituído por **Preto brilhoso** + **Preto fosco** (confirmado PO 11/09/2026) |
| X13 — Carbono | **3 ângulos** agora (`x13-carbono`, `-1-`, `-2-`); **4º ângulo** = pendência futura do PO (não bloqueia esta sprint) |
| X11 / X16 / Raptor / Triciclo | Permanecem **provisórios** (arquivo sem sufixo de cor na 1ª cor) até o PO entregar `*-{cor}` |

### Auditoria prévia (10–11/09/2026)

Entrega Antigravity da fase provisória (1ª cor com fotos antigas): **APROVADA** no código, com ressalvas de versionamento Git/case `M16` no deploy. Esta atualização **substitui** o mapeamento provisório onde há `*-{cor}`.

### Mapeamento de assets (11/09/2026)

**Case Vercel (Linux):** paths exatos — prefixo `M16-` com **M maiúsculo**.

#### Com `*-{cor}` (usar paths abaixo em `catalogo-data.js`)

| Modelo | id | Cores (ordem no seletor) | Arquivos `photos` por cor |
|--------|----|--------------------------|---------------------------|
| M16 | `m16` | Cinza, Verde claro | **Cinza:** `M16-cinza.jpeg`, `M16-1-cinza.jpeg`, `M16-2-cinza.jpeg` · **Verde claro:** `M16-verde-claro.jpeg`, `M16-1-verde-claro.jpeg`, `M16-2-verde-claro.jpeg` |
| X13 | `x13` | Preto brilhoso, Preto fosco, Branco, Azul, Vermelho, Carbono | **Preto brilhoso:** `x13-preto-brilhoso.jpeg` … `x13-3-preto-brilhoso.jpeg` · **Preto fosco:** `x13-preto-fosco.jpeg` … `x13-3-preto-fosco.jpeg` · **Branco:** `x13-branco.jpeg` … `x13-3-branco.jpeg` · **Azul:** `x13-azul.jpeg` … `x13-3-azul.jpeg` · **Vermelho:** `x13-vermelho.jpeg` … `x13-3-vermelho.jpeg` · **Carbono:** `x13-carbono.jpeg`, `x13-1-carbono.jpeg`, `x13-2-carbono.jpeg` (sem `-3` nesta sprint) |
| DOT | `dot` | Preto, Branco, Cinza | **Preto:** `dot-preto.jpeg`, `dot-1-preto.jpeg`, `dot-2-preto.jpeg` · **Branco:** `dot-branco.jpeg`, `dot-1-branco.jpeg`, `dot-2-branco.jpeg` · **Cinza:** `dot-cinza.jpeg`, `dot-1-cinza.jpeg`, `dot-2-cinza.jpeg` |
| AG MAX | `ag-max` | Cinza | **Cinza:** `ag-max-cinza.jpeg`, `ag-max-1-cinza.jpeg`, `ag-max-2-cinza.jpeg` |

Paths no JS: prefixo `../assets/` (ex.: `../assets/M16-cinza.jpeg`).

#### Ainda provisórios (sem sufixo de cor)

| Modelo | id | Cores (ordem) | Arquivos → 1ª cor | Demais cores |
|--------|----|---------------|-------------------|--------------|
| X11 | `x11` | Preto, Branco, Azul, Vermelho | `x11.jpeg` → Preto | `photos: []` |
| X16 | `x16` | Preto, Branco, Azul, Vermelho | `x16.jpeg` → Preto | `photos: []` |
| Raptor | `raptor` | Vermelho, Preto, Cinza | `raptor.jpeg` → Vermelho | `photos: []` |
| Triciclo BIG | `triciclo-big` | Bege, Preto | `triciclo.jpeg` → Bege | `photos: []` |

### Pendência para Antigravity (assets por cor — 11/09/2026)

- [ ] Reescrever `catalogos/catalogo-data.js` com a tabela acima (ids/labels/swatches/`photos`); UTF-8 **sem BOM**
- [ ] Remover paths antigos sem cor onde o PO já entregou `*-{cor}` (`x13.jpeg`, `M16.jpeg`, `dot.jpeg`, `ag-max.jpeg`, etc.)
- [ ] `cardImage` = primeira foto da primeira cor que tiver `photos.length > 0`
- [ ] X13: **sem** cor `preto` única — usar `preto-brilhoso` e `preto-fosco`
- [ ] X13 carbono: exatamente 3 fotos listadas; não inventar `x13-3-carbono.jpeg`
- [ ] X11 / X16 / Raptor / Triciclo: manter regra provisória
- [ ] Modal: manter fallback + “Fotos desta cor em breve” onde `photos: []`
- [ ] Não incluir `WhatsApp Image…` nem `placeholder-moto.png`
- [ ] Não alterar OAuth, footer, assistência, legais, `index.html` raiz
- [ ] Versionar no Git os assets `*-{cor}` novos + paths case-sensitive; push `develop` para preview

### Pendências do PO (após esta entrega)

- Validar preview `develop` e autorizar merge `main`
- Entregar `*-{cor}` para X11, X16, Raptor e Triciclo BIG
- Entregar **4º ângulo** do X13 Carbono (`x13-3-carbono.jpeg`) em sprint futura
- Refino de copy WA, se desejar

---

## Pendências opcionais do PO (não bloqueiam publicação)

- Encarregado/DPO com nome dedicado (canal atual: adm.eliterodas@gmail.com)
- Prazo específico de retenção de dados (texto usa linguagem genérica conforme finalidades e obrigações legais)
- Completar assets `*-{cor}` dos modelos ainda provisórios + 4º ângulo carbono X13
