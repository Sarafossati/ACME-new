import { Component, ComponentInterface, h } from '@stencil/core';
  /**
   * for 'contattaci' form 
   */
  
@Component({
  tag: 'oggetto-messaggio',
  styleUrl: 'oggetto-messaggio.css',
  shadow: true,
})
export class OggettoMessaggio implements ComponentInterface {


  render() {
    return (
      <div>
        <label>Oggetto del tuo messaggio: </label>
        <br/>
        <select required>
        <option value="iniziale">...</option>
          <option value="Preventivi privati">Preventivi privati</option>
          <option value="Preventivi aziendali">Preventivi aziendali</option>
          <option value="Annullamento/modifica">Annullamento / modifica appuntamento</option>
          <option value="servizi">Servizi assicurativi</option>
          <option value="servizi">Servizi assicurativi</option>
          <option value="app">Problemi con l'applicazione</option>
          <option value="Altro">Altro</option>
        </select>
      </div>
    );
  }

}
