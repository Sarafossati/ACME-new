import { Component, ComponentInterface, h } from '@stencil/core';
  /*
  * container-body contains every component created. It's like an HTML's body
  */

@Component({
  tag: 'container-body',
  styleUrl: 'container-body.css',
  shadow: true,
})
export class ContainerBody implements ComponentInterface {
  

  render() {
    return (
      <div>
        <contatti-navigazione></contatti-navigazione>
        <header-principale></header-principale>
        <box-cerchi></box-cerchi>
        <container-carte></container-carte>
        <banner-preventivo></banner-preventivo>
        <news-section></news-section>
        <box-staff></box-staff>
        <bck-contattaci></bck-contattaci>
        <container-faq></container-faq>
        <footer-footer></footer-footer>
        <didascalia-footer></didascalia-footer>
      </div>
      
    );
  }

}
