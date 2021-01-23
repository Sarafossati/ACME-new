import { r as registerInstance, h } from './index-377eb767.js';

const quartaCartaCss = ":host{display:block}div{position:relative;overflow:hidden;height:43em}@media (min-width:1201px) and (max-width:1599px){div{display:none}}";

const QuartaCarta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * box con img e testo della quarta carta
     */
    render() {
        return (h("div", null, h("quarta-immagine", null), h("primo-box-testo", null)));
    }
};
QuartaCarta.style = quartaCartaCss;

export { QuartaCarta as quarta_carta };
