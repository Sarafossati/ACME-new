import { Component, ComponentInterface, h } from '@stencil/core';
  /**
   * call to action's text
   */
  
@Component({
  tag: 'testo-calltoaction',
  styleUrl: 'testo-calltoaction.css',
  shadow: true,
})
export class TestoCalltoaction implements ComponentInterface {


  render() {
    return (
      <div class="background">
        <div class="testi">
          <h1>Online è più facile e veloce</h1>
          <p>Riattiva o rinnova la tua polizza direttamente dal sito o dall'app ACME.</p>
          <br/>
          <bottone-chiaro btnTextChiaro="Scopri di più"></bottone-chiaro>
        </div>
      </div>
    );
  }

}
