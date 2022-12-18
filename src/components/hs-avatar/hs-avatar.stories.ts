 export default {
    title: 'Components/Display/Avatar',
    argTypes: {
      image: {
        control: { type: 'text' },
      },
      countryimage: {
        control: { type: 'text' },
      },
      size: {
        control: { type: 'number' },
      },
    },
  };
  
  const Template = args => `
    <div class="h-[${args.size}px] w-[${args.size}px] relative">
      <hs-avatar image="${args.image}" countryimage="${args.countryimage}"/>
    </div>
  `;
  
  export const Avatar = Template.bind({});
  Avatar.args = {
    image: 'https://thispersondoesnotexist.com/image',
  };