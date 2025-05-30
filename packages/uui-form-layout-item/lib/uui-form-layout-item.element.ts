import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { defineElement } from '@umbraco-ui/uui-base/lib/registration';

// TODO: Make sure validation messages can be seen for the whole Form Item. Make them follow the screen if form controls are taller than available screen height.

/**
 * @element uui-form-layout-item
 * @description - Form item composes label, input and validation-messages in a proper layout.
 * @slot - for button contents
 * @slot message - for extras in the messages container
 */

@defineElement('uui-form-layout-item')
export class UUIFormLayoutItemElement extends LitElement {
  static styles = [
    css`
      :host {
        position: relative;
        display: block;
        margin-top: var(--uui-size-space-5);
        margin-bottom: var(--uui-size-space-5);
      }
      #label {
        margin-top: -5px;
        margin-bottom: 5px;
      }
      #description {
        color: var(--uui-interface-contrast-disabled);
        font-size: var(--uui-type-small-size);
      }
      #label + #description {
        margin-top: -8px;
        min-height: 8px;
      }
    `,
  ];
  /*
  @property({type: String})
  label: string | null = null;
  */

  @property({ type: String })
  description: string | null = null;

  @state()
  private _labelSlotHasContent = false;

  private _labelSlotChanged = (e: Event) => {
    this._labelSlotHasContent =
      (e.target as HTMLSlotElement).assignedNodes({ flatten: true }).length > 0;
  };

  @state()
  private _descriptionSlotHasContent = false;

  private _descriptionSlotChanged = (e: Event) => {
    this._descriptionSlotHasContent =
      (e.target as HTMLSlotElement).assignedNodes({ flatten: true }).length > 0;
  };

  render() {
    return html`
      <div id="label" style=${this._labelSlotHasContent ? '' : 'display: none'}>
        <slot name="label" @slotchange=${this._labelSlotChanged}></slot>
      </div>
      <div
        id="description"
        style=${this._descriptionSlotHasContent || this.description !== null
          ? ''
          : 'display: none'}>
        ${this.description}
        <slot
          name="description"
          @slotchange=${this._descriptionSlotChanged}></slot>
      </div>
      <uui-form-validation-message>
        <slot></slot>
        <slot name="message" slot="message"></slot>
      </uui-form-validation-message>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uui-form-layout-item': UUIFormLayoutItemElement;
  }
}
