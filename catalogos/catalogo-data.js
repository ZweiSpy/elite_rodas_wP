/**
 * catalogo-data.js — Fonte de verdade dos modelos do catálogo Elite Rodas.
 * Conforme especificações em SDD.md (§§4-7) e PLAN.md (Sprint Assets por Cor - 11/09/2026).
 * Sem BOM (UTF-8 puro).
 */

const CATALOGO_MODELOS = [
  {
    id: "x11",
    name: "Scooter X11",
    cardImage: "../assets/x11.jpeg",
    specs: ["Velocidade até 60 km/h", "Autonomia 30-40km", "Banco para 2 pessoas"],
    colors: [
      {
        id: "preto",
        label: "Preto",
        swatch: "#111111",
        photos: ["../assets/x11.jpeg"]
      },
      { id: "branco", label: "Branco", swatch: "#f2f2f2", photos: [] },
      { id: "azul", label: "Azul", swatch: "#1e4fd6", photos: [] },
      { id: "vermelho", label: "Vermelho", swatch: "#e60000", photos: [] }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter X11."
  },
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
  },
  {
    id: "x16",
    name: "Scooter X16",
    cardImage: "../assets/x16.jpeg",
    specs: ["Design Moderno", "Alta Performance", "Consulte"],
    colors: [
      {
        id: "preto",
        label: "Preto",
        swatch: "#111111",
        photos: ["../assets/x16.jpeg"]
      },
      { id: "branco", label: "Branco", swatch: "#f2f2f2", photos: [] },
      { id: "azul", label: "Azul", swatch: "#1e4fd6", photos: [] },
      { id: "vermelho", label: "Vermelho", swatch: "#e60000", photos: [] }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter X16."
  },
  {
    id: "dot",
    name: "Scooter DOT",
    cardImage: "../assets/dot-preto.jpeg",
    specs: ["Motor 1000W", "Partida na Pulseira NFC", "Carregador USB"],
    colors: [
      {
        id: "preto",
        label: "Preto",
        swatch: "#111111",
        photos: [
          "../assets/dot-preto.jpeg",
          "../assets/dot-1-preto.jpeg",
          "../assets/dot-2-preto.jpeg"
        ]
      },
      {
        id: "branco",
        label: "Branco",
        swatch: "#f2f2f2",
        photos: [
          "../assets/dot-branco.jpeg",
          "../assets/dot-1-branco.jpeg",
          "../assets/dot-2-branco.jpeg"
        ]
      },
      {
        id: "cinza",
        label: "Cinza",
        swatch: "#8a8a8a",
        photos: [
          "../assets/dot-cinza.jpeg",
          "../assets/dot-1-cinza.jpeg",
          "../assets/dot-2-cinza.jpeg"
        ]
      }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter DOT."
  },
  {
    id: "m16",
    name: "Scooter M16",
    cardImage: "../assets/M16-cinza.jpeg",
    specs: ["Motor 600W", "Banco para 2 pessoas", "Farol em LED"],
    colors: [
      {
        id: "cinza",
        label: "Cinza",
        swatch: "#8a8a8a",
        photos: [
          "../assets/M16-cinza.jpeg",
          "../assets/M16-1-cinza.jpeg",
          "../assets/M16-2-cinza.jpeg"
        ]
      },
      {
        id: "verde-claro",
        label: "Verde claro",
        swatch: "#7dce7a",
        photos: [
          "../assets/M16-verde-claro.jpeg",
          "../assets/M16-1-verde-claro.jpeg",
          "../assets/M16-2-verde-claro.jpeg"
        ]
      }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter M16."
  },
  {
    id: "triciclo-big",
    name: "Triciclo BIG",
    cardImage: "../assets/triciclo.jpeg",
    specs: ["Motor 1000W", "Banco para 3 lugares", "Marcha Ré e Alarme"],
    colors: [
      {
        id: "bege",
        label: "Bege",
        swatch: "#d4c4a8",
        photos: ["../assets/triciclo.jpeg"]
      },
      { id: "preto", label: "Preto", swatch: "#111111", photos: [] }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Triciclo BIG."
  },
  {
    id: "raptor",
    name: "Scooter Raptor",
    cardImage: "../assets/raptor.jpeg",
    specs: ["Design Esportivo", "Máxima Potência", "Consulte"],
    colors: [
      {
        id: "vermelho",
        label: "Vermelho",
        swatch: "#e60000",
        photos: ["../assets/raptor.jpeg"]
      },
      { id: "preto", label: "Preto", swatch: "#111111", photos: [] },
      { id: "cinza", label: "Cinza", swatch: "#8a8a8a", photos: [] }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter Raptor."
  },
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
];

if (typeof window !== "undefined") {
  window.CATALOGO_MODELOS = CATALOGO_MODELOS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CATALOGO_MODELOS;
}
