import { r as registerInstance, h } from './index-377eb767.js';

const primaCartaCss = ":host{display:block}div{position:relative;overflow:hidden;height:43em}";

const PrimaCarta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * box con img e testo della prima carta
     */
    render() {
        return (h("div", null, h("prima-img", null), h("primo-box-testo", null)));
    }
};
PrimaCarta.style = primaCartaCss;

export { PrimaCarta as prima_carta };
