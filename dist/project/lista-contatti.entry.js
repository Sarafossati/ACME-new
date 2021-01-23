import { r as registerInstance, h } from './index-377eb767.js';

const listaContattiCss = ".blu{width:100%;height:40px}";

const ListaContatti = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("testo-contatti", null));
    }
};
ListaContatti.style = listaContattiCss;

export { ListaContatti as lista_contatti };
