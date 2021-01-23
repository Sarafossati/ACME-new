import { Component, ComponentInterface, h } from '@stencil/core';
  /*
  * background image for contact form
  */
 
@Component({
  tag: 'bck-contattaci',
  styleUrl: 'bck-contattaci.css',
  shadow: true,
})
export class BckContattaci implements ComponentInterface {
  render() {
    return (
      <div class="bck">
        <contattaci-form></contattaci-form>
      </div>
    );
  }

}
