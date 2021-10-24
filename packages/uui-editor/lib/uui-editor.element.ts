import { LitElement, html, css } from 'lit';
import '@umbraco-ui/uui-overflow-container/lib';

/**
 *  A box for grouping elements
 *  @element uui-editor
 *  @slot header - header area for title
 *  @slot main - main content area
 *  @slot footer - main content area
 *
 */
export class UUIEditorElement extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
      }

      ::slotted([slot='footer']),
      #header {
        padding: var(--uui-space-4) var(--uui-space-5);
        background-color: var(--uui-interface-surface);
        box-sizing: border-box;
      }

      ::slotted([slot='footer']) {
        border-top: 1px solid var(--uui-interface-border);
        flex: 0 0 auto;
      }

      ::slotted([slot='main']) {
        padding: var(--uui-space-5);
        background-color: var(--uui-interface-surface-alt);
        flex: 1 1 auto;
      }

      ::slotted([slot='header-right']) {
        margin: calc(var(--uui-space-4) * -1) calc(var(--uui-space-5) * -1);
        margin-left: var(--uui-space-5);
        width: min-content;
      }

      ::slotted([slot='header-left']) {
        margin: calc(var(--uui-space-4) * -1) calc(var(--uui-space-5) * -1);
        margin-right: var(--uui-space-5);
        width: min-content;
      }

      ::slotted([slot='header']) {
        width: 100%;
      }

      #header {
        border-bottom: 1px solid var(--uui-interface-border);
        display: flex;
      }

      #main {
        --uui-overflow-container-height: 100%;
      }
    `,
  ];

  render() {
    return html`
      <div id="header">
        <slot name="header-left"></slot>
        <slot name="header"> </slot>
        <slot name="header-right"></slot>
      </div>
      <uui-overflow-container id="main">
        <slot name="main"></slot>
      </uui-overflow-container>
      <slot name="footer"></slot>
    `;
  }
}
