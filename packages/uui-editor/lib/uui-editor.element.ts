import { LitElement, html, css } from 'lit';

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
      }

      ::slotted([slot='header']),
      ::slotted([slot='footer']){
        padding: var(--uui-space-4) var(--uui-space-5);
        background-color: var(--uui-interface-surface);
        box-sizing: border-box;
      }

      ::slotted([slot='header']) {
        border-bottom: 1px solid var(--uui-interface-border);
        flex: 0 0 auto;
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
      
      /*
      #main {
        padding: var(--uui-space-5);
        background-color: var(--uui-interface-surface-alt);
        flex: 1 1 auto;
      }
      */
    `,
  ];

  render() {
    return html`
      <slot name="header"></slot>
      <slot name="main"></slot>
      <!--
        <div id="main">
          <uui-overflow-container>
            <slot name="main"></slot>
          </uui-overflow-container>
        </div>
      -->
      <slot name="footer"></slot>
    `;
  }
}
