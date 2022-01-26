import { UUIEvent } from '@umbraco-ui/uui-base';

import { UUISliderElement } from './uui-slider.element';

export class UUISliderEvent extends UUIEvent<{}, UUISliderElement> {
  public static readonly INPUT = 'input';
  public static readonly CHANGE = 'change';
}
