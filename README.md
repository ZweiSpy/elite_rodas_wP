# Elite Rodas — WebSimples

SPA institucional da **Elite Rodas** (motos e scooters elétricas), em um único arquivo [`index.html`](index.html), com CSS embutido e assets locais.

## Link do criador

No rodapé (`.footer__disclaimer`), o nome **Vinícius Tavares de Miranda** aponta para o domínio oficial:

`https://zweicoorp.com.br`

## Redes sociais oficiais

Os ícones de redes sociais estão configurados no corpo do rodapé (`div.footer__social`, dentro de `.footer__utility`).

| Rede | URL Oficial | Onde aparece |
|------|-------------|--------------|
| Instagram | https://www.instagram.com/eliterodas021 | Faixa utilitária do rodapé (`.footer__utility`) |
| Facebook | https://www.facebook.com/p/Elite-rodas-61563207035024/ | Faixa utilitária do rodapé (`.footer__utility`) |
| YouTube | https://www.youtube.com/@EliteRodas | Faixa utilitária do rodapé (`.footer__utility`) |
| TikTok | https://www.tiktok.com/@elite.rodas2 | Faixa utilitária do rodapé (`.footer__utility`) |

## Documentos legais

O site possui duas páginas legais **separadas** (nunca unificadas):

| Documento | Arquivo |
|-----------|---------|
| Política de Privacidade (LGPD) | [`politica-de-privacidade.html`](politica-de-privacidade.html) |
| Termos de Uso | [`termos-de-uso.html`](termos-de-uso.html) |

Os links aparecem no rodapé de [`index.html`](index.html), no bloco `nav.footer__legal` (dentro de `.footer__bottom`).

**Alterações jurídicas** (textos, dados da empresa, tipos de dados coletados) exigem aprovação do PO. Consulte [`AGENTS.md`](AGENTS.md) e [`PLAN.md`](PLAN.md) para o fluxo SSD e dados confirmados.

## Estrutura rápida

- `index.html` — página principal (institucional, menu e chamada para o catálogo)
- `catalogos/index.html` — página pública do catálogo dedicado (`/catalogos/`)
- `catalogos/catalogo-data.js` — fonte de dados dos 8 modelos oficiais e opções de cores
- `catalogos/catalogo.css` — estilos da grade de produtos e modal interativo
- `styles.css` — folha de estilos externa compartilhada (landing page e páginas legais)
- `politica-de-privacidade.html` — política LGPD
- `termos-de-uso.html` — termos de uso
- `AGENTS.md` — papéis e regras para agentes
- `PLAN.md` — escopo e dados confirmados do PO
- `SDD.md` — especificação técnica de design do catálogo
- `assets/` — imagens dos modelos, loja, favicon e Open Graph
- `.gitignore` — ignora `Backup_index1.html`
