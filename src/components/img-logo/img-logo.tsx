import { Component, ComponentInterface, h } from '@stencil/core';
  /*
  * ACME's logo in the menu
  */
 
@Component({
  tag: 'img-logo',
  styleUrl: 'img-logo.css',
  shadow: true,
})
export class ImgLogo implements ComponentInterface {
  

  render() {
    return (
      <div>
        <a href="#"><img class="logo" src="/assets/LOGO.jpg"></img></a>
      </div>
    );
  }

}
