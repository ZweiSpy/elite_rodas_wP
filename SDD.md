# SDD.md — Spec-Driven Design: Catálogo Elite Rodas

Documento técnico para o **Antigravity**. Dados de negócio e canais: sempre [`PLAN.md`](PLAN.md). Regras de agentes: [`AGENTS.md`](AGENTS.md).

**Sprint base:** Catálogo dedicado (`/catalogos/`) — documentação 09/09/2026.  
**Sprint atual:** Cores e ângulos — documentação 10/09/2026.

---

## 1. Objetivo

Página pública de catálogo com carregamento rápido, grade de cards e modal por modelo (galeria por **ângulos da cor ativa** + seletor de cores oficiais + CTA WhatsApp agressivo). O `index.html` aponta para esta página (sem grade embutida).

## 2. Fora de escopo

Não alterar: footer, assistência técnica, OAuth (`api/`, `auth/`, `vercel.json`), páginas legais, WhatsApp flutuante (exceto se o plano pedir), copy comercial fora do catálogo.

**Fora desta sprint de cores:** renomear arquivos em `assets/` (PO faz); usar arquivos `WhatsApp Image…`; mudar layout geral do site.

## 3. Arquitetura de pastas

```text
catalogos/
  index.html           # página /catalogos/
  catalogo-data.js     # fonte de verdade dos 8 modelos + cores
  catalogo.css         # estilos da página + modal (preferencial)
assets/
  *.jpeg               # fotos atuais (case-sensitive na Vercel)
styles.css             # tokens globais (reutilizar via link)
index.html             # só menu + CTA → /catalogos/ (mínimo)
```

**URL pública (Vercel estático):** `catalogos/index.html` → `https://<domínio>/catalogos/`

**Ignorar em `assets/`:** qualquer arquivo cujo nome comece com `WhatsApp Image` — **não** entram no catálogo.

## 4. Convenção de nomes de arquivos

| Conceito | Regra |
|----------|--------|
| `x13.jpeg`, `x13-1.jpeg`, `x13-2.jpeg`… | **Mesma cor**, ângulos diferentes (frente, lado, etc.) |
| Numeração `-1`, `-2`… | Só diferencia ângulo; **ordem de exibição** = ordem no array `photos` |
| Padrão futuro | `{modelo}[-{n}]-{cor}.jpeg` — **cor sempre por último** |
| Exemplos futuros | `x13-preto.jpeg`, `x13-1-preto.jpeg`, `m16-verde-claro.jpeg`, `m16-1-cinza.jpeg` |

**Case Vercel (Linux):** paths exatos — `M16.jpeg` (maiúsculo), não `m16.jpeg`.

Até o PO renomear para `*-{cor}`, usar os arquivos atuais na **primeira cor** da lista do modelo (tabela abaixo). Demais cores: `photos: []`.

## 5. Modelos (8) + cores oficiais

| id | name | Cores (ordem no seletor) | Arquivos atuais → 1ª cor (provisório) |
|----|------|--------------------------|----------------------------------------|
| `m16` | Scooter M16 | Cinza, Verde claro | `M16.jpeg`, `M16-1.jpeg`, `M16-2.jpeg` → **Cinza** |
| `x13` | Scooter X13 | Preto, Branco, Azul, Vermelho, Carbono | `x13.jpeg` … `x13-3.jpeg` → **Preto** |
| `x11` | Scooter X11 | Preto, Branco, Azul, Vermelho | `x11.jpeg` → **Preto** |
| `dot` | Scooter DOT | Preto, Branco, Cinza | `dot.jpeg`, `dot-1.jpeg`, `dot-2.jpeg` → **Preto** |
| `x16` | Scooter X16 | Preto, Branco, Azul, Vermelho | `x16.jpeg` → **Preto** |
| `ag-max` | AG MAX | Cinza | `ag-max.jpeg`, `ag-max-1.jpeg`, `ag-max-2.jpeg` → **Cinza** |
| `raptor` | Scooter Raptor | Vermelho, Preto, Cinza | `raptor.jpeg` → **Vermelho** |
| `triciclo-big` | Triciclo BIG | Bege, Preto | `triciclo.jpeg` → **Bege** |

**Não incluir:** X17, X18, X13 Pro, X13 Pro Max.

**cardImage:** primeira foto disponível da cor principal atual (1ª cor com `photos.length > 0`).

Specs curtas no card: reaproveitar linhas atuais. Onde estava “Consulte” (X16, Raptor, AG MAX), manter **Consulte**.

### Swatches hex (UI)

| Cor | id sugerido | swatch |
|-----|-------------|--------|
| Preto | `preto` | `#111111` |
| Branco | `branco` | `#f2f2f2` |
| Azul | `azul` | `#1e4fd6` |
| Vermelho | `vermelho` | `#e60000` |
| Cinza | `cinza` | `#8a8a8a` |
| Verde claro | `verde-claro` | `#7dce7a` |
| Carbono | `carbono` | `#2a2a2a` |
| Bege | `bege` | `#d4c4a8` |

## 6. Contrato de dados — `catalogo-data.js`

Exportar array `CATALOGO_MODELOS` (ou `window.CATALOGO_MODELOS`).

```js
{
  id: "x13",
  name: "Scooter X13",
  cardImage: "../assets/x13.jpeg",
  specs: ["Velocidade até 60-70 km/h", "Freio a Disco", "Painel Digital"], // opcional no card
  colors: [
    {
      id: "preto",
      label: "Preto",
      swatch: "#111111",
      photos: [
        "../assets/x13.jpeg",
        "../assets/x13-1.jpeg",
        "../assets/x13-2.jpeg",
        "../assets/x13-3.jpeg"
      ]
    },
    { id: "branco", label: "Branco", swatch: "#f2f2f2", photos: [] },
    { id: "azul", label: "Azul", swatch: "#1e4fd6", photos: [] },
    { id: "vermelho", label: "Vermelho", swatch: "#e60000", photos: [] },
    { id: "carbono", label: "Carbono", swatch: "#2a2a2a", photos: [] }
  ],
  waCtaLabel: "Quero informações agora",
  waText: "Olá! Quero informações e valores do modelo Scooter X13."
}
```

Quando o PO renomear/adicionar: `photos: ["../assets/x13-preto.jpeg", "../assets/x13-1-preto.jpeg", …]`.

### Exemplo AG MAX (sem placeholder)

```js
{
  id: "ag-max",
  name: "AG MAX",
  cardImage: "../assets/ag-max.jpeg",
  specs: ["Consulte"],
  colors: [
    {
      id: "cinza",
      label: "Cinza",
      swatch: "#8a8a8a",
      photos: [
        "../assets/ag-max.jpeg",
        "../assets/ag-max-1.jpeg",
        "../assets/ag-max-2.jpeg"
      ]
    }
  ],
  waCtaLabel: "Quero informações agora",
  waText: "Olá! Quero informações e valores do modelo AG MAX."
}
```

### Regras do contrato

- **Sem** campo `summary` / descrição longa no modal.
- Todas as cores oficiais do modelo aparecem em `colors` (mesmo com `photos: []`).
- `photos` = ângulos da **mesma** cor (não uma foto por cor).
- `waCtaLabel`: tom **agressivo / urgente** (ex.: “Quero informações agora”).
- Link WhatsApp: `https://wa.me/5521973208542?text=` + `encodeURIComponent(waText)`.
- Número comercial **somente** o confirmado em `PLAN.md`.
- Paths **case-sensitive** (`../assets/M16.jpeg` para M16).

## 7. UX — grade e modal

### Grade

- Continua **8** modelos.
- Cards no espírito visual do site (tokens de `styles.css`).
- Clique no card (ou “Ver detalhes”) abre o modal do `id`.
- Botão secundário “Consultar Modelo” → WhatsApp (mesmo `waText`), opcional.

### Modal

1. Overlay + painel (`role="dialog"`, `aria-modal="true"`, título = `name`).
2. **Galeria:** todas as fotos (`photos`) da cor **ativa** (ângulos). Imagem principal + thumbnails ou setas se `photos.length > 1`.
3. **Swatches:** todas as cores oficiais; clique seleciona a cor.
4. **Cor com fotos:** troca a galeria para o conjunto daquela cor.
5. **Cor sem fotos (`photos.length === 0`):** swatch selecionável; galeria mantém as fotos da **última cor com fotos disponível** (fallback) **e** exibe nota discreta: **“Fotos desta cor em breve”**.
6. CTA principal agressivo (`waCtaLabel`) → WhatsApp comercial.
7. Fechar: X, clique no overlay, Escape; focus trap básico (foco no modal ao abrir; devolver ao card ao fechar).

**Não** incluir parágrafo de marketing/descrição do modelo no modal.

```text
Card → Modal → Swatches (cores PO)
              → Galeria (ângulos da cor ativa)
              → Cor sem arquivo → fallback + “em breve”
```

## 8. Index (`index.html`) — alterações mínimas

| Elemento | Ação |
|----------|------|
| `nav` link Catálogo | `href="/catalogos/"` (ou `catalogos/`) |
| Seção `#catalogo` | Sem grade; CTA “Ver catálogo completo” → `/catalogos/` |
| CTA Sobre “Conhecer os modelos” | → `/catalogos/` |

Nesta sprint de cores: **não** alterar o index além do já entregue na sprint base.

## 9. Performance

- `loading="lazy"` nas imagens da grade (exceto as primeiras acima da dobra, se houver).
- CSS/JS do catálogo só em `/catalogos/`.
- Galeria do modal: carregar thumbs sob demanda quando possível.

## 10. Encoding e deploy

- Todos os arquivos (`.html`, `.css`, `.js`, `.json`): **UTF-8 sem BOM**.
- Não alterar `vercel.json` / `api/` / `package.json` nesta sprint.
- Fluxo: implementar em `develop` → Cursor audita → PO testa preview → merge `main`.

## 11. Checklist Antigravity (sprint cores / ângulos)

- [ ] Reescrever `catalogos/catalogo-data.js` com cores oficiais, swatches e `photos` (tabela §5); UTF-8 **sem BOM**
- [ ] Path M16: `../assets/M16.jpeg` (+ `M16-1`, `M16-2`) — case correto
- [ ] AG MAX: `cardImage` + galeria Cinza com `ag-max*.jpeg` (remover `placeholder-moto.png`)
- [ ] Modal: `photos.length === 0` → fallback da última cor com fotos + texto “Fotos desta cor em breve”
- [ ] Não incluir `WhatsApp Image…`
- [ ] Não alterar OAuth, footer, assistência, legais
- [ ] Push `develop` para o PO validar o preview

## 12. Critérios de aceite (sprint cores)

- [ ] Cada modelo lista **todas** as cores oficiais no seletor
- [ ] Galeria da cor com arquivos mostra **ângulos** (várias fotos da mesma cor)
- [ ] Cor sem fotos: selecionável + fallback visual + “Fotos desta cor em breve”
- [ ] AG MAX usa `ag-max*.jpeg` (sem placeholder)
- [ ] Paths case-sensitive corretos (esp. M16)
- [ ] WhatsApp = comercial de `PLAN.md`
- [ ] Arquivos sem BOM; escopo respeitado
