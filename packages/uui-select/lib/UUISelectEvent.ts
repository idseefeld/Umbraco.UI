import { UUIEvent } from '@umbraco-ui/uui-base';

import { UUISelectElement } from './uui-select.element';

export class UUISelectEvent extends UUIEvent<{}, UUISelectElement> {
  public static readonly CHANGE = 'change';
}
