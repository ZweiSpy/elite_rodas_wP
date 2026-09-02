# PLAN.md — Sprint: Páginas Legais (SSD)

## Objetivo

Entregar Política de Privacidade (LGPD) e Termos de Uso como páginas HTML separadas, linkadas no rodapé de `index.html`.

## Baseline do site (já existente)

- Landing Elite Rodas (hero, sobre, galeria)
- Catálogo com 9 modelos
- Assistência técnica
- Footer com contato, Instagram, redes (placeholders), WhatsApp flutuante
- Open Graph configurado

## Escopo desta sprint

- [x] Gate PO: CNPJ e razão social confirmados
- [x] `AGENTS.md` e `PLAN.md`
- [x] `politica-de-privacidade.html`
- [x] `termos-de-uso.html`
- [x] Links no footer de `index.html`
- [x] Seção legal no `README.md`

## Fora de escopo

- Unificar política e termos em uma página
- Cookie banner, formulários de consentimento, backend
- Google Analytics (não utilizado nesta versão)
- Alteração de conteúdo comercial do site

## Dados confirmados pelo PO (02/09/2026)

### Identificação jurídica

| Campo | Valor |
|-------|-------|
| Razão social | Elite Rodas Comercio de Veiculos e Acessorios Automotivos LTDA |
| CNPJ | 31.915.664/0001-04 |
| Marca | Elite Rodas |
| Endereço | Rua Doutor Barros Júnior, 433 — Nova Iguaçu/RJ |
| WhatsApp comercial | (21) 97320-8542 |
| WhatsApp SAC/pós-vendas (dúvidas, LGPD e Termos) | (21) 99306-1329 |
| E-mail | adm.eliterodas@gmail.com |
| Instagram | @eliterodas021 |

### Contatos para documentos legais

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

### Dados pessoais coletados

CPF, CEP, endereço completo, nome completo, telefone, e-mail, data de nascimento.

### Finalidades

- Venda de produtos e serviços
- Geração de notas fiscais
- Fins comerciais internos da empresa

### Cookies e analytics

- Sem cookies nesta implementação
- Sem Google Analytics nesta implementação
- Uso futuro de analytics: somente após aviso e atualização dos documentos legais pelo PO

## Pendências do PO (opcionais)

- Encarregado/DPO com nome dedicado (canal atual: adm.eliterodas@gmail.com)
- Prazo específico de retenção de dados (redação usa linguagem genérica conforme finalidades e obrigações legais)

## Critérios de aceite

- [x] Duas páginas HTML distintas existem
- [x] Links acessíveis no footer de `index.html`
- [x] Política conforme LGPD com os 7 tipos de dados listados
- [x] Política declara ausência de cookies e GA
- [x] Termos deixam claro: coleta para venda, NF e operação comercial interna (sem cessão comercial externa)
- [x] CNPJ e razão social corretos em ambos os documentos

## Status da sprint

**Concluída** — 2 de setembro de 2026.

**Ajuste pós-entrega (02/09/2026):**
- Canal SAC/pós-vendas `(21) 99306-1329` documentado para Termos de Uso e Política de Privacidade.
- Política: seções 8 e 10 devem listar comercial + SAC, explicando que o SAC é canal para dúvidas e direitos LGPD.
- Implementação HTML concluída por Antigravity (02/09/2026).

## Pendência para Antigravity

### Termos de Uso (`termos-de-uso.html`)

- [x] Atualizar seção 11 (Contato): incluir WhatsApp SAC/pós-vendas `(21) 99306-1329` para dúvidas (link opcional: `https://wa.me/5521993061329`)
- [x] Manter e-mail `adm.eliterodas@gmail.com` e endereço inalterados

### Política de Privacidade (`politica-de-privacidade.html`)

- [x] Atualizar **seção 8 (Direitos do titular)**: listar e-mail + WhatsApp comercial `(21) 97320-8542` + WhatsApp SAC/pós-vendas `(21) 99306-1329`, explicando que o SAC é canal para dúvidas e exercício de direitos LGPD
- [x] Atualizar **seção 10 (Canal de contato / encarregado)**: mesma lista com papéis distintos

Texto sugerido para lista de contatos (seção 10):

```html
<li>E-mail: adm.eliterodas@gmail.com</li>
<li>WhatsApp comercial: (21) 97320-8542</li>
<li>WhatsApp SAC/pós-vendas (dúvidas e direitos LGPD): (21) 99306-1329</li>
<!-- link opcional SAC: https://wa.me/5521993061329 -->
<li>Endereço: Rua Doutor Barros Júnior, 433 — Nova Iguaçu/RJ</li>
```

Parágrafo sugerido (seção 8):

> Para exercer seus direitos ou esclarecer dúvidas sobre esta Política e a LGPD, entre em contato pelo e-mail adm.eliterodas@gmail.com, pelo WhatsApp comercial (21) 97320-8542 ou pelo canal SAC/pós-vendas (21) 99306-1329.

### Geral

- [x] Não alterar WhatsApp comercial `(21) 97320-8542` no restante do site sem instrução do PO
- [x] Não inventar DPO dedicado

## Pendências opcionais do PO (não bloqueiam publicação)

- Encarregado/DPO com nome dedicado (canal atual: adm.eliterodas@gmail.com)
- Prazo específico de retenção de dados (texto usa linguagem genérica conforme finalidades e obrigações legais)
