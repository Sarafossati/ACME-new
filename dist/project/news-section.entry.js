import { r as registerInstance, h } from './index-377eb767.js';

const newsSectionCss = ":host{display:block}.container{display:flex;justify-content:center;align-items:center;text-align:center;flex-wrap:wrap}.box-esterno{display:flex;flex-direction:column;justify-content:center;align-items:center;width:70%;margin:0 auto}.titoletto{font-weight:bold;font-size:18px}p{font-size:14px}.numero-news{color:rgba(0, 0, 0, 0.6);font-size:12px;text-align:right}.singolo{border:1px solid #12a6e6;width:100%;margin-bottom:10px;padding:7px}h3{font-size:24px}@media (max-width: 500px){.box-container{width:90%;margin:0 auto}.singolo{padding:1em}}";

const NewsSection = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.news = [];
        this.limit = 2;
        /*
        * controllo della caricamento degli atricolo della fetch
        */
        this.fetchData = () => {
            if (this.limit >= 10) {
                return;
            }
            /* Con il bottone "carica altri" vengono caricati 2 articoli alla volta */
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${this.limit}`)
                .then(response => response.json())
                .then((json) => (this.news = json));
            this.limit = this.limit + 2;
        };
    }
    /**
     * The component is loaded and has rendered.
     *
     * Updating data in this event may cause the component to re-render.
     *
     * Will only be called once
     */
    componentDidLoad() {
        this.fetchData();
    }
    render() {
        return (h("div", { class: "box-esterno" }, h("h3", null, "NEWS"), this.news.map(news => h("div", { class: "container" }, h("div", { class: "singolo" }, h("div", null, h("h3", { class: "titoletto" }, news.title), h("p", null, news.body)), h("div", { class: "numero-news" }, news.id)))), h("bottone-scuro", { btnTextScuro: "Carica altri", onClick: this.fetchData })));
    }
};
NewsSection.style = newsSectionCss;

export { NewsSection as news_section };
