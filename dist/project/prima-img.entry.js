import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const primaImgCss = ":host{display:block}img{width:80%;height:auto;border-radius:15px}";

const PrimaImg = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * immagine della prima carta
     */
    render() {
        return h("img", { src: getAssetPath("/assets/carta1.png") });
    }
    static get assetsDirs() { return ["/assets"]; }
};
PrimaImg.style = primaImgCss;

export { PrimaImg as prima_img };
