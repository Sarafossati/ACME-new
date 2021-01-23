import { r as registerInstance, h } from './index-377eb767.js';

const containerCarteCss = ":host{display:block}.card1{grid-area:card1}.card2{grid-area:card2}.card3{grid-area:card3}.card4{grid-area:card4}.contenitore{width:80%;margin:3em auto;display:grid;grid-gap:1rem;grid-template-areas:\"card1\" \"card2\" \"card3\" \"card4\"}@media (max-width:800px){.contenitore{grid-template-columns:1fr;grid-template-areas:\"card1\"\n      \"card2\"\n      \"card3\"\n      \"card4\"}}@media (min-width:801px) and (max-width:1200px){.contenitore{grid-template-columns:1fr 1fr;grid-template-areas:\"card1 card2\"\n      \"card3 card4\"}}@media (min-width:1201px) and (max-width:1599px){.contenitore{grid-template-columns:1fr 1fr 1fr;grid-template-areas:\"card1 card2 card3\"}.card4{display:none}}@media (min-width:1600px){.contenitore{grid-template-columns:1fr 1fr 1fr 1fr;grid-template-areas:\"card1 card2 card3 card4\"}}";

const ContainerCarte = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * contenitore componenti carte (anche verione responsive)
     */
    render() {
        return (h("div", { class: "contenitore" }, h("prima-carta", null), h("seconda-carta", null), h("terza-carta", null), h("quarta-carta", null)));
    }
};
ContainerCarte.style = containerCarteCss;

export { ContainerCarte as container_carte };
