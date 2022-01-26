import { defineElement } from '@umbraco-ui/uui-base';

import { UUITabGroupElement } from './uui-tab-group.element';
import { UUITabElement } from './uui-tab.element';

defineElement('uui-tab', UUITabElement as any);
defineElement('uui-tab-group', UUITabGroupElement as any);
