import { r as registerInstance, h } from './index-377eb767.js';

const navigazionePrincipaleCss = "div{display:flex;justify-content:space-between;align-items:center;padding:0 60px;background-color:#fff}";

const NavigazionePrincipale = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("img-logo", null), h("menu-principale", null)));
    }
};
NavigazionePrincipale.style = navigazionePrincipaleCss;

export { NavigazionePrincipale as navigazione_principale };
