import { html, fixture, expect } from '@open-wc/testing';
import { UUITooltipElement } from './uui-tooltip.element';
import '.';

describe('UUITooltipElement', () => {
  let element: UUITooltipElement;

  beforeEach(async () => {
    element = await fixture(html` <uui-tooltip></uui-tooltip> `);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
