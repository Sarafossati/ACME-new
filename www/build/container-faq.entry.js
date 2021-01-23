import { r as registerInstance, h } from './index-377eb767.js';

const containerFaqCss = ":host{display:block}";

const ContainerFaq = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("bottone-faq", null)));
    }
};
ContainerFaq.style = containerFaqCss;

export { ContainerFaq as container_faq };
