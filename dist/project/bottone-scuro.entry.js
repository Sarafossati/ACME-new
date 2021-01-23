import { r as registerInstance, h } from './index-377eb767.js';

const bottoneScuroCss = ":host{display:block}button{font-family:'Montserrat';font-size:15px;font-weight:400;background-color:#02336E;border-radius:5px;padding:1em;width:200px;height:auto;border:none;color:#fff;text-transform:uppercase;margin-bottom:1em;cursor:pointer}button:hover{background-color:rgb(47, 47, 47);transition:0.8s}";

const BottoneScuro = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("button", null, this.btnTextScuro));
    }
};
BottoneScuro.style = bottoneScuroCss;

export { BottoneScuro as bottone_scuro };
