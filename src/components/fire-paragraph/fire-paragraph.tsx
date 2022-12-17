import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fire-paragraph',
  styleUrl: 'fire-paragraph.css',
  shadow: true,
})
export class FireParagraph {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
