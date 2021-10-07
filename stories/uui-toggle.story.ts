import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@umbraco-ui/uui-toggle/lib/index';

export default {
  title: 'Inputs/Toggle',
  component: 'uui-toggle',
  args: {
    'hide-label': false,
    checked: false,
    value: 'toggle',
    disabled: false,
    error: false,
    label: 'label',
  },
  argTypes: {
    labelPosition: {
      options: ['left', 'right', 'top', 'bottom'],
      control: { type: 'select' },
    },
  },
};

export const Overview: Story = props =>
  html`
    <uui-toggle
      .value=${props.value}
      .label=${props.label}
      .labelPosition=${props.labelPosition}
      ?checked=${props.checked}
      ?disabled=${props.disabled}
      ?error=${props.error}
      ?hide-label=${props['hide-label']}></uui-toggle>
  `;

export const Error: Story = () =>
  html`
    <uui-toggle error .label=${'Toggle label'} value="bike"></uui-toggle><br />
    <uui-toggle error label="Toggle me" value="bike" checked></uui-toggle
    ><br /><uui-toggle disabled error label="Disabled"></uui-toggle><br />
    <uui-toggle disabled checked error label="Disabled"></uui-toggle>
  `;

export const WithSlottedLabel: Story = () =>
  html`
    <uui-toggle label="Toggle label" value="bike"
      >Using <b>Slot</b> for displayed label</uui-toggle
    >
  `;

export const LabelPosition: Story = () => html`
  <div
    style="display: grid; grid-template-columns: repeat(4, 128px); align-items: center; justify-items: center;">
    <uui-toggle label="Left" label-position="left"></uui-toggle>
    <uui-toggle label="Top" label-position="top"></uui-toggle>
    <uui-toggle label="Right" label-position="right"></uui-toggle>
    <uui-toggle label="Bottom" label-position="bottom"></uui-toggle>
  </div>
`;

export const NoLabel: Story = () =>
  html`<uui-toggle
    hide-label
    label="Toggle label"
    name="Hidden Label"></uui-toggle>`;

export const Disabled: Story = () => html`
  <uui-toggle disabled label="Disabled"></uui-toggle>
  <uui-toggle disabled label="Disabled &amp; checked" checked></uui-toggle>
`;
