import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../assets/icons/download.svg';

/** @internal **/
@Component({
  tag: 'hs-icon-download',
  shadow: false,
})
export class HsIconDownload {
  @Prop({ reflect: true }) size = '1rem';

  render() {
    return (
      <img style={{ height: this.size, width: this.size }} src={`${svgIcon}#download`} />
    );
  }
}
