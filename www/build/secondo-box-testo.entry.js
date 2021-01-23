import { r as registerInstance, h } from './index-377eb767.js';

const secondoBoxTestoCss = ":host{display:block}.box-testo{position:absolute;width:80%;padding:1rem 2rem;background-color:#faf9f9;bottom:0rem;right:0px;border-radius:15px}";

const SecondoBoxTesto = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * testo della seconda carta
     */
    render() {
        return (h("div", { class: "box-testo" }, h("titoli-carte", { cardTitol: "CALCOLA IL TUO PREVENTIVO IN MODO SEMPLICE E VELOCE" }), h("simple-text", { simpleText: "Puoi calcolare il tuo preventivo online risparmiando. Cosa aspetti?" }), h("bottone-scuro", { btnTextScuro: "Per saperne di pi\u00F9" }), h("bottone-chiaro", { btnTextChiaro: "Preventivo" })));
    }
};
SecondoBoxTesto.style = secondoBoxTestoCss;

export { SecondoBoxTesto as secondo_box_testo };
