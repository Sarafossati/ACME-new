import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'primo-box-testo',
  styleUrl: 'primo-box-testo.css',
  shadow: true,
})
export class PrimoBoxTesto implements ComponentInterface {
  /**
   * testo della prima carta
   */
  render() {
    return (
      <div class="box-testo">
        <titoli-carte cardTitol="PRESTITI FINANZIARI: ACME REALIZZA I TUOI DESIDERI"></titoli-carte>
        <simple-text simpleText="Pensa a quante cose puoi fare per loro. Affidati ad ACME."></simple-text>
        <bottone-scuro btnTextScuro="i nostri prodotti"></bottone-scuro>
        <bottone-chiaro btnTextChiaro="Prestiti"></bottone-chiaro>
      </div>
    );
  }

}
