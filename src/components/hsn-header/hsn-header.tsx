import { Component, h , Prop, Element } from '@stencil/core';


// const ariaAttributes =[
//   'aria-role'
// ]
@Component({
  tag: 'hsn-header',
  styleUrl: 'hsn-header.css',
  shadow: true,
})
export class HsnHeader {

  @Element()
  hostElement: HTMLElement;

  @Prop({reflect: true})
  level: 1| 2 |3;

  @Prop({reflect: true})
  textalign?: 'left' | 'center' | 'right';


  componentWillLoad(){
     if (this.level <1 || this.level >6){
        throw new Error("Header: the level property must be between 1 and 6")

     }
  }


    // for (let i = 0; i < ariaAttributes.length; i++) {
    //   const attributeName = ariaAttributes[index];
      
    //   if (this.hostElement.hasAttribute(attributeName)){
    //     const attributeValue = this.hostElement.getAttribute(attributeName);
    //   this.headerAriaAttributes[attributeName] = attributeValue;
    //   this.hostElement.removeAttribute(attributeName);

    //   }
    // }
  render() {
    const Tag =`h${this.level}`
    return (
        <Tag {...this.hostElement.attributes} className={this.textalign? `align-${this.textalign}` :undefined}> 
          <slot></slot>
        </Tag>

    );
  }

}
