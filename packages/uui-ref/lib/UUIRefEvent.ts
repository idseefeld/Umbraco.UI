import { UUIEvent } from '@umbraco-ui/uui-base';

import { UUIRefElement } from './uui-ref.element';

export class UUIRefEvent extends UUIEvent<{}, UUIRefElement> {
  public static readonly OPEN = 'open';
}
