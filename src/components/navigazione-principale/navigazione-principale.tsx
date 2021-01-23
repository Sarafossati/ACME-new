import { Component, ComponentInterface, h } from '@stencil/core';
  /**
   * menu white bar. with logo and menu
   */
  
@Component({
  tag: 'navigazione-principale',
  styleUrl: 'navigazione-principale.css',
  shadow: true,
})
export class NavigazionePrincipale implements ComponentInterface {


  render() {
    return (
      <div>
        <img-logo></img-logo>
        <menu-principale></menu-principale>
      </div>
    );
  }

}
