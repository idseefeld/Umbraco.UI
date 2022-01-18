import { UUIIconElement } from './uui-icon.element';
import { defineElement } from '@umbraco-ui/uui-base/lib/registration';

defineElement('uui-icon', UUIIconElement as any);
//TODO: consider if we should ship a define method from index and then that is the method called if importing define.

declare global {
  interface HTMLElementTagNameMap {
    'uui-icon': UUIIconElement;
  }
}
