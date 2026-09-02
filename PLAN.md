# PLAN.md — Elite Rodas WebSimples (SSD)

## Papéis de execução

| Papel | Responsável | Escopo |
|-------|-------------|--------|
| PO | Vinícius Tavares de Miranda | Dados, links, aprovação |
| PM / Arquiteto | Cursor | **Somente** `PLAN.md` e `AGENTS.md` |
| Desenvolvedor | Antigravity | HTML, CSS, `README.md` e assets conforme este plano |

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

## Pendências opcionais do PO (não bloqueiam publicação)

- Encarregado/DPO com nome dedicado (canal atual: adm.eliterodas@gmail.com)
- Prazo específico de retenção de dados (texto usa linguagem genérica conforme finalidades e obrigações legais)
