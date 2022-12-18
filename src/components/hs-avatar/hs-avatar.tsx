import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'hs-avatar',
  styleUrl: 'hs-avatar.css',
  shadow: false,
})
export class HsAvatar {
  @Prop()
  image: string = 'https://thispersondoesnotexist.com/image';


  render() {
    return (
      <div class="card">
        <img  class="image" src={this.image} alt="avatar" />
      </div>
    );
  }
}