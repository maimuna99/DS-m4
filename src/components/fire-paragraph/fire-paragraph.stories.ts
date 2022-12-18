export default{
    title: 'Components/Typography/Paragraph'
};

export const Template =(args) => `
<fire-paragraph>
    ${args.text}
<fire-paragraph/>
`;

export const DefaultParagraph =Template.bind({});
DefaultParagraph.args={
    text: 'I am a configuration piece of text'
}

export const AnotherParagraph =Template.bind({});
AnotherParagraph.args={
    text: 'I am a another piece of text'
}