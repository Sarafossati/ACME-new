import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'bottone-scuro',
  styleUrl: 'bottone-scuro.css',
  shadow: true,
})
export class BottoneScuro implements ComponentInterface {
   /**
   * Bottone scuro con lo sfondo #02336E
   */
  @Prop() btnTextScuro: string;
  render() {
    return (
      <button>{this.btnTextScuro}</button>
    );
  }

}
