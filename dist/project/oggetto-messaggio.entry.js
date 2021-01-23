import { r as registerInstance, h } from './index-377eb767.js';

const oggettoMessaggioCss = "div{color:white;margin-top:50px;text-align:center;font-size:16px}select{margin-top:30px}";

const OggettoMessaggio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("label", null, "Oggetto del tuo messaggio: "), h("br", null), h("select", { required: true }, h("option", { value: "iniziale" }, "..."), h("option", { value: "Preventivi privati" }, "Preventivi privati"), h("option", { value: "Preventivi aziendali" }, "Preventivi aziendali"), h("option", { value: "Annullamento/modifica" }, "Annullamento / modifica appuntamento"), h("option", { value: "servizi" }, "Servizi assicurativi"), h("option", { value: "servizi" }, "Servizi assicurativi"), h("option", { value: "app" }, "Problemi con l'applicazione"), h("option", { value: "Altro" }, "Altro"))));
    }
};
OggettoMessaggio.style = oggettoMessaggioCss;

export { OggettoMessaggio as oggetto_messaggio };
