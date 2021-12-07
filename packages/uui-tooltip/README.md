# uui-tooltip

![npm](https://img.shields.io/npm/v/@umbraco-ui/uui-tooltip?logoColor=%231B264F)

Umbraco style tooltip component.

## Installation

### ES imports

```zsh
npm i @umbraco-ui/uui-tooltip
```

Import the registration of `<uui-tooltip>` via:

```javascript
import '@umbraco-ui/uui-tooltip/lib';
```

When looking to leverage the `UUITooltipElement` base class as a type and/or for extension purposes, do so via:

```javascript
import { UUITooltipElement } from '@umbraco-ui/uui-tooltip/lib/uui-tooltip.element';
```

### CDN

The component is available via CDN. This means it can be added to your application without the need of any bundler configuration. Here is how to use it with jsDelivr.

```html
<!-- Latest Version -->
<script src="https://cdn.jsdelivr.net/npm/@umbraco-ui/uui-tooltip@latest/dist/uui-tooltip.min.js"></script>

<!-- Specific version -->
<script src="https://cdn.jsdelivr.net/npm/@umbraco-ui/uui-tooltip@X.X.X/dist/uui-tooltip.min.js"></script>
```

## Usage

```html
<uui-tooltip></uui-tooltip>
```
