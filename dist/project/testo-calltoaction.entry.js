import { r as registerInstance, h } from './index-377eb767.js';

const testoCalltoactionCss = ".background{background:url(\"/assets/teamwork1.jpg\") no-repeat center center;background-size:cover;width:100%;height:800px}h1{text-transform:uppercase;font-weight:bolder;font-size:44px;background-color:#02336E;color:white;padding:10px}.testi{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-top:130px;margin-left:50px}button{padding:15px;background-color:#12A6E6;border-radius:10px;border:1px solid #02336E}button a{text-decoration:none;color:white;font-size:18px;text-align:center}p{font-size:22px;margin-top:5px}@media (max-width: 500px){h1{text-transform:uppercase;font-weight:bolder;font-size:24px;background-color:#02336E;color:white;padding:10px}p{font-size:16px;margin-top:5px}.background{margin-top:5em}}@media (max-width: 700){.background{margin-top:20em}h1{margin-top:2em}}";

const TestoCalltoaction = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "background" }, h("div", { class: "testi" }, h("h1", null, "Online \u00E8 pi\u00F9 facile e veloce"), h("p", null, "Riattiva o rinnova la tua polizza direttamente dal sito o dall'app ACME."), h("br", null), h("bottone-chiaro", { btnTextChiaro: "Scopri di pi\u00F9" }))));
    }
};
TestoCalltoaction.style = testoCalltoactionCss;

export { TestoCalltoaction as testo_calltoaction };
