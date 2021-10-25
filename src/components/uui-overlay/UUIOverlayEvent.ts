import { UUIEvent } from '../../../packages/uui-base/lib/events/index';
import { UUIOverlayElement } from './uui-overlay.element';

export class UUIOverlayEvent extends UUIEvent<{}, UUIOverlayElement> {
  public static readonly CHANGE = 'change';
}
