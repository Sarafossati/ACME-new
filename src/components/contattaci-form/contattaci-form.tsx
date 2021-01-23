import { Component, ComponentInterface, h, getAssetPath, Prop } from '@stencil/core';
  /*
  * background for 'contattaci' form
  */
 
@Component({
  tag: 'contattaci-form',
  styleUrl: 'contattaci-form.css',
  shadow: true,
})
export class ContattaciForm implements ComponentInterface {
  @Prop() icona1 ="Contact.png"

  render() {
    return (
      <div>
        <testo-contattaci></testo-contattaci>
        <div class="container">
          <div class="spazio"></div>
          <div class="box-blu">
            <div class="container-img"><img src={getAssetPath(`/assets/${this.icona1}`)} /></div>
            <div class="container-testo">
              <campo-contattaci></campo-contattaci>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
