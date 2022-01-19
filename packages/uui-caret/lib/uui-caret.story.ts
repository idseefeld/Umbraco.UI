import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@umbraco-ui/uui-caret/lib/index';

export default {
  id: 'uui-caret',
  title: 'Symbols/Caret',
  component: 'uui-caret',
};

export const Overview: Story = props =>
  html` <uui-caret ?open=${props.open}></uui-caret>`;
