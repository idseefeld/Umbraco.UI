import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@umbraco-ui/uui-editor/lib/index';

export default {
  title: 'Displays/Editor',
  component: 'uui-editor',
  id: 'uui-editor',
};

const Template: Story = () => html`
  <uui-editor>
    <div slot="header">Header</div>
    <div slot="main">Main</div>
    <div slot="footer">Footer</div>
  </uui-editor>
`;

export const AAAOverview = Template.bind({});
AAAOverview.storyName = 'Overview';
AAAOverview.parameters = {
  docs: {
    source: {
      code: `
<uui-editor>
  <div slot="header">Header</div>
  <div slot="main">Main</div>
  <div slot="footer">Footer</div>
</uui-editor>
      `,
    },
  },
};

export const Testing: Story = () =>
  html`
    <uui-editor style="height: 600px;">
      <div slot="header" style="display: flex; align-items: center; justify-content: space-between;">

        <uui-input label="Hello" hide-label style="flex: 1 1 auto;"></uui-input>

        <uui-tab-group>
          <uui-tab active>Tab 1</uui-tab>
          <uui-tab>Tab 2</uui-tab>
          <uui-tab>Tab 3</uui-tab>
          <uui-tab>Tab 4</uui-tab>
        </uui-tab-group>

      </div>
      
      <div slot="main">

        <!--
        <uui-tab-group>
          <uui-tab active>Tab 1</uui-tab>
          <uui-tab>Tab 2</uui-tab>
          <uui-tab>Tab 3</uui-tab>
          <uui-tab>Tab 4</uui-tab>
        </uui-tab-group>
        -->

        <uui-box style="margin-bottom: 20px;">
          <div slot="header"><strong>Box 1</strong></div>
          <div slot="main">
            <div>
              <uui-input label="Email"></uui-input>
            </div>
            <div>
              <uui-input label="Language"></uui-input>
            </div>
          </div>
        </uui-box>

        <uui-box>
          <div slot="header"><strong>Box 2</strong></div>
          <div slot="main">
            <div>
              <uui-input label="Email"></uui-input>
            </div>
            <div>
              <uui-input label="Language"></uui-input>
            </div>
          </div>
        </uui-box>
      </div>
      
      <div slot="footer" style="display: flex; align-items: center; justify-content: space-between;">

        <uui-breadcrumbs>
          <uui-breadcrumb-item>List</uui-breadcrumb-item>
          <uui-breadcrumb-item>Item 1</uui-breadcrumb-item>
        </uui-breadcrumbs>

        <div>
          <uui-button label="Return to list">Return to list</uui-button>
          <uui-button look="positive" label="Save">Save</uui-button>
        </div>
      </div>
    </uui-editor>
  `;
