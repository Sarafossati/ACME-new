import { Component, ComponentInterface, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'seconda-immagine',
  styleUrl: 'seconda-immagine.css',
  shadow: true,
})
export class SecondaImmagine implements ComponentInterface {
   /**
   * immagine della seconda carta
   */
  render() {
    return <img src={getAssetPath("/assets/carta2.png")}/>;
  }

}
