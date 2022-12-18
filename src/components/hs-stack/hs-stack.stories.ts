
export default {
  title: 'Components/Layout/Stack',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    orientation: { control: 'radio', options: ['vertical', 'horizontal'] },
    gap: { control: 'radio', options: ['large', 'small'] },
  }
};

const Template = (args) => `
  <style>
    .stack-item { display: inline-block; }
  </style>
  <hs-stack orientation="${args.orientation}" gap="${args.gap}">
  <hs-avatar/> <hs-avatar/> <hs-avatar/> <hs-avatar/>
  </hs-stack>
`;

export const StackStory = Template.bind({});
StackStory.args = {
  orientation: 'horizontal',
  gap: 'large',
};
