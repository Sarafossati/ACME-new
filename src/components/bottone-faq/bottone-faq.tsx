import { Component, ComponentInterface, h, getAssetPath } from '@stencil/core';
/*
  * contains faq's section
  */
 
@Component({
  tag: 'bottone-faq',
  styleUrl: 'bottone-faq.css',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class BottoneFaq implements ComponentInterface {

  render() {
    return (
        <div class="container">
          
          <div class="dropdown">
            <button class="dropbtn">Assistenza clienti <br/><img src={getAssetPath("/assets/freccia.svg")} alt=""/></button>
            <div class="dropdown-content">
              <p class="content">Se hai bisogno del nostro aiuto <a href="#">contattaci</a> e cercheremo di risolvere i tuoi dubbi nel minor tempo possibile. I nostri operatori sono felici di essere al tuo servizio.</p>
            </div>
          </div>
          <br/>
          <div class="dropdown">
            <button class="dropbtn">Investimento e risparmio <br/><img src={getAssetPath("/assets/freccia.svg")} alt=""/></button>
            <div class="dropdown-content">
              <p class="content">Se hai bisogno di un consulto: <a href="#">Piano di risparmio</a> e <a href="#">Prodotto investimento</a>. I nostri operatori ti ricontatteranno il prima possibile!</p>
            </div>
          </div>
          <br/>
          <div class="dropdown">
            <button class="dropbtn">Regolamenti e rendiconti <br/><img src={getAssetPath("/assets/freccia.svg")} alt=""/></button>
            <div class="dropdown-content">
              <p class="content">In questa sezione puoi visualizzare: <a href="#">Fondi interni</a>, <a href="#">Regolamenti</a>, <a href="#">Rendiconti</a> e <a href="#">Rendimenti</a>. Non esitare a contattarci per ulteriori dubbi. </p>
            </div>
          </div>
          <br/>
          <div class="dropdown">
            <button class="dropbtn">Partnership <br/><img src={getAssetPath("/assets/freccia.svg")} alt=""/></button>
            <div class="dropdown-content">
              <p class="content">I principali Partners di ACME sono: Scuola Mohole, CheBanca, Della Porta Broker, Agea, Mercedes-Benz Financial, RCI Banque.</p>
            </div>
          </div>
        </div>
        
    );
  }

}
