import { Component, ComponentInterface, h, getAssetPath } from '@stencil/core';
/*
* main menu for mobile
*/

@Component({
  tag: 'mobile-menu',
  styleUrl: 'mobile-menu.css',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class MobileMenu implements ComponentInterface {


  render() {
    return (
      <div class="contenitore">
        <div class="contenitore-mobile">
          <img src={getAssetPath("/assets/prodotti.svg")} alt=""/>
          <p>Prodotti</p>
        </div>
        <div class="contenitore-mobile">
          <img src={getAssetPath("/assets/preventivi.svg")} alt=""/>
          <p>Preventivi</p>
        </div>
        <div class="contenitore-mobile">
          <img src={getAssetPath("/assets/news.svg")} alt=""/>
          <p>News</p>
        </div>
        <div class="contenitore-mobile">
          <img src={getAssetPath("/assets/contatti.svg")} alt=""/>
          <p>Contatti</p>
        </div>
      </div>
    );
  }

}