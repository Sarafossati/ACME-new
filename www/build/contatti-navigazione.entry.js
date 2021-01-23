import { r as registerInstance, h } from './index-377eb767.js';

const contattiNavigazioneCss = "div{position:fixed;z-index:999;top:0;left:0;right:0;width:100%;background-color:#fff}mobile-menu{display:none}@media (max-width: 700px){mobile-menu{display:block}}";

const ContattiNavigazione = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("lista-contatti", null), h("navigazione-principale", null), h("mobile-menu", null)));
    }
};
ContattiNavigazione.style = contattiNavigazioneCss;

export { ContattiNavigazione as contatti_navigazione };
