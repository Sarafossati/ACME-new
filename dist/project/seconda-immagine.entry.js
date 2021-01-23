import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const secondaImmagineCss = ":host{display:block}img{width:80%;height:auto;border-radius:15px}";

const SecondaImmagine = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
    * immagine della seconda carta
    */
    render() {
        return h("img", { src: getAssetPath("/assets/carta2.png") });
    }
};
SecondaImmagine.style = secondaImmagineCss;

export { SecondaImmagine as seconda_immagine };
