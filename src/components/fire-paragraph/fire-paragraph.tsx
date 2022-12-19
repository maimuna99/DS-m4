import { Component , h } from '@stencil/core';

@Component({
  tag: 'fire-paragraph',
  styleUrl: 'fire-paragraph.css',
  shadow: false,
  
})
export class FireParagraph {
  text:'I am a configuration piece of text';
  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }

}
