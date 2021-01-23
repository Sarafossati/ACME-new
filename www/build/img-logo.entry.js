import { r as registerInstance, h } from './index-377eb767.js';

const imgLogoCss = ".logo{width:200px;height:auto;cursor:pointer}@media (max-width: 700px){.logo{margin:0 auto}}";

const ImgLogo = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("a", { href: "#" }, h("img", { class: "logo", src: "/assets/LOGO.jpg" }))));
    }
};
ImgLogo.style = imgLogoCss;

export { ImgLogo as img_logo };
