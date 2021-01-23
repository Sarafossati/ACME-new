import { r as registerInstance, h } from './index-377eb767.js';

const menuPrincipaleCss = ".menu{display:flex;justify-content:flex-end;align-items:center;padding-right:40px}.voce-menu{position:relative;display:inline-block;text-decoration:none;color:black;padding:20px}button{color:black;background-color:#fff;font-family:'Montserrat', sans-serif;font-size:16px;text-decoration:none}.dropdown-content{display:none;position:absolute;min-width:160px;z-index:1}.dropbtn{padding:16px;font-size:14px;border:none}.dropdown{position:relative;display:inline-block}.dropdown-content a{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content a:hover{background-color:#02336E;color:white}.dropdown:hover .dropdown-content{display:block;background-color:white}@media (max-width: 700px){.menu{display:none}}";

const MenuPrincipale = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "menu" }, h("a", { href: "index.html", class: "voce-menu" }, "ACME"), h("div", { class: "dropdown" }, h("button", { class: "dropbtn" }, "Prodotti ACME"), h("div", { class: "dropdown-content" }, h("a", { href: "#" }, "Servizi finanziari e assicurativi"), h("a", { href: "#" }, "Preventivi aziendali"), h("a", { href: "#" }, "Preventivi privati"))), h("div", { class: "dropdown" }, h("button", { class: "dropbtn" }, "Richiedi preventivo"), h("div", { class: "dropdown-content" }, h("a", { href: "#" }, "Parla con un assistente"), h("a", { href: "#" }, "Prenota un appuntamento"))), h("div", { class: "dropdown" }, h("button", { class: "dropbtn" }, "Contatti"), h("div", { class: "dropdown-content" }, h("a", { href: "#" }, "Hai bisogno di noi?"), h("a", { href: "#" }, "Contattaci con un solo click"))), h("div", { class: "dropdown" }, h("button", { class: "dropbtn" }, "News"), h("div", { class: "dropdown-content" }, h("a", { href: "#" }, "Nuovo piano"), h("a", { href: "#" }, "Preventivi pi\u00F9 vantaggevoli")))));
    }
};
MenuPrincipale.style = menuPrincipaleCss;

export { MenuPrincipale as menu_principale };
