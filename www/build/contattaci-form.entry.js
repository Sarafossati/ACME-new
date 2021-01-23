import { r as registerInstance, h, g as getAssetPath } from './index-377eb767.js';

const contattaciFormCss = ".box-blu{height:100%;width:70%;background-color:#02336E;border-radius:20px;border:2px solid #ffffff;margin:0 auto;display:flex;flex-direction:row}.spazio{height:50px}.container{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:50px;margin-bottom:50px;width:100%}.container-testo{width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:3em}.container-img{display:block;width:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1em}img{width:100%;height:auto;margin-left:4em}@media (max-width: 1200px){.container-img{display:none}.container{display:flex;flex-direction:column;justify-content:center;align-items:center}.container-testo{width:100%}}@media (max-width: 500px){.container-img{display:none}.container{display:flex;flex-direction:column;justify-content:center;align-items:center}.container-testo{width:90%;margin:0 auto;padding:1em}.box-blu{width:90%;margin:auto;display:block}}";

const ContattaciForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.icona1 = "Contact.png";
    }
    render() {
        return (h("div", null, h("testo-contattaci", null), h("div", { class: "container" }, h("div", { class: "spazio" }), h("div", { class: "box-blu" }, h("div", { class: "container-img" }, h("img", { src: getAssetPath(`/assets/${this.icona1}`) })), h("div", { class: "container-testo" }, h("campo-contattaci", null))))));
    }
};
ContattaciForm.style = contattaciFormCss;

export { ContattaciForm as contattaci_form };
