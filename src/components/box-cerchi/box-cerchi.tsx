import { Component, ComponentInterface, h,Prop,getAssetPath } from '@stencil/core';
@Component({
  tag: 'box-cerchi',
  styleUrl: 'box-cerchi.css',
  shadow: true,
})
export class BoxCerchi implements ComponentInterface {
  /**
   * contenitore cerchi con icone svg
   */
  @Prop() icona1 ="icona1.png"
  @Prop() icona2 ="icona2.png"
  @Prop() icona3 ="icona3.png"
  render() {
    return (
      <div class="box-cerchi">
        <div class="singolo-cerchio"> 
            <div class="cerchio">
            <img src={getAssetPath(`/assets/${this.icona1}`)} />
            </div>
            <p>MICROPRESTITI</p>
         </div>
         <div class="singolo-cerchio"> 
            <div class="cerchio">
            <img src={getAssetPath(`/assets/${this.icona2}`)} />
            </div>
            <p>PRESTITI AZIENDE</p>
         </div> 
         <div class="singolo-cerchio"> 
            <div class="cerchio">
            <img src={getAssetPath(`/assets/${this.icona3}`)} />
            </div>
            <p>PRESTITI PRIVATI</p>
         </div>         
      </div>
    );
  }

}
