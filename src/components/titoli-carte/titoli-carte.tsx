import { Component, ComponentInterface, Prop, h } from '@stencil/core';

@Component({
  tag: 'titoli-carte',
  styleUrl: 'titoli-carte.css',
  shadow: true,
})
export class TitoliCarte implements ComponentInterface {
  /**
   * Prop per rendere variabile i titoli all'interno delle carte
   */
  @Prop () cardTitol : string;
  render() {
    return (
    <h3>{this.cardTitol}</h3>
    );
  }


}
