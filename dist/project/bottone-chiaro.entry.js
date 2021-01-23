import { r as registerInstance, h } from './index-377eb767.js';

const bottoneChiaroCss = ":host{display:block}button{font-family:'Montserrat';font-size:15px;font-weight:400;background-color:#12A6E6;border-radius:5px;padding:1em;width:200px;height:auto;border:none;color:#fff;text-transform:uppercase;cursor:pointer}button:hover{background-color:rgb(47, 47, 47);transition:0.8s}";

const BottoneChiaro = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("button", null, this.btnTextChiaro));
    }
};
BottoneChiaro.style = bottoneChiaroCss;

export { BottoneChiaro as bottone_chiaro };
