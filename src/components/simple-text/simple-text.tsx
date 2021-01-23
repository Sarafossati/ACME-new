import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'simple-text',
  styleUrl: 'simple-text.css',
  shadow: true,
})
export class SimpleText implements ComponentInterface {
   /**
   * Prop per rendere il testo variabile all'interno del sito
   */
  @Prop() simpleText: string;
  render() {
    return (
    <p>{this.simpleText}</p>
    );
  }

}
