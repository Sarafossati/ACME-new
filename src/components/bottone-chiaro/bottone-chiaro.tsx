import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'bottone-chiaro',
  styleUrl: 'bottone-chiaro.css',
  shadow: true,
})
export class BottoneChiaro implements ComponentInterface {
  /**
   * Bottone chiaro con lo sfondo #12A6E6
   */
  @Prop() btnTextChiaro: string;
  render() {
    return (
      <button>{this.btnTextChiaro}</button>
    );
  }

}
