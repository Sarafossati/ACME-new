import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'terzo-box-testo',
  styleUrl: 'terzo-box-testo.css',
  shadow: true,
})
export class TerzoBoxTesto implements ComponentInterface {
  /**
   * testo della terza carta
   */
  render() {
    return (
      <div class="box-testo">
        <titoli-carte cardTitol="OTTIENI UN FINANZIAMENTO VANTAGGEVOLE"></titoli-carte>
        <simple-text simpleText="Consulta la pagina dedicata per realizzare i tuoi progetti."></simple-text>
        <bottone-scuro btnTextScuro="Vai alla pagina"></bottone-scuro>
        <bottone-chiaro btnTextChiaro="Finanziamento"></bottone-chiaro>
      </div>
    );
  }

}