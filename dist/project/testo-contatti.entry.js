import { r as registerInstance, h } from './index-377eb767.js';

const testoContattiCss = ".colore-sfondo{background-color:#12A6E6}.div-contatti{display:flex;flex-direction:row;justify-content:center;align-items:center;font-size:12px;color:white}.spazio{padding:0 30px;display:block}.mail{text-decoration:none;color:white;cursor:pointer}.mail:hover{text-decoration:underline}.loghi{height:20px;width:20px;cursor:pointer;padding:7px}@media (max-width: 500px){.div-contatti{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-wrap:wrap;font-size:10px;color:white;padding:10px;margin:0 auto}.loghi{height:15px;width:15px;cursor:pointer;padding:5px}}@media (max-width: 700px){.spazio{display:none}}";

const TestoContatti = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "colore-sfondo div-contatti" }, h("a", { href: "mailto:contatti@acme.org", class: "spazio mail" }, "contatti@acme.org"), h("p", { class: "spazio" }, "091302217"), h("p", { class: "spazio" }, "Milano, Trieste, Roma, Cagliari"), h("div", { class: "spazio" }, h("a", { href: "http://https://www.facebook.com/" }, h("img", { class: "loghi", src: "/assets/fb.svg" })), h("a", { href: "https://www.linkedin.com/" }, h("img", { class: "loghi", src: "/assets/linkedin.svg" })), h("a", { href: "http://https://www.youtube.com/" }, h("img", { class: "loghi", src: "/assets/yt.svg" })))));
    }
};
TestoContatti.style = testoContattiCss;

export { TestoContatti as testo_contatti };
