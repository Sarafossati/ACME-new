import { Component, ComponentInterface, h, State } from '@stencil/core';
  /*
  * 'contattaci' form 
  */
 
@Component({
  tag: 'campo-contattaci',
  styleUrl: 'campo-contattaci.css',
  shadow: true,
})


export class CampoContattaci implements ComponentInterface {
  @State() value: string;
  

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.value);
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  
  


  render() {
    return (
        <form>
          <p>* I campi contrassegnati sono obbligatori</p>  
          <br/>
          <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} id="nome" placeholder="Il tuo nome *" required></input>
          <input type="email" id="mail" placeholder="La tua e-mail *" required></input>
          <oggetto-messaggio></oggetto-messaggio>
          <br/>
          <input class="contattaci-messaggio" id="messaggio" placeholder="Il tuo messaggio *" required></input>
          <input class="bottone1" type="submit" value="Invia" id="bottone"><bottone-chiaro btnTextChiaro="Invia" ></bottone-chiaro></input>
        </form>

    );
  }

}


// PROVE PER DISABILITARE IL BOTTONE 

//(document.getElementById('bottone') as HTMLInputElement).disabled = false;
// document.getElementById("bottone").setAttribute('disabled', 'disabled');





// PROVE PER ALER DI AVVISO IN CASO DI 'MESSAGGIO INVIATO' O 'ERRORE'

/*
let conferma = document.getElementById("bottone");
let nome = document.getElementById("nome");
let mail = document.getElementById("mail");
let messaggio = document.getElementById("messaggio");


conferma.onclick = function() {
  if (nome && mail && messaggio === '' ){
    alert("Il tuo messaggio è stato inviato con successo!")
  }{
    alert("C'è stato un ERRORE. Riprova")
  }
}

*/







 