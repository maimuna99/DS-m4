import { Component , h } from '@stencil/core';

@Component({
  tag: 'fire-paragraph',
  styleUrl: 'fire-paragraph.css',
  shadow: false,
})
export class FireParagraph {

  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }

}
