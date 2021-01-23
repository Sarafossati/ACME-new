import { r as registerInstance, h } from './index-377eb767.js';

const terzaCartaCss = ":host{display:block}div{position:relative;overflow:hidden;height:43em}";

const TerzaCarta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
    * box con img e testo della terza carta
    */
    render() {
        return (h("div", null, h("terza-immagine", null), h("terzo-box-testo", null)));
    }
};
TerzaCarta.style = terzaCartaCss;

export { TerzaCarta as terza_carta };
