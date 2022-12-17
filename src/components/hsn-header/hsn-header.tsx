import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'hsn-header',
  styleUrl: 'hsn-header.css',
  shadow: true,
})
export class HsnHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
