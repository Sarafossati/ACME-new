import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'container-carte',
  styleUrl: 'container-carte.css',
  shadow: true,
})
export class ContainerCarte implements ComponentInterface {
  /**
   * contenitore componenti carte (anche verione responsive)
   */
  render() {
    return (
      <div class="contenitore">
        <prima-carta></prima-carta>
        <seconda-carta></seconda-carta>
        <terza-carta></terza-carta>
        <quarta-carta></quarta-carta>
      </div>
    );
  }

}
