# uui-avatar

## Usage

```zsh
npm i @umbraco-ui/uui-editor
```

Import the registration of `<uui-editor>` via:

```javascript
import '@umbraco-ui/uui-editor/lib';
```

When looking to leverage the `UUIEditorElement` base class as a type and/or for extension purposes, do so via:

```javascript
import { UUIEditorElement } from '@umbraco-ui/uui-editor/lib/uui-editor.element';
```

## Example

```html
<uui-editor>
  <div slot="header">Header</div>
  <div slot="main">Main</main>
  <div slot="footer">Footer</main>
</uui-editor>
```
