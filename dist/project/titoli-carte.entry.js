import { r as registerInstance, h } from './index-377eb767.js';

const titoliCarteCss = ":host{display:block}h3{color:#02336E;font-size:25px;font-family:'Poppins'}";

const TitoliCarte = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("h3", null, this.cardTitol));
    }
};
TitoliCarte.style = titoliCarteCss;

export { TitoliCarte as titoli_carte };
