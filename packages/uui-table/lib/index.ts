import { defineElement } from '@umbraco-ui/uui-base';

import { UUITableCellElement } from './uui-table-cell.element';
import { UUITableColumnElement } from './uui-table-column.element';
import { UUITableHeadCellElement } from './uui-table-head-cell.element';
import { UUITableHeadElement } from './uui-table-head.element';
import { UUITableRowElement } from './uui-table-row.element';
import { UUITableElement } from './uui-table.element';

defineElement('uui-table-column', UUITableColumnElement as any);
defineElement('uui-table-head-cell', UUITableHeadCellElement as any);
defineElement('uui-table-head', UUITableHeadElement as any);
defineElement('uui-table-cell', UUITableCellElement as any);
defineElement('uui-table-row', UUITableRowElement as any);
defineElement('uui-table', UUITableElement as any);
