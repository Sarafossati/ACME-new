# container-body



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [contatti-navigazione](../contatti-navigazione)
- [header-principale](../header-principale)
- [banner-preventivo](../banner-preventivo)
- [bck-contattaci](../bck-contattaci)
- [container-faq](../container-faq)
- [footer-footer](../footer-footer)
- [didascalia-footer](../didascalia-footer)

### Graph
```mermaid
graph TD;
  container-body --> contatti-navigazione
  container-body --> header-principale
  container-body --> banner-preventivo
  container-body --> bck-contattaci
  container-body --> container-faq
  container-body --> footer-footer
  container-body --> didascalia-footer
  contatti-navigazione --> lista-contatti
  contatti-navigazione --> navigazione-principale
  contatti-navigazione --> container-mobile
  lista-contatti --> testo-contatti
  navigazione-principale --> img-logo
  navigazione-principale --> menu-principale
  container-mobile --> menu-mobile
  header-principale --> testo-calltoaction
  bck-contattaci --> contattaci-form
  contattaci-form --> testo-contattaci
  contattaci-form --> campo-contattaci
  campo-contattaci --> oggetto-messaggio
  container-faq --> bottone-faq
  style container-body fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
