import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'container-faq',
  styleUrl: 'container-faq.css',
  shadow: true,
})
export class ContainerFaq implements ComponentInterface {

  render() {
    return (
      <div>
        <bottone-faq></bottone-faq>
      </div>
    );
  }

}
