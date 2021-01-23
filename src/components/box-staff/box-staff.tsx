import { Component, ComponentInterface, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'box-staff',
  styleUrl: 'box-staff.css',
  shadow: true,
})
export class BoxStaff implements ComponentInterface {
  /**
   * contenitore cerchi con immagini dello sfaff dell'azienda
   */
  @Prop() staff1 ="staff1.png"
  @Prop() staff2 ="staff2.png"
  @Prop() staff3 ="staff3.png"


  render() {
    return (
      <div class="box-cerchi">
        <div class="singolo-cerchio"> 
            <div class="cerchio">
            <a href="chisiamo.html"><img class="img1" src={getAssetPath(`/assets/${this.staff3}`)} /></a>
            </div>
            <p>RESPONSABILE MICROPRESTITI</p>
            <bottone-scuro btnTextScuro="CONTATTAMI"></bottone-scuro>
         </div>
         <div class="singolo-cerchio"> 
            <div class="cerchio">
            <a href="chisiamo.html"><img class="img" src={getAssetPath(`/assets/${this.staff1}`)} /></a>
            </div>
            <p>RESPONSABILE PRESTITI AZIENDE</p>
            <bottone-scuro btnTextScuro="CONTATTAMI"></bottone-scuro>
         </div> 
         <div class="singolo-cerchio"> 
            <div class="cerchio">
            <a href="chisiamo.html"><img class="img1" src={getAssetPath(`/assets/${this.staff2}`)} /></a>
            </div>
            <p>RESPONSABILE PRESTITI PRIVATI</p>
            <bottone-scuro btnTextScuro="CONTATTAMI"></bottone-scuro>
         </div>         
      </div>
    );
  }

}
