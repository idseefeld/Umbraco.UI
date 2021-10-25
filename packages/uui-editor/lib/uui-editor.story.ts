import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import '@umbraco-ui/uui-editor/lib/index';

export default {
  title: 'Displays/Editor',
  component: 'uui-editor',
  id: 'uui-editor',
};

export const AAAOverview: Story = () => html`
  <uui-editor>
    <div slot="header">Header</div>
    <div slot="main">Main</div>
    <div slot="footer">Footer</div>
  </uui-editor>
`;

export const HeaderAndTab: Story = () =>
  html`
    <uui-editor style="height: 600px; border: 1px solid #C4C4C4">
      <div slot="header" style="display: flex; align-items: center;">
        <p><b>Packages</b></p>
      </div>

      <div slot="header-right">
        <div
          style="border-left: 1px solid #C4C4C4; top: 0; right: 0; height: 100%">
          <uui-tab-group style="--uui-tab-divider: #C4C4C4; flex-wrap: nowrap;">
            <uui-tab active>Tab 1</uui-tab>
            <uui-tab>Tab 2</uui-tab>
            <uui-tab>Tab 3</uui-tab>
            <uui-tab>Tab 4</uui-tab>
          </uui-tab-group>
        </div>
      </div>

      <div slot="main">
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

      <div
        slot="footer"
        style="display: flex; align-items: center; justify-content: space-between;">
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

export const TabsLeft: Story = () =>
  html`
    <uui-editor style="height: 600px; border: 1px solid #C4C4C4">
      <div slot="header" style="display: flex; align-items: center;">
        <uui-input label="Hello" hide-label style="flex: 1 1 auto;"></uui-input>
      </div>

      <div slot="header-left">
        <div
          style="border-right: 1px solid #C4C4C4; top: 0; right: 0; height: 100%">
          <uui-tab-group style="--uui-tab-divider: #C4C4C4; flex-wrap: nowrap;">
            <uui-tab active>Tab 1</uui-tab>
            <uui-tab>Tab 2</uui-tab>
            <uui-tab>Tab 3</uui-tab>
            <uui-tab>Tab 4</uui-tab>
          </uui-tab-group>
        </div>
      </div>

      <div slot="main">
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

      <div
        slot="footer"
        style="display: flex; align-items: center; justify-content: space-between;">
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

export const TabsRight: Story = () =>
  html`
    <uui-editor style="height: 600px; border: 1px solid #C4C4C4">
      <div slot="header" style="display: flex; align-items: center;">
        <uui-input label="Hello" hide-label style="flex: 1 1 auto;"></uui-input>
      </div>

      <div slot="header-right">
        <div
          style="border-left: 1px solid #C4C4C4; top: 0; right: 0; height: 100%">
          <uui-tab-group style="--uui-tab-divider: #C4C4C4; flex-wrap: nowrap;">
            <uui-tab active>Tab 1</uui-tab>
            <uui-tab>Tab 2</uui-tab>
            <uui-tab>Tab 3</uui-tab>
            <uui-tab>Tab 4</uui-tab>
          </uui-tab-group>
        </div>
      </div>

      <div slot="main">
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

      <div
        slot="footer"
        style="display: flex; align-items: center; justify-content: space-between;">
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

export const TabsBoth: Story = () =>
  html`
    <uui-editor style="height: 600px; border: 1px solid #C4C4C4">
      <div slot="header" style="display: flex; align-items: center;">
        <uui-input label="Hello" hide-label style="flex: 1 1 auto;"></uui-input>
      </div>

      <div slot="header-left">
        <div
          style="border-right: 1px solid #C4C4C4; top: 0; right: 0; height: 100%">
          <uui-tab-group style="--uui-tab-divider: #C4C4C4; flex-wrap: nowrap;">
            <uui-tab active>Tab 1</uui-tab>
            <uui-tab>Tab 2</uui-tab>
            <uui-tab>Tab 3</uui-tab>
            <uui-tab>Tab 4</uui-tab>
          </uui-tab-group>
        </div>
      </div>

      <div slot="header-right">
        <div
          style="border-left: 1px solid #C4C4C4; top: 0; right: 0; height: 100%">
          <uui-tab-group style="--uui-tab-divider: #C4C4C4; flex-wrap: nowrap;">
            <uui-tab active>Tab 1</uui-tab>
            <uui-tab>Tab 2</uui-tab>
            <uui-tab>Tab 3</uui-tab>
            <uui-tab>Tab 4</uui-tab>
          </uui-tab-group>
        </div>
      </div>

      <div slot="main">
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

      <div
        slot="footer"
        style="display: flex; align-items: center; justify-content: space-between;">
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
