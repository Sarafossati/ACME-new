import { Component, ComponentInterface, h } from '@stencil/core';
  /**
   * main menu. fixed on scroll
   */
  
@Component({
  tag: 'menu-principale',
  styleUrl: 'menu-principale.css',
  shadow: true,
})
export class MenuPrincipale implements ComponentInterface {


  render() {
    return (
      <div class="menu">
        <a href="index.html" class="voce-menu">ACME</a>
        <div class="dropdown">
          <button class="dropbtn">Prodotti ACME</button>
          <div class="dropdown-content">
            <a href="#">Servizi finanziari e assicurativi</a>
            <a href="#">Preventivi aziendali</a>
            <a href="#">Preventivi privati</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Richiedi preventivo</button>
          <div class="dropdown-content">
            <a href="#">Parla con un assistente</a>
            <a href="#">Prenota un appuntamento</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Contatti</button>
          <div class="dropdown-content">
            <a href="#">Hai bisogno di noi?</a>
            <a href="#">Contattaci con un solo click</a>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">News</button>
          <div class="dropdown-content">
            <a href="#">Nuovo piano</a>
            <a href="#">Preventivi più vantaggevoli</a>
          </div>
        </div>
        
      </div>
    );
  }

}
