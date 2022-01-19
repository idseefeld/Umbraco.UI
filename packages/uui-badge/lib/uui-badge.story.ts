import { html } from 'lit';
import '@umbraco-ui/uui-badge/lib/index';
import {
  InterfaceLookNames,
  InterfaceLookType,
} from '@umbraco-ui/uui-base/lib/types/index';
import { Story } from '@storybook/web-components';

export default {
  title: 'Displays/Badge',
  component: 'uui-badge',
  id: 'uui-badge',
  args: {
    look: 'primary',
    slot: '1',
    attention: false,
  },
  argTypes: {
    look: {
      options: [
        'primary',
        'secondary',
        'outline',
        'placeholder',
        'positive',
        'warning',
        'danger',
      ],
      control: { type: 'select' },
    },
  },
};

const Template: Story = props => html` <div
  style="position:relative; width:80px; height:80px; border: 2px dashed black;">
  <uui-badge look=${props.look} ?attention=${props.attention}
    >${props.slot}</uui-badge
  >
</div>`;

export const AAAOverview = Template.bind({});
AAAOverview.args = {
  look: 'primary',
  slot: '1',
  attention: false,
};
AAAOverview.storyName = 'Overview';
AAAOverview.parameters = {
  docs: {
    source: {
      type: 'dynamic',
    },
  },
};

export const WithAttention = Template.bind({});
WithAttention.args = {
  look: 'danger',
  slot: '!',
  attention: true,
};

export const WithText = Template.bind({});
WithText.args = {
  look: 'positive',
  slot: 'Published',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  look: 'positive',
  slot: html`<uui-icon name="info"></uui-icon>`,
};

export const OnButton: Story = props => html` <uui-button look="outline">
  Button label
  <uui-badge look=${props.look}>${props.slot}</uui-badge>
</uui-button>`;
OnButton.args = {
  look: 'danger',
  slot: '!',
};

export const Looks: Story = props => html`
  <div style="display: flex; gap: 8px;">
    ${InterfaceLookNames.map(
      (lookName: InterfaceLookType) => html` <uui-badge
        look=${lookName}
        ?attention=${props.attention}
        style="position: relative"
        >${props.slot}</uui-badge
      >`
    )}
  </div>
`;
Looks.args = {
  look: 'primary',
  slot: '!',
};
