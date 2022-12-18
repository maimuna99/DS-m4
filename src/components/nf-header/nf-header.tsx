import { Component, h, Prop, Element } from '@stencil/core';
import { css } from '@emotion/css';
import { DarkRedColor, BlackColor,FontH1 } from '../../design-tokens/js/variables.js';


const ariaAttributes = [
  'aria-role'
];

@Component({
  tag: 'nf-header',
  styleUrl: 'nf-header.css',
  shadow: false,
  scoped: true,
})
export class NfHeader {

  @Element()
  hostElement: HTMLElement;

  @Prop({ reflect: true })
  level: number = 1; // This annotation is a TypeScript union type, defaulting to 1
  
  
  @Prop({ reflect: true })
  textAlign: 'left' | 'right' | 'center' = 'left'; // This annotation is a TypeScript union type with a default value set to 'left'

  
  headerAriaAttributes = {};

  
  componentWillLoad() {
  
    if (this.level < 1 || this.level > 6) {
      throw new Error("HsHeader: the level property must be between 1 and 6");
    }

    
    for (let index = 0; index < ariaAttributes.length; index++) {
      const attributeName = ariaAttributes[index];

      if (this.hostElement.hasAttribute(attributeName)) {
        const attributeValue = this.hostElement.getAttribute(attributeName);
        this.headerAriaAttributes[attributeName] = attributeValue;
        this.hostElement.removeAttribute(attributeName);
      }
    }
  }

  render() {
    // We create a JSX tag on the fly
    const Tag = `h${this.level}`;

    const tagStyles = css`
      color: ${this.level === 1 ? DarkRedColor : BlackColor};
      font-size: ${this.level === 1 ? `${FontH1.fontSize}px` : undefined};
      text-align: ${this.textAlign};
    `;
 
    return (
      <Tag className={tagStyles} role="heading">
        <slot></slot>
      </Tag>
    );

  
  }
}
