import { newSpecPage } from '@stencil/core/testing';
import { FireParagraph } from '../fire-paragraph';

describe('fire-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FireParagraph],
      html: `<fire-paragraph></fire-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <fire-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </fire-paragraph>
    `);
  });
});
