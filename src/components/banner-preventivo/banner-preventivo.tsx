import { Component, ComponentInterface, h, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'banner-preventivo',
  styleUrl: 'banner-preventivo.css',
  shadow: true,
})
export class BannerPreventivo implements ComponentInterface {
  @Prop() applicazione ="app-login.png"

  render() {
    return (
      <div class="cta">
        <div class="container-img">
          <img class="img1" src={getAssetPath(`/assets/${this.applicazione}`)} />
        </div>
        <div class="container-testi">
          <h2>REALIZZA I TUOI SOGNI CON UN CLICK</h2>
          <bottone-scuro btnTextScuro="Scarica l'app"></bottone-scuro>
        </div>
      </div>
    );
  }

}
