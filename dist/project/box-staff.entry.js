import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const boxStaffCss = ":host{display:block}.box-cerchi{display:flex;justify-content:space-around;align-items:center;width:70%;margin:0 auto;flex-wrap:wrap;margin:3em auto}.singolo-cerchio{display:flex;flex-direction:column;justify-content:center;align-items:center}.singolo-cerchio p{padding-top:1em;font-size:15px}.cerchio{background-size:cover;width:200px;height:200px;border-radius:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}.img{width:95%;display:block;margin:0;cursor:pointer}.img1{width:105%;display:block;margin:0;cursor:pointer}";

const BoxStaff = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * contenitore cerchi con immagini dello sfaff dell'azienda
         */
        this.staff1 = "staff1.png";
        this.staff2 = "staff2.png";
        this.staff3 = "staff3.png";
    }
    render() {
        return (h("div", { class: "box-cerchi" }, h("div", { class: "singolo-cerchio" }, h("div", { class: "cerchio" }, h("a", { href: "chisiamo.html" }, h("img", { class: "img1", src: getAssetPath(`/assets/${this.staff3}`) }))), h("p", null, "RESPONSABILE MICROPRESTITI"), h("bottone-scuro", { btnTextScuro: "CONTATTAMI" })), h("div", { class: "singolo-cerchio" }, h("div", { class: "cerchio" }, h("a", { href: "chisiamo.html" }, h("img", { class: "img", src: getAssetPath(`/assets/${this.staff1}`) }))), h("p", null, "RESPONSABILE PRESTITI AZIENDE"), h("bottone-scuro", { btnTextScuro: "CONTATTAMI" })), h("div", { class: "singolo-cerchio" }, h("div", { class: "cerchio" }, h("a", { href: "chisiamo.html" }, h("img", { class: "img1", src: getAssetPath(`/assets/${this.staff2}`) }))), h("p", null, "RESPONSABILE PRESTITI PRIVATI"), h("bottone-scuro", { btnTextScuro: "CONTATTAMI" }))));
    }
};
BoxStaff.style = boxStaffCss;

export { BoxStaff as box_staff };
