import { r as registerInstance, h } from './index-377eb767.js';

const testoContattaciCss = ".testo{color:black;font-weight:bold;font-size:34px;text-align:center}.testo-normale{color:clack;font-size:16px;text-align:center}";

const TestoContattaci = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("h3", { class: "testo" }, "CONTATTACI"), h("p", { class: "testo-normale" }, "Compila i campi e verrai al pi\u00F9 presto contattato da un nostro operatore!")));
    }
};
TestoContattaci.style = testoContattaciCss;

export { TestoContattaci as testo_contattaci };
