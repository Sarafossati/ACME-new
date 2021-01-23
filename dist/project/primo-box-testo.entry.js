import { r as registerInstance, h } from './index-377eb767.js';

const primoBoxTestoCss = ":host{display:block}.box-testo{position:absolute;width:80%;padding:1rem 2rem;background-color:#faf9f9;bottom:0rem;right:0px;border-radius:15px}";

const PrimoBoxTesto = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * testo della prima carta
     */
    render() {
        return (h("div", { class: "box-testo" }, h("titoli-carte", { cardTitol: "PRESTITI FINANZIARI: ACME REALIZZA I TUOI DESIDERI" }), h("simple-text", { simpleText: "Pensa a quante cose puoi fare per loro. Affidati ad ACME." }), h("bottone-scuro", { btnTextScuro: "i nostri prodotti" }), h("bottone-chiaro", { btnTextChiaro: "Prestiti" })));
    }
};
PrimoBoxTesto.style = primoBoxTestoCss;

export { PrimoBoxTesto as primo_box_testo };
