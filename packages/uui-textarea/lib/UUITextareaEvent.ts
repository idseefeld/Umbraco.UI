import { UUIEvent } from '@umbraco-ui/uui-base';

import { UUITextareaElement } from './uui-textarea.element';

export class UUITextareaEvent extends UUIEvent<{}, UUITextareaElement> {
  public static readonly CHANGE: string = 'change';
  public static readonly INPUT: string = 'input';
}
