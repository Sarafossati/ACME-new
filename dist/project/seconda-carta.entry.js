import { r as registerInstance, h } from './index-377eb767.js';

const secondaCartaCss = ":host{display:block}div{position:relative;overflow:hidden;height:43em}";

const SecondaCarta = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("seconda-immagine", null), h("secondo-box-testo", null)));
    }
};
SecondaCarta.style = secondaCartaCss;

export { SecondaCarta as seconda_carta };
