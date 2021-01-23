import { Component, ComponentInterface,  h } from '@stencil/core';

@Component({
  tag: 'quarta-carta',
  styleUrl: 'quarta-carta.css',
  shadow: true,
})
export class QuartaCarta implements ComponentInterface {
  /**
   * box con img e testo della quarta carta
   */
  render() {
    return (
      <div>
        <quarta-immagine></quarta-immagine>
        <primo-box-testo></primo-box-testo>
      </div>
    );
  }

}
