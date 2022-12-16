import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../assets/icons/eye.svg';

/** @internal **/
@Component({
  tag: 'hs-icon-eye',
  shadow: false,
})
export class HsIconEye {
  @Prop({ reflect: true }) size = '1rem';

  render() {
    return (
      <img style={{ height: this.size, width: this.size }} src={`${svgIcon}#eye`} />
    );
  }
}
