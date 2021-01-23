import { Component, ComponentInterface, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'quarta-immagine',
  styleUrl: 'quarta-immagine.css',
  shadow: true,
})
export class QuartaImmagine implements ComponentInterface {
   /**
   * immagine della quarta carta
   */
  render() {
    return <img src={getAssetPath("/assets/carta4.png")}/>;
  }

}
