import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../assets/icons/facebook.svg';

/** @internal **/
@Component({
  tag: 'hs-icon-facebook',
  shadow: false,
})
export class HsIconFacebook {
  @Prop({ reflect: true }) size = '1rem';

  render() {
    return (
      <img style={{ height: this.size, width: this.size }} src={`${svgIcon}#facebook`} />
    );
  }
}
