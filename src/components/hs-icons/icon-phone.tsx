import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../assets/icons/phone.svg';

/** @internal **/
@Component({
  tag: 'hs-icon-phone',
  shadow: false,
})
export class HsIconPhone {
  @Prop({ reflect: true }) size = '1rem';

  render() {
    return (
      <img style={{ height: this.size, width: this.size }} src={`${svgIcon}#phone`} />
    );
  }
}
