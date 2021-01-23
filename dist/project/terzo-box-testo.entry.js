import { r as registerInstance, h } from './index-377eb767.js';

const terzoBoxTestoCss = ":host{display:block}.box-testo{position:absolute;width:80%;padding:1rem 2rem;background-color:#faf9f9;bottom:0rem;right:0px;border-radius:15px}";

const TerzoBoxTesto = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * testo della terza carta
     */
    render() {
        return (h("div", { class: "box-testo" }, h("titoli-carte", { cardTitol: "OTTIENI UN FINANZIAMENTO VANTAGGEVOLE" }), h("simple-text", { simpleText: "Consulta la pagina dedicata per realizzare i tuoi progetti." }), h("bottone-scuro", { btnTextScuro: "Vai alla pagina" }), h("bottone-chiaro", { btnTextChiaro: "Finanziamento" })));
    }
};
TerzoBoxTesto.style = terzoBoxTestoCss;

export { TerzoBoxTesto as terzo_box_testo };
