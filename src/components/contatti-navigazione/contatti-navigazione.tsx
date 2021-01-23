import { Component, ComponentInterface, h } from '@stencil/core';
  /*
  * menu fixed on scroll. lista contatti ( white one ) and navigazione principale ( blue one )
  */

@Component({
  tag: 'contatti-navigazione',
  styleUrl: 'contatti-navigazione.css',
  shadow: true,
})
export class ContattiNavigazione implements ComponentInterface {
  

  render() {
    return (
      <div>
        <lista-contatti></lista-contatti>
        <navigazione-principale></navigazione-principale>
        <mobile-menu></mobile-menu>
      </div>
    );
  }

}
