import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const quartaImmagineCss = ":host{display:block}img{width:80%;height:auto;border-radius:15px}";

const QuartaImmagine = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
    * immagine della quarta carta
    */
    render() {
        return h("img", { src: getAssetPath("/assets/carta4.png") });
    }
};
QuartaImmagine.style = quartaImmagineCss;

export { QuartaImmagine as quarta_immagine };
