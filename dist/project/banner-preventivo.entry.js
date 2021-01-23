import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const bannerPreventivoCss = ".cta{background-image:linear-gradient(-60deg,#00A3E3,#00457C);background-size:cover;height:400px;text-align:right;padding-right:5em;display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:20em}.cta h2{padding-bottom:20px;font-size:2rem;color:white}img{width:50%}.container-img{width:50%;display:flex;justify-content:center;align-self:flex-end;margin-left:5em;display:block}.container-testi{width:50%}@media (max-width: 800px){.container-img{display:none}h2{font-size:16px}.cta{margin-top:5em;justify-content:center;padding:2em;text-align:center}.container-testi{width:100%}}";

const BannerPreventivo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applicazione = "app-login.png";
    }
    render() {
        return (h("div", { class: "cta" }, h("div", { class: "container-img" }, h("img", { class: "img1", src: getAssetPath(`/assets/${this.applicazione}`) })), h("div", { class: "container-testi" }, h("h2", null, "REALIZZA I TUOI SOGNI CON UN CLICK"), h("bottone-scuro", { btnTextScuro: "Scarica l'app" }))));
    }
};
BannerPreventivo.style = bannerPreventivoCss;

export { BannerPreventivo as banner_preventivo };
