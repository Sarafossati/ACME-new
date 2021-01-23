# container-carte



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [prima-carta](../prima-carta)
- [terza-carta](../terza-carta)
- [quarta-carta](../quarta-carta)

### Graph
```mermaid
graph TD;
  container-carte --> prima-carta
  container-carte --> terza-carta
  container-carte --> quarta-carta
  prima-carta --> prima-img
  prima-carta --> primo-box-testo
  primo-box-testo --> titoli-carte
  primo-box-testo --> simple-text
  primo-box-testo --> bottone-scuro
  primo-box-testo --> bottone-chiaro
  terza-carta --> terza-immagine
  terza-carta --> primo-box-testo
  quarta-carta --> quarta-immagine
  quarta-carta --> primo-box-testo
  style container-carte fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
