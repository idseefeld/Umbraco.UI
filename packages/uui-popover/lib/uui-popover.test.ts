import { html, fixture, expect } from '@open-wc/testing';
import { UUIPopoverElement } from './uui-popover.element';
import '.';

describe('UUIPopoverElement', () => {
  let element: UUIPopoverElement;

  beforeEach(async () => {
    element = await fixture(html` <uui-popover></uui-popover> `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
