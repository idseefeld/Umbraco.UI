import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@umbraco-ui/uui-box-shadow-test/lib/index';

export default {
  id: 'uui-box-shadow-test',
  title: 'Box Shadow Test',
  component: 'uui-box-shadow-test',
  parameters: {
    docs: {
      source: {
        code: `<uui-box-shadow-test></uui-box-shadow-test>`,
      },
    },
  },
};

export const Overview: Story = () =>
  html`<uui-box-shadow-test></uui-box-shadow-test>`;
