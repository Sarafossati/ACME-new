import { Component, ComponentInterface, getAssetPath, h,  } from '@stencil/core';

@Component({
  tag: 'prima-img',
  styleUrl: 'prima-img.css',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class PrimaImg implements ComponentInterface {
  /**
   * immagine della prima carta
   */
  render() {
    return <img src={getAssetPath("/assets/carta1.png")}/>;
  }

}
