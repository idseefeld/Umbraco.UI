import { UUIEvent } from '@umbraco-ui/uui-base';

import { UUICardElement } from './uui-card.element';

export class UUICardEvent extends UUIEvent<{}, UUICardElement> {
  public static readonly OPEN = 'open';
}
