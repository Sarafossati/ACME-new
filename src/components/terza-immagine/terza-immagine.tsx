import { Component, ComponentInterface, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'terza-immagine',
  styleUrl: 'terza-immagine.css',
  shadow: true,
})
export class TerzaImmagine implements ComponentInterface {
  /**
   * immagine della terza carta
   */
  render() {
    return <img src={getAssetPath("/assets/carta3.png")}/>;
  }

}
