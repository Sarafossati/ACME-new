import { r as registerInstance, h } from './index-377eb767.js';

const bckContattaciCss = ".bck{background-size:cover;width:100%;height:800px;margin:auto}";

const BckContattaci = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "bck" }, h("contattaci-form", null)));
    }
};
BckContattaci.style = bckContattaciCss;

export { BckContattaci as bck_contattaci };
