import { r as registerInstance, h } from './index-377eb767.js';

const simpleTextCss = ":host{display:block}p{color:rgb(85, 85, 85);font-size:15px}";

const SimpleText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("p", null, this.simpleText));
    }
};
SimpleText.style = simpleTextCss;

export { SimpleText as simple_text };
