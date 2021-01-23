import { r as registerInstance, h } from './index-377eb767.js';

const footerFooterCss = ":host{display:block;background-color:#02336E;color:rgb(195, 191, 191);text-align:center;padding:30px;font-family:'Poppins'}a:-webkit-any-link{color:rgb(195, 191, 191);cursor:pointer;text-decoration:none}@media (max-width: 500px){p{font-size:12px}}";

const FooterFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("p", null, "Copyright \u00A9 ACME SERVIZI FINANZIARI E ASSICURATIVI S.R.L.", h("br", null), "Tutti i diritti sono riservati.P.IVA\\C.F. 01234567890 - Iscr. REA PA - 123456 - OAM M441 - IVASS RUI E000563270 - Cap. Sociale 50.000,00 Euro i.v.", h("br", null), "Sede Legale: Milano - Via Ventura, 5 - 20134 - Tel. 02 3651 3670 -", h("br", null), "Fax 0236513670", h("br", null), "Sede Amministrativa: Milano - Via Ventura, 5 - 20134 - Tel. 02 3651 3670 -", h("br", null), h("br", null), h("a", { href: "#" }, "About us"), " | ", h("a", { href: "#" }, "Lavora con noi"), " | ", h("a", { href: "#" }, "Privacy Policy"), " | ", h("a", { href: "#" }, "Cookie")));
    }
};
FooterFooter.style = footerFooterCss;

export { FooterFooter as footer_footer };
