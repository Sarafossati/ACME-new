import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const terzaImmagineCss = ":host{display:block}img{width:80%;height:auto;border-radius:15px}";

const TerzaImmagine = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * immagine della terza carta
     */
    render() {
        return h("img", { src: getAssetPath("/assets/carta3.png") });
    }
};
TerzaImmagine.style = terzaImmagineCss;

export { TerzaImmagine as terza_immagine };
