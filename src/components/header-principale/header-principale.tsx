import { Component, ComponentInterface,  h } from '@stencil/core';
  /*
  * main banner in homepage with call to action
  */
 
@Component({
  tag: 'header-principale',
  styleUrl: 'header-principale.css',
  shadow: true,
})
export class HeaderPrincipale implements ComponentInterface {
  

  render() {
    return (
      <div>
        <testo-calltoaction></testo-calltoaction>
      </div>
    );
  }

}
