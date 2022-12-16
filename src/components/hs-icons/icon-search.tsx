import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../assets/icons/search.svg';

/** @internal **/
@Component({
  tag: 'hs-icon-search',
  shadow: false,
})
export class HsIconSearch {
  @Prop({ reflect: true }) size = '1rem';

  render() {
    return (
      <img style={{ height: this.size, width: this.size }} src={`${svgIcon}#search`} />
    );
  }
}
