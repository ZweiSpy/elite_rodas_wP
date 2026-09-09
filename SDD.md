# SDD.md — Spec-Driven Design: Catálogo Elite Rodas

Documento técnico para o **Antigravity**. Dados de negócio e canais: sempre [`PLAN.md`](PLAN.md). Regras de agentes: [`AGENTS.md`](AGENTS.md).

**Sprint:** Catálogo dedicado (`/catalogos/`) — documentação 09/09/2026.

---

## 1. Objetivo

Página pública de catálogo com carregamento rápido, grade de cards e modal por modelo (galeria por cor + CTA WhatsApp agressivo). O `index.html` deixa de embutir a grade completa e passa a apontar para esta página.

## 2. Fora de escopo

Não alterar: footer, assistência técnica, OAuth (`api/`, `auth/`, `vercel.json`), páginas legais, WhatsApp flutuante (exceto se o plano pedir), copy comercial fora do catálogo.

## 3. Arquitetura de pastas

```text
catalogos/
  index.html           # página /catalogos/
  catalogo-data.js     # fonte de verdade dos 8 modelos
  catalogo.css         # estilos da página + modal (preferencial)
assets/
  *.jpeg               # fotos de referência atuais
  placeholder-moto.png # referência temporária AG MAX
  catalogo/            # futuro: {modelo}/{cor}/*.jpeg (quando o PO entregar)
styles.css             # tokens globais (reutilizar via link)
index.html             # só menu + CTA → /catalogos/ (mínimo)
```

**URL pública (Vercel estático):** `catalogos/index.html` → `https://<domínio>/catalogos/`

## 4. Modelos (8)

| id | name | cardImage (referência) |
|----|------|------------------------|
| `x11` | Scooter X11 | `../assets/x11.jpeg` |
| `x13` | Scooter X13 | `../assets/x13.jpeg` |
| `x16` | Scooter X16 | `../assets/x16.jpeg` |
| `dot` | Scooter DOT | `../assets/dot.jpeg` |
| `m16` | Scooter M16 | `../assets/m16.jpeg` |
| `triciclo-big` | Triciclo BIG | `../assets/triciclo.jpeg` |
| `raptor` | Scooter Raptor | `../assets/raptor.jpeg` |
| `ag-max` | AG MAX | `../assets/placeholder-moto.png` (temporário) |

**Não incluir:** X17, X18, X13 Pro, X13 Pro Max.

Specs curtas no **card** da grade podem reaproveitar as linhas atuais do index (X11, X13, etc.). Onde estava “Consulte” (X16, Raptor), manter **Consulte**. AG MAX: até o PO definir specs, usar **Consulte**.

## 5. Contrato de dados — `catalogo-data.js`

Exportar array `CATALOGO_MODELOS` (ou `window.CATALOGO_MODELOS`).

```js
{
  id: "x13",
  name: "Scooter X13",
  cardImage: "../assets/x13.jpeg",
  specs: ["Velocidade até 60-70 km/h", "Freio a Disco", "Painel Digital"], // opcional no card
  colors: [
    {
      id: "ref",
      label: "Referência",
      swatch: "#666666",
      photos: ["../assets/x13.jpeg"]
    }
  ],
  waCtaLabel: "Quero informações agora",
  waText: "Olá! Quero informações e valores do modelo Scooter X13."
}
```

### Regras do contrato

- **Sem** campo `summary` / descrição longa no modal.
- Cada modelo começa com **uma** cor `Referência` apontando para a foto atual.
- Quando o PO enviar cores reais: adicionar objetos em `colors` e arquivos em `assets/catalogo/{id}/{colorId}/`.
- `waCtaLabel`: tom **agressivo / urgente** (ex.: “Quero informações agora”, “Falar no WhatsApp agora”).
- Link WhatsApp: `https://wa.me/5521973208542?text=` + `encodeURIComponent(waText)`.
- Número comercial **somente** o confirmado em `PLAN.md` — não inventar.

### Exemplo AG MAX (temporário)

```js
{
  id: "ag-max",
  name: "AG MAX",
  cardImage: "../assets/placeholder-moto.png",
  specs: ["Consulte"],
  colors: [
    {
      id: "ref",
      label: "Referência",
      swatch: "#666666",
      photos: ["../assets/placeholder-moto.png"]
    }
  ],
  waCtaLabel: "Quero informações agora",
  waText: "Olá! Quero informações e valores do modelo AG MAX."
}
```

## 6. UX — grade e modal

### Grade

- Cards no mesmo espírito visual do site (tokens de `styles.css`).
- Clique no card (ou botão “Ver detalhes”) abre o modal do `id` correspondente.
- Botão secundário no card pode continuar “Consultar Modelo” direto no WhatsApp (mesmo `waText`), opcional.

### Modal

1. Overlay + painel (`role="dialog"`, `aria-modal="true"`, título com `name` do modelo).
2. Galeria: lista `photos` da cor ativa (imagem principal; se várias, thumbnails ou setas simples).
3. Seletor de cores: swatches; clique → define cor ativa e troca as fotos.
4. **CTA principal agressivo** (`waCtaLabel`) → WhatsApp comercial.
5. Fechar: botão X, clique no overlay, tecla Escape.
6. Focus: ao abrir, foco no modal; ao fechar, devolver ao card.

**Não** incluir parágrafo de marketing/descrição do modelo no modal.

## 7. Index (`index.html`) — alterações mínimas

| Elemento | Ação |
|----------|------|
| `nav` link Catálogo | `href="/catalogos/"` (ou `catalogos/`) |
| Seção `#catalogo` | Remover `catalog__grid`; manter header + **CTA** “Ver catálogo completo” → `/catalogos/` |
| CTA Sobre “Conhecer os modelos” | → `/catalogos/` |

Não recriar os 9 cards antigos no index.

## 8. Performance

- `loading="lazy"` nas imagens da grade (exceto as primeiras acima da dobra, se houver).
- CSS/JS do catálogo só na página `/catalogos/` (não carregar modal no index).
- Evitar imagens gigantes no card do AG MAX enquanto usar `placeholder-moto.png` (considerar `object-fit` / altura fixa do card).

## 9. Encoding e deploy

- Todos os arquivos novos (`.html`, `.css`, `.js`, `.json`): **UTF-8 sem BOM**.
- Não alterar `vercel.json` / `api/` / `package.json` nesta sprint.
- Fluxo: implementar em `develop` → Cursor audita → PO testa → merge `main`.

## 10. Critérios de aceite (Antigravity)

- [ ] `/catalogos/` lista os 8 modelos (sem X17/X18)
- [ ] Modal: fotos + cores + CTA WA agressivo; sem descrição longa
- [ ] Troca de cor atualiza as fotos
- [ ] Index: menu + CTA para `/catalogos/`; sem grade antiga
- [ ] WhatsApp = comercial de `PLAN.md`
- [ ] Arquivos sem BOM; escopo respeitado
