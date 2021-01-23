import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const mobileMenuCss = ":host{display:block}.contenitore{width:100%;display:flex;flex-direction:row;background-color:#fff;font-size:3rem;justify-content:center;align-items:center;cursor:pointer;margin:0 auto;position:fixed;z-index:999;bottom:0}p{font-size:16px;color:#000000}img{width:15%;padding-top:0.5rem}.contenitore-mobile{width:25%;display:flex;flex-direction:column;justify-content:center;align-items:center}@media (max-width: 500px){img{width:25%}}";

const MobileMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "contenitore" }, h("div", { class: "contenitore-mobile" }, h("img", { src: getAssetPath("/assets/prodotti.svg"), alt: "" }), h("p", null, "Prodotti")), h("div", { class: "contenitore-mobile" }, h("img", { src: getAssetPath("/assets/preventivi.svg"), alt: "" }), h("p", null, "Preventivi")), h("div", { class: "contenitore-mobile" }, h("img", { src: getAssetPath("/assets/news.svg"), alt: "" }), h("p", null, "News")), h("div", { class: "contenitore-mobile" }, h("img", { src: getAssetPath("/assets/contatti.svg"), alt: "" }), h("p", null, "Contatti"))));
    }
    static get assetsDirs() { return ["/assets"]; }
};
MobileMenu.style = mobileMenuCss;

export { MobileMenu as mobile_menu };
