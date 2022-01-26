import { UUIEvent } from '@umbraco-ui/uui-base';

import { UUIBooleanInputElement } from './uui-boolean-input.element';

export class UUIBooleanInputEvent extends UUIEvent<{}, UUIBooleanInputElement> {
  public static readonly CHANGE: string = 'change';
}
