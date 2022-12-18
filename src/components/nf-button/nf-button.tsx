import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'nf-button',
  styleUrl: 'nf-button.css',
  shadow: false, // Disable Shadow DOM to benefit from global styles defined in Design Tokens
})
export class NfButton {

  @Prop({ reflect: true })
  variant = "solid";

  @Prop({ reflect: true })
  size = "small";

  @Event({})
  clicked;

  clickHandler(e) {
    this.clicked.emit(e);
  }

  render() {
    return (
      <button class={`${this.variant} ${this.size}`} onClick={(e) => this.clickHandler(e)}>
        <slot></slot>
      </button>
    );
  }

}
