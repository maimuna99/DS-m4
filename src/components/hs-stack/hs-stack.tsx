import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { SpacingLarge, SpacingSmall } from '../../design-tokens/js/variables.js';


@Component({
  tag: 'hs-stack',
  styleUrl: 'hs-stack.css',
  shadow: false,
  scoped: true,
})
export class HsStack {
  /**
   * The `orientation` property sets the direction for the flow,
   * either vertical or horizontal.
   */
  @Prop({ reflect: true })
  orientation: Orientation  = 'vertical';

  /**
   * The `gap` property sets the spacing in between elements, and has no effect
   * in the leading or trailing element.
   */
  @Prop({ reflect: true })
  gap: 'large' | 'small' | 'none' = 'small';

  stackStyle = css`
    gap: ${this.gap === 'large' ? SpacingLarge.bottom : this.gap === 'small' ? SpacingSmall.bottom : 0}px;
    flex-direction: ${this.orientation === 'horizontal' ? 'row' : 'column'};
  `;

  render() {
    return (
      <div class={this.stackStyle}>
        <slot></slot>
      </div>
    );
  }

}
