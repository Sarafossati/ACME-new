import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const boxCerchiCss = ":host{display:block}.box-cerchi{display:flex;justify-content:space-around;align-items:center;width:70%;margin:0 auto;flex-wrap:wrap;margin:3em auto}.singolo-cerchio{display:flex;flex-direction:column;justify-content:center;align-items:center}.singolo-cerchio p{padding-top:1em;font-size:15px}.cerchio{background-color:#12A6E6;background-size:cover;width:200px;height:200px;border-radius:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}.cerchio img{width:70%}";

const BoxCerchi = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * contenitore cerchi con icone svg
         */
        this.icona1 = "icona1.png";
        this.icona2 = "icona2.png";
        this.icona3 = "icona3.png";
    }
    render() {
        return (h("div", { class: "box-cerchi" }, h("div", { class: "singolo-cerchio" }, h("div", { class: "cerchio" }, h("img", { src: getAssetPath(`/assets/${this.icona1}`) })), h("p", null, "MICROPRESTITI")), h("div", { class: "singolo-cerchio" }, h("div", { class: "cerchio" }, h("img", { src: getAssetPath(`/assets/${this.icona2}`) })), h("p", null, "PRESTITI AZIENDE")), h("div", { class: "singolo-cerchio" }, h("div", { class: "cerchio" }, h("img", { src: getAssetPath(`/assets/${this.icona3}`) })), h("p", null, "PRESTITI PRIVATI"))));
    }
};
BoxCerchi.style = boxCerchiCss;

export { BoxCerchi as box_cerchi };
