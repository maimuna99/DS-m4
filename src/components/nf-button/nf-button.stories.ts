
export default {
  title: 'Components/Button',
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
      defaultValue: 'Submit',
    },
    variant: {
      options: ['solid', 'outline', 'ghost'],
      control: { type: 'radio' },
      description: 'The button variant',
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
      description: 'The button size'
    },
  }
};


const Template = (args) => `
  <nf-button variant="${args.variant}" size="${args.size}">
    ${args.text}
  </nf-button>
`;

export const Button = Template.bind({});
Button.args = {
  text: 'Get Started ',
  variant: 'solid',
  size: 'large',
};



