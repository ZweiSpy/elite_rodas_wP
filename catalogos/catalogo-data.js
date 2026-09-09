/**
 * catalogo-data.js — Fonte de verdade dos modelos do catálogo Elite Rodas.
 * Conforme especificações em SDD.md e PLAN.md.
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
        id: "ref",
        label: "Referência",
        swatch: "#666666",
        photos: ["../assets/x11.jpeg"]
      }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter X11."
  },
  {
    id: "x13",
    name: "Scooter X13",
    cardImage: "../assets/x13.jpeg",
    specs: ["Velocidade até 60-70 km/h", "Freio a Disco", "Painel Digital"],
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
  },
  {
    id: "x16",
    name: "Scooter X16",
    cardImage: "../assets/x16.jpeg",
    specs: ["Design Moderno", "Alta Performance", "Consulte"],
    colors: [
      {
        id: "ref",
        label: "Referência",
        swatch: "#666666",
        photos: ["../assets/x16.jpeg"]
      }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter X16."
  },
  {
    id: "dot",
    name: "Scooter DOT",
    cardImage: "../assets/dot.jpeg",
    specs: ["Motor 1000W", "Partida na Pulseira NFC", "Carregador USB"],
    colors: [
      {
        id: "ref",
        label: "Referência",
        swatch: "#666666",
        photos: ["../assets/dot.jpeg"]
      }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter DOT."
  },
  {
    id: "m16",
    name: "Scooter M16",
    cardImage: "../assets/m16.jpeg",
    specs: ["Motor 600W", "Banco para 2 pessoas", "Farol em LED"],
    colors: [
      {
        id: "ref",
        label: "Referência",
        swatch: "#666666",
        photos: ["../assets/m16.jpeg"]
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
        id: "ref",
        label: "Referência",
        swatch: "#666666",
        photos: ["../assets/triciclo.jpeg"]
      }
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
        id: "ref",
        label: "Referência",
        swatch: "#666666",
        photos: ["../assets/raptor.jpeg"]
      }
    ],
    waCtaLabel: "Quero informações agora",
    waText: "Olá! Quero informações e valores do modelo Scooter Raptor."
  },
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
];

if (typeof window !== "undefined") {
  window.CATALOGO_MODELOS = CATALOGO_MODELOS;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = CATALOGO_MODELOS;
}
