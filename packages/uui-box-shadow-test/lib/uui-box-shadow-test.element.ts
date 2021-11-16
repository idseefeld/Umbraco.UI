import { LitElement, html, css } from 'lit';

/**
 * @element uui-box-shadow-test
 */
export class UUIBoxShadowTestElement extends LitElement {
  static styles = [
    css`
      #shadow {
        width: 300px;
        height: 300px;
        box-shadow: var(--uui-shadow-depth-5);
      }

      #shadow2 {
        width: 300px;
        height: 300px;
        box-shadow: var(--trolololo, 0 1px 3px red, 0 1px 2px blue);
      }
    `,
  ];

  render() {
    return html`<div id="shadow"></div>
      <div id="shadow2"></div> `;
  }
}
