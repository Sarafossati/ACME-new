import { r as registerInstance, h } from './index-377eb767.js';

const didascaliaFooterCss = ":host{display:block;background-color:white;color:rgb(195, 191, 191);text-align:center;font-size:12px;padding:10px}";

const DidascaliaFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("p", null, " - Il sito \u00E8 stato creato a scopo didattico dalle allieve di Web e digital media della Scuola Mohole di Milano. Carr\u00E0 Aurora, Fossati Sara Valeria e Mazzola Linda - "));
    }
};
DidascaliaFooter.style = didascaliaFooterCss;

export { DidascaliaFooter as didascalia_footer };
