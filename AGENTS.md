# AGENTS.md — Elite Rodas WebSimples

## Papéis

| Papel | Responsável | Função |
|-------|-------------|--------|
| PO (Product Owner) | Vinícius Tavares de Miranda | Dados de negócio, aprovação de textos legais e escopo |
| PM / Arquiteto | Cursor + PO | Spec-Driven (SSD), revisão, integração |
| Desenvolvedor | Antigravity | Implementação HTML/CSS e redação de termos/política conforme LGPD |

## Fluxo de decisão

1. PO define requisitos e dados jurídicos confirmados.
2. PM/Arquiteto documenta em `PLAN.md`.
3. Antigravity implementa conforme o plano.
4. **Se faltar dado ou houver ambiguidade jurídica → parar e perguntar ao PO.** Nunca inventar informações.

## Stack

- HTML estático, CSS embutido em `<style>`
- Assets locais em `assets/`
- Deploy: Vercel (Hobby)

## Regras para Antigravity

### Obrigatório

- Manter **Política de Privacidade** e **Termos de Uso** em **arquivos separados** — nunca unificar.
- Usar **somente** dados confirmados pelo PO em `PLAN.md` (CNPJ, razão social, tipos de dados, finalidades, **canais de contato**).
- Em `termos-de-uso.html`, a seção de **dúvidas/contato** deve usar o telefone SAC/pós-vendas confirmado em `PLAN.md`: **(21) 99306-1329** (link opcional: `https://wa.me/5521993061329`).
- Em `politica-de-privacidade.html`, as **seções 8 e 10** devem listar **WhatsApp comercial (21) 97320-8542** e **WhatsApp SAC/pós-vendas (21) 99306-1329**, explicando que o SAC é o canal para dúvidas, solicitações e exercício de direitos do titular relacionados à **LGPD**.
- Números de telefone e papéis de cada canal vêm **exclusivamente** de `PLAN.md` — sem inventar contatos.
- Não alterar o WhatsApp comercial **(21) 97320-8542** no restante do site sem instrução do PO.
- Declarar ausência de cookies e Google Analytics nesta versão do site.
- Parar e solicitar orientação ao PO em caso de dúvida.

### Proibido

- Inventar CNPJ, razão social, encarregado LGPD, parceiros, cookies, ferramentas de analytics ou **números de telefone** não confirmados em `PLAN.md`.
- Alterar copy comercial, catálogo ou funcionalidades fora do escopo da sprint atual.

### Arquivos permitidos nesta entrega legal

- `politica-de-privacidade.html`
- `termos-de-uso.html`
- Trecho de links legais no footer de `index.html`
- `README.md` (seção Documentos legais)
- `PLAN.md` (atualização de pendências, se necessário)

## Referências legais (Brasil)

- LGPD — Lei nº 13.709/2018
- Marco Civil da Internet — Lei nº 12.965/2014
- CDC — Lei nº 8.078/1990 (quando aplicável a relações de consumo)
