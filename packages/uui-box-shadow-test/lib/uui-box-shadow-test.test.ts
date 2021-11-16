import { html, fixture, expect } from '@open-wc/testing';
import { UUIBoxShadowTestElement } from './uui-box-shadow-test.element';
import '.';

describe('UUIBoxShadowTestElement', () => {
  let element: UUIBoxShadowTestElement;

  beforeEach(async () => {
    element = await fixture(
      html` <uui-box-shadow-test></uui-box-shadow-test> `
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
