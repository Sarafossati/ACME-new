import { r as registerInstance, h } from './index-377eb767.js';

const campoContattaciCss = "::placeholder{color:#12A6E6;opacity:0.6;font-size:16px}form{display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:1em}p{color:#9c9898;font-size:10px}.contattaci-messaggio{margin-bottom:1em}input{border:1px solid #ddd;border-radius:5px;margin-bottom:1em;border-bottom:2px solid #12a6e6;background-color:#02336e;color:#12a6e6;padding:20px;width:100%;height:30px;text-align:center}input::placeholder{color:#fff}input:focus{border-bottom:1px solid #2929d1}input:required:invalid{border-bottom:1px solid red;color:red}.bottone1{font-family:'Montserrat';font-size:15px;font-weight:400;background-color:#12A6E6;border-radius:5px;padding:1em;width:200px;height:auto;border:none;color:#fff;text-transform:uppercase;cursor:pointer}.bottone1:hover{background-color:rgb(47, 47, 47);transition:0.8s}@media (max-width: 500px){input{width:50%}form{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0 auto}}";

const CampoContattaci = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.value);
    }
    handleChange(event) {
        this.value = event.target.value;
    }
    render() {
        return (h("form", null, h("p", null, "* I campi contrassegnati sono obbligatori"), h("br", null), h("input", { type: "text", value: this.value, onInput: (event) => this.handleChange(event), id: "nome", placeholder: "Il tuo nome *", required: true }), h("input", { type: "email", id: "mail", placeholder: "La tua e-mail *", required: true }), h("oggetto-messaggio", null), h("br", null), h("input", { class: "contattaci-messaggio", id: "messaggio", placeholder: "Il tuo messaggio *", required: true }), h("input", { class: "bottone1", type: "submit", value: "Invia", id: "bottone" }, h("bottone-chiaro", { btnTextChiaro: "Invia" }))));
    }
};
CampoContattaci.style = campoContattaciCss;

export { CampoContattaci as campo_contattaci };
