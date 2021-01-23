import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'secondo-box-testo',
  styleUrl: 'secondo-box-testo.css',
  shadow: true,
})
export class SecondoBoxTesto implements ComponentInterface {
  /**
   * testo della seconda carta
   */
  render() {
    return (
      <div class="box-testo">
        <titoli-carte cardTitol="CALCOLA IL TUO PREVENTIVO IN MODO SEMPLICE E VELOCE"></titoli-carte>
        <simple-text simpleText="Puoi calcolare il tuo preventivo online risparmiando. Cosa aspetti?"></simple-text>
        <bottone-scuro btnTextScuro="Per saperne di più"></bottone-scuro>
        <bottone-chiaro btnTextChiaro="Preventivo"></bottone-chiaro>
      </div>
    );
  }

}