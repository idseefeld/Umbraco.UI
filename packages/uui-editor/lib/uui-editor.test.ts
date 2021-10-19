import { html, fixture, expect } from '@open-wc/testing';
import { UUIEditorElement } from './uui-editor.element';
import './index';

describe('UUIBox', () => {
  let element: UUIEditorElement;
  beforeEach(async () => {
    element = await fixture(html` <uui-editor>
      <div slot="header">Header</div>
      <div slot="main">Main</div>
      <div slot="footer">Footer</div>
    </uui-editor>`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
