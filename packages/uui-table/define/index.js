import { defineElement } from '@umbraco-ui/uui-base';

import {
  UUITableCellElement,
  UUITableColumnElement,
  UUITableElement,
  UUITableHeadCellElement,
  UUITableHeadElement,
  UUITableRowElement,
} from '../lib';

defineElement('uui-table-column', UUITableColumnElement);
defineElement('uui-table-head-cell', UUITableHeadCellElement);
defineElement('uui-table-head', UUITableHeadElement);
defineElement('uui-table-cell', UUITableCellElement);
defineElement('uui-table-row', UUITableRowElement);
defineElement('uui-table', UUITableElement);
