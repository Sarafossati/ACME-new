import { Component, ComponentInterface, h } from '@stencil/core';
  /*
  * white bar fixed on scroll with mail, telephone number, locations and social networks
  */

@Component({
  tag: 'lista-contatti',
  styleUrl: 'lista-contatti.css',
  shadow: true,
})
export class ListaContatti implements ComponentInterface {
  

  render() {
    return (
      <testo-contatti></testo-contatti>
    );
  }

}
