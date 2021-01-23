import { Component, ComponentInterface, h } from '@stencil/core';
  /**
   * 'contattaci's text
   */
  
@Component({
  tag: 'testo-contattaci',
  styleUrl: 'testo-contattaci.css',
  shadow: true,
})
export class TestoContattaci implements ComponentInterface {


  render() {
    return (
      <div>
        <h3 class="testo">CONTATTACI</h3>
        <p class="testo-normale">Compila i campi e verrai al più presto contattato da un nostro operatore!</p>
      </div>
    );
  }

}
