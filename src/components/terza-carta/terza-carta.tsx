import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'terza-carta',
  styleUrl: 'terza-carta.css',
  shadow: true,
})
export class TerzaCarta implements ComponentInterface {
   /**
   * box con img e testo della terza carta
   */
  render() {
    return (
      <div>
        <terza-immagine></terza-immagine>
        <terzo-box-testo></terzo-box-testo>
      </div>
    );
  }

}
