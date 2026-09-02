# Elite Rodas — WebSimples

SPA institucional da **Elite Rodas** (motos e scooters elétricas), em um único arquivo [`index.html`](index.html), com CSS embutido e assets locais.

## Link do criador

No rodapé (`.footer__disclaimer`), o nome **Vinícius Tavares de Miranda** aponta para o domínio oficial:

`https://zweicoorp.com.br`

## Redes sociais — como atualizar os links

Os ícones de **Facebook**, **YouTube** e **TikTok** ficam no final da página, dentro do rodapé.

| O quê | Onde |
|--------|------|
| Arquivo | `index.html` |
| Bloco | `div.footer__social` (dentro de `.footer__bottom`, no `<footer>`) |
| Comentário no HTML | `<!-- Redes sociais: substitua os href abaixo pelos links oficiais (ver README.md) -->` |

### Atributos `href` a trocar

Substitua os placeholders pelos URLs oficiais da loja (sempre com `https://`):

```html
<!-- Dentro de div.footer__social -->
<a href="#facebook" ...>   <!-- → ex.: https://www.facebook.com/seu-perfil -->
<a href="#youtube" ...>    <!-- → ex.: https://www.youtube.com/@seu-canal -->
<a href="#tiktok" ...>     <!-- → ex.: https://www.tiktok.com/@seu-perfil -->
```

O Instagram já está configurado na coluna **Contato** do mesmo footer (`@eliterodas021`) e não faz parte deste bloco de ícones.

## Documentos legais

O site possui duas páginas legais **separadas** (nunca unificadas):

| Documento | Arquivo |
|-----------|---------|
| Política de Privacidade (LGPD) | [`politica-de-privacidade.html`](politica-de-privacidade.html) |
| Termos de Uso | [`termos-de-uso.html`](termos-de-uso.html) |

Os links aparecem no rodapé de [`index.html`](index.html), no bloco `nav.footer__legal` (dentro de `.footer__bottom`).

**Alterações jurídicas** (textos, dados da empresa, tipos de dados coletados) exigem aprovação do PO. Consulte [`AGENTS.md`](AGENTS.md) e [`PLAN.md`](PLAN.md) para o fluxo SSD e dados confirmados.

## Estrutura rápida

- `index.html` — página principal
- `politica-de-privacidade.html` — política LGPD
- `termos-de-uso.html` — termos de uso
- `AGENTS.md` — papéis e regras para agentes
- `PLAN.md` — escopo e dados confirmados do PO
- `assets/` — imagens dos modelos, loja, favicon e Open Graph
- `.gitignore` — ignora `Backup_index1.html`
