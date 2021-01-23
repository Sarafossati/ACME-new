import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'didascalia-footer',
  styleUrl: 'didascalia-footer.css',
  shadow: true,
})
export class DidascaliaFooter implements ComponentInterface {

  render() {
    return (
      
        <p> - Il sito è stato creato a scopo didattico dalle allieve di Web e digital media della Scuola Mohole di Milano. Carrà Aurora, Fossati Sara Valeria e Mazzola Linda - </p>
      
    );
  }

}
