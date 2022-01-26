/* eslint-disable @typescript-eslint/no-var-requires */
const { kebabCase } = require('lodash');

module.exports = function (/** @type {import('plop').NodePlopAPI} */ plop) {
  // name of custom element tag
  plop.setPartial('tagnamePartial', 'uui-{{name}}');

  // name of LitElement class
  plop.setHelper('className', function (name) {
    const camel = name.replace(/-([a-z])/g, g => {
      return g[1].toUpperCase();
    });
    camel[0] = camel[0].toUpperCase();
    const capitalized = camel.charAt(0).toUpperCase() + camel.substring(1);
    return `UUI${capitalized}Element`;
  });

  // uui-base version
  plop.setHelper('uuiBaseVersion', function () {
    const basePackageJson = require('./packages/uui-base/package.json');
    return basePackageJson.version ?? '0.0.0';
  });

  // name used as title in storybook and documentation
  plop.setHelper('displayName', function (name) {
    const camel = name.replace(/-([a-z])/g, g => {
      return ` ${g[1].toUpperCase()}`;
    });
    camel[0] = camel[0].toUpperCase();
    const capitalized = camel.charAt(0).toUpperCase() + camel.substring(1);
    return capitalized;
  });

  plop.setGenerator('new-format', {
    description: 'Migrate components to new format',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'UUI element name (i.e. color-area). uui- prefix will be added automatically',
        validate: answer => {
          if (answer.length < 1) {
            return "There is no way we're moving forward without a name for your component.";
          } else return true;
        },
        // Convert the input into kebab case if not provided as such and strip prefix
        filter: response => kebabCase(response.replace(/^uui-/, '')),
      },
    ],
    actions: [
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/define/index.js',
        templateFile: './templates/plop-templates/define.js.hbs',
        force: true,
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/lib/index.ts',
        templateFile: './templates/plop-templates/index.ts.hbs',
        force: true,
      },
      {
        type: 'modify',
        path: './packages/{{> tagnamePartial }}/lib/{{> tagnamePartial }}.test.ts',
        pattern: /import '\.';/,
        template: "import '../define';",
      },
      {
        type: 'modify',
        path: './packages/{{> tagnamePartial }}/lib/{{> tagnamePartial }}.story.ts',
        pattern: /\/lib';/,
        template: "/define';",
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/rollup.config.js',
        templateFile: './templates/plop-templates/rollup.config.hbs',
        force: true,
      },
      {
        type: 'modify',
        path: './packages/{{> tagnamePartial }}/package.json',
        pattern: /\.\/lib\/index.js/,
        template: './dist/index.js',
      },
      {
        type: 'modify',
        path: './packages/{{> tagnamePartial }}/package.json',
        pattern: /"files": \[.*\],/s,
        template: '"files": ["custom-elements.json"],',
      },
      {
        type: 'modify',
        path: './packages/{{> tagnamePartial }}/package.json',
        pattern: /"clean":.*$/m,
        template:
          '"clean": "tsc --build --clean && rimraf dist custom-elements.json",',
      },
      {
        type: 'append',
        path: './packages/{{> tagnamePartial }}/package.json',
        pattern: /"module":.*$/m,
        template: '"type": "module",',
      },
      {
        type: 'append',
        path: './packages/{{> tagnamePartial }}/package.json',
        pattern: /"module":.*$/m,
        template: '"types": "./dist/index.d.ts",',
      },
      {
        type: 'append',
        path: './packages/{{> tagnamePartial }}/package.json',
        pattern: /"customElements":.*$/m,
        template:
          '"directories": {"dist": "./dist", "define": "./define"},\n"exports": {".": "./dist/index.js", "./define": "./define/index.js"},\n',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message:
          'UUI element name (i.e. color-area). uui- prefix will be added automatically',
        validate: answer => {
          if (answer.length < 1) {
            return "There is no way we're moving forward without a name for your component.";
          } else return true;
        },
        // Convert the input into kebab case if not provided as such and strip prefix
        filter: response => kebabCase(response.replace(/^uui-/, '')),
      },
    ],
    actions: [
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/lib/index.ts',
        templateFile: './templates/plop-templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/define/index.js',
        templateFile: './templates/plop-templates/define.js.hbs',
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/lib/{{> tagnamePartial }}.element.ts',
        templateFile: './templates/plop-templates/component.ts.hbs',
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/lib/{{> tagnamePartial }}.test.ts',
        templateFile: './templates/plop-templates/test.ts.hbs',
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/lib/{{> tagnamePartial }}.story.ts',
        templateFile: './templates/plop-templates/stories.ts.hbs',
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/README.md',
        templateFile: './templates/plop-templates/README.md.hbs',
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/rollup.config.js',
        templateFile: './templates/plop-templates/rollup.config.hbs',
      },
      {
        type: 'add',
        path: './packages/{{> tagnamePartial }}/package.json',
        templateFile: './templates/plop-templates/package.json.hbs',
      },
    ],
  });
};
