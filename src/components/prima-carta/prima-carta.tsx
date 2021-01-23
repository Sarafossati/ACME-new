import { Component, ComponentInterface, h, } from '@stencil/core';

@Component({
  tag: 'prima-carta',
  styleUrl: 'prima-carta.css',
  shadow: true,
})
export class PrimaCarta implements ComponentInterface {
  /**
   * box con img e testo della prima carta
   */
  render() {
    return (
      <div>
        <prima-img></prima-img>
        <primo-box-testo></primo-box-testo>
      </div>
    );
  }

}
