# SDD.md — Spec-Driven Design: Catálogo Elite Rodas

Documento técnico para o **Antigravity**. Dados de negócio e canais: sempre [`PLAN.md`](PLAN.md). Regras de agentes: [`AGENTS.md`](AGENTS.md).

**Sprint base:** Catálogo dedicado (`/catalogos/`) — documentação 09/09/2026.  
**Sprint atual:** Cores e ângulos — documentação 10/09/2026; **assets por cor** atualizados pelo PO em 11/09/2026.

---

## 1. Objetivo

Página pública de catálogo com carregamento rápido, grade de cards e modal por modelo (galeria por **ângulos da cor ativa** + seletor de cores oficiais + CTA WhatsApp agressivo). O `index.html` aponta para esta página (sem grade embutida).

## 2. Fora de escopo

Não alterar: footer, assistência técnica, OAuth (`api/`, `auth/`, `vercel.json`), páginas legais, WhatsApp flutuante (exceto se o plano pedir), copy comercial fora do catálogo, `index.html` raiz.

**Fora desta entrega:** inventar `x13-3-carbono.jpeg`; inventar `*-{cor}` para X11/X16/Raptor/Triciclo; usar `WhatsApp Image…` ou `placeholder-moto.png`.

## 3. Arquitetura de pastas

```text
catalogos/
  index.html           # página /catalogos/
  catalogo-data.js     # fonte de verdade dos 8 modelos + cores
  catalogo.css         # estilos da página + modal
assets/
  {modelo}[-{n}]-{cor}.jpeg   # preferencial (case-sensitive na Vercel)
  x11.jpeg, x16.jpeg, raptor.jpeg, triciclo.jpeg  # provisórios
styles.css
index.html             # só menu + CTA → /catalogos/
```

**URL pública:** `catalogos/index.html` → `https://<domínio>/catalogos/`

**Ignorar em `assets/`:** nomes que começam com `WhatsApp Image`; `placeholder-moto.png` no catálogo.

## 4. Convenção de nomes de arquivos

| Conceito | Regra |
|----------|--------|
| Padrão | `{modelo}[-{n}]-{cor}.jpeg` — **cor sempre por último** |
| Exemplos | `x13-preto-brilhoso.jpeg`, `x13-1-preto-fosco.jpeg`, `M16-cinza.jpeg`, `M16-1-verde-claro.jpeg`, `dot-preto.jpeg`, `ag-max-cinza.jpeg` |
| Numeração `-1`, `-2`… | Só ângulo; ordem de exibição = ordem no array `photos` |
| Case Vercel | `M16-…` com **M maiúsculo** (nunca `m16-…`) |

Modelos **ainda provisórios** (sem sufixo de cor): colocar o arquivo único na **primeira cor** da lista; demais cores com `photos: []`.

## 5. Modelos (8) + cores oficiais + assets

### 5.1 Com arquivos `*-{cor}` (obrigatório nesta entrega)

| id | name | Cores (ordem) | `photos` por cor (prefixo `../assets/`) |
|----|------|---------------|----------------------------------------|
| `m16` | Scooter M16 | Cinza, Verde claro | Cinza: `M16-cinza.jpeg`, `M16-1-cinza.jpeg`, `M16-2-cinza.jpeg` · Verde claro: `M16-verde-claro.jpeg`, `M16-1-verde-claro.jpeg`, `M16-2-verde-claro.jpeg` |
| `x13` | Scooter X13 | Preto brilhoso, Preto fosco, Branco, Azul, Vermelho, Carbono | Preto brilhoso: `x13-preto-brilhoso.jpeg` … `x13-3-preto-brilhoso.jpeg` · Preto fosco: `x13-preto-fosco.jpeg` … `x13-3-preto-fosco.jpeg` · Branco: `x13-branco.jpeg` … `x13-3-branco.jpeg` · Azul: `x13-azul.jpeg` … `x13-3-azul.jpeg` · Vermelho: `x13-vermelho.jpeg` … `x13-3-vermelho.jpeg` · Carbono: `x13-carbono.jpeg`, `x13-1-carbono.jpeg`, `x13-2-carbono.jpeg` (**sem** `-3` nesta sprint; 4º ângulo = PO futuro) |
| `dot` | Scooter DOT | Preto, Branco, Cinza | Preto: `dot-preto.jpeg`, `dot-1-preto.jpeg`, `dot-2-preto.jpeg` · Branco: `dot-branco.jpeg`, `dot-1-branco.jpeg`, `dot-2-branco.jpeg` · Cinza: `dot-cinza.jpeg`, `dot-1-cinza.jpeg`, `dot-2-cinza.jpeg` |
| `ag-max` | AG MAX | Cinza | `ag-max-cinza.jpeg`, `ag-max-1-cinza.jpeg`, `ag-max-2-cinza.jpeg` |

**X13:** não usar id/label `preto` único — apenas `preto-brilhoso` e `preto-fosco`.

### 5.2 Ainda provisórios

| id | name | Cores (ordem) | Arquivo → 1ª cor |
|----|------|---------------|------------------|
| `x11` | Scooter X11 | Preto, Branco, Azul, Vermelho | `x11.jpeg` → Preto |
| `x16` | Scooter X16 | Preto, Branco, Azul, Vermelho | `x16.jpeg` → Preto |
| `raptor` | Scooter Raptor | Vermelho, Preto, Cinza | `raptor.jpeg` → Vermelho |
| `triciclo-big` | Triciclo BIG | Bege, Preto | `triciclo.jpeg` → Bege |

**Não incluir:** X17, X18, X13 Pro, X13 Pro Max.

**cardImage:** primeira foto da primeira cor com `photos.length > 0`.

Specs no card: reaproveitar as atuais. X16, Raptor, AG MAX: manter **Consulte** onde já estava.

### Swatches hex (UI)

| Cor | id | swatch |
|-----|-----|--------|
| Preto | `preto` | `#111111` |
| Preto brilhoso | `preto-brilhoso` | `#111111` |
| Preto fosco | `preto-fosco` | `#3d3d3d` |
| Branco | `branco` | `#f2f2f2` |
| Azul | `azul` | `#1e4fd6` |
| Vermelho | `vermelho` | `#e60000` |
| Cinza | `cinza` | `#8a8a8a` |
| Verde claro | `verde-claro` | `#7dce7a` |
| Carbono | `carbono` | `#2a2a2a` |
| Bege | `bege` | `#d4c4a8` |

## 6. Contrato de dados — `catalogo-data.js`

Exportar `CATALOGO_MODELOS` (ou `window.CATALOGO_MODELOS`).

### Exemplo X13 (trecho)

```js
{
  id: "x13",
  name: "Scooter X13",
  cardImage: "../assets/x13-preto-brilhoso.jpeg",
  specs: ["Velocidade até 60-70 km/h", "Freio a Disco", "Painel Digital"],
  colors: [
    {
      id: "preto-brilhoso",
      label: "Preto brilhoso",
      swatch: "#111111",
      photos: [
        "../assets/x13-preto-brilhoso.jpeg",
        "../assets/x13-1-preto-brilhoso.jpeg",
        "../assets/x13-2-preto-brilhoso.jpeg",
        "../assets/x13-3-preto-brilhoso.jpeg"
      ]
    },
    {
      id: "preto-fosco",
      label: "Preto fosco",
      swatch: "#3d3d3d",
      photos: [
        "../assets/x13-preto-fosco.jpeg",
        "../assets/x13-1-preto-fosco.jpeg",
        "../assets/x13-2-preto-fosco.jpeg",
        "../assets/x13-3-preto-fosco.jpeg"
      ]
    },
    {
      id: "branco",
      label: "Branco",
      swatch: "#f2f2f2",
      photos: [
        "../assets/x13-branco.jpeg",
        "../assets/x13-1-branco.jpeg",
        "../assets/x13-2-branco.jpeg",
        "../assets/x13-3-branco.jpeg"
      ]
    },
    {
      id: "azul",
      label: "Azul",
      swatch: "#1e4fd6",
      photos: [
        "../assets/x13-azul.jpeg",
        "../assets/x13-1-azul.jpeg",
        "../assets/x13-2-azul.jpeg",
        "../assets/x13-3-azul.jpeg"
      ]
    },
    {
      id: "vermelho",
      label: "Vermelho",
      swatch: "#e60000",
      photos: [
        "../assets/x13-vermelho.jpeg",
        "../assets/x13-1-vermelho.jpeg",
        "../assets/x13-2-vermelho.jpeg",
        "../assets/x13-3-vermelho.jpeg"
      ]
    },
    {
      id: "carbono",
      label: "Carbono",
      swatch: "#2a2a2a",
      photos: [
        "../assets/x13-carbono.jpeg",
        "../assets/x13-1-carbono.jpeg",
        "../assets/x13-2-carbono.jpeg"
      ]
    }
  ],
  waCtaLabel: "Quero informações agora",
  waText: "Olá! Quero informações e valores do modelo Scooter X13."
}
```

### Exemplo AG MAX

```js
{
  id: "ag-max",
  name: "AG MAX",
  cardImage: "../assets/ag-max-cinza.jpeg",
  specs: ["Consulte"],
  colors: [
    {
      id: "cinza",
      label: "Cinza",
      swatch: "#8a8a8a",
      photos: [
        "../assets/ag-max-cinza.jpeg",
        "../assets/ag-max-1-cinza.jpeg",
        "../assets/ag-max-2-cinza.jpeg"
      ]
    }
  ],
  waCtaLabel: "Quero informações agora",
  waText: "Olá! Quero informações e valores do modelo AG MAX."
}
```

### Exemplo provisório (X11)

```js
{
  id: "x11",
  name: "Scooter X11",
  cardImage: "../assets/x11.jpeg",
  specs: ["Velocidade até 60 km/h", "Autonomia 30-40km", "Banco para 2 pessoas"],
  colors: [
    { id: "preto", label: "Preto", swatch: "#111111", photos: ["../assets/x11.jpeg"] },
    { id: "branco", label: "Branco", swatch: "#f2f2f2", photos: [] },
    { id: "azul", label: "Azul", swatch: "#1e4fd6", photos: [] },
    { id: "vermelho", label: "Vermelho", swatch: "#e60000", photos: [] }
  ],
  waCtaLabel: "Quero informações agora",
  waText: "Olá! Quero informações e valores do modelo Scooter X11."
}
```

### Regras do contrato

- **Sem** `summary` / descrição longa no modal.
- Todas as cores oficiais do modelo em `colors` (mesmo com `photos: []`).
- `photos` = ângulos da **mesma** cor.
- Não referenciar paths antigos já substituídos por `*-{cor}`.
- WhatsApp: `https://wa.me/5521973208542?text=` + `encodeURIComponent(waText)` (número só o de `PLAN.md`).
- Paths **case-sensitive**.

## 7. UX — grade e modal

### Grade

- 8 modelos; tokens de `styles.css`.
- Clique abre modal; “Consultar Modelo” → WA (opcional).

### Modal

1. Overlay + painel (`role="dialog"`, `aria-modal="true"`).
2. Galeria = `photos` da cor ativa (ângulos); thumbs se `length > 1`.
3. Swatches de todas as cores oficiais.
4. Cor com fotos → troca galeria.
5. Cor sem fotos → fallback da última cor com fotos + **“Fotos desta cor em breve”**.
6. CTA agressivo → WA comercial.
7. Fechar: X, overlay, Escape; foco no modal ao abrir.

**Não** incluir parágrafo de marketing no modal.

## 8. Index (`index.html`)

Nesta entrega: **não** alterar o index raiz além do já entregue na sprint base.

## 9. Performance

- `loading="lazy"` na grade (exceto primeiras acima da dobra, se houver).
- CSS/JS do catálogo só em `/catalogos/`.

## 10. Encoding e deploy

- UTF-8 **sem BOM**.
- Não alterar `vercel.json` / `api/` / `package.json`.
- Versionar assets `*-{cor}` no Git; fluxo: `develop` → auditoria → PO preview → `main`.

## 11. Checklist Antigravity (assets por cor — 11/09/2026)

- [ ] Reescrever `catalogos/catalogo-data.js` conforme §5; UTF-8 sem BOM
- [ ] M16 / X13 / DOT / AG MAX com paths `*-{cor}` reais
- [ ] X13: `preto-brilhoso` + `preto-fosco` (sem `preto` único); carbono com 3 fotos
- [ ] X11 / X16 / Raptor / Triciclo provisórios
- [ ] Remover refs a `placeholder-moto.png` e paths antigos substituídos
- [ ] Modal: fallback + “Fotos desta cor em breve”
- [ ] Não incluir `WhatsApp Image…`
- [ ] Não alterar OAuth, footer, assistência, legais, index raiz
- [ ] Push `develop` com assets versionados para preview

## 12. Critérios de aceite

- [ ] Modelos com `*-{cor}` mostram ângulos **por cor** no modal
- [ ] X13 lista as 6 cores (brilhoso, fosco, branco, azul, vermelho, carbono)
- [ ] Carbono X13 funciona com 3 fotos (sem 404 de `-3`)
- [ ] Provisórios: 1ª cor com foto única; demais com “em breve”
- [ ] AG MAX usa `ag-max-*-cinza.jpeg`
- [ ] Case `M16-…` correto
- [ ] WhatsApp = comercial de `PLAN.md`
- [ ] Sem BOM; escopo respeitado
