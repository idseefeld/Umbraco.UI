/*
Same code as rollup plugin. but using commonJS.
TODO: Find solution to use same code in CommonJS and ESM.
*/

const createFilter = require('@rollup/pluginutils').createFilter;
const postcss = require('postcss');
const syntax = require('postcss-jsx');
const postcssCustomPropertiesFallback = require('postcss-custom-properties-fallback');
const postcssConfig = require('postcss-load-config');

// @ts-ignore-start
// eslint-disable-next-line -- // @typescript-eslint/ban-ts-comment // @ts-ignore
const customProperties = require('../packages/uui-css/custom-properties.js'); // eslint-disable-line
// @ts-ignore-end

const options = {
  include: ['**/uui-*.ts', '**/*Mixin.ts', '**/*.styles.ts'],
  exclude: [
    '**/uui-base/lib/events/**',
    '**/*.story.ts',
    '**/*.d.ts',
    '../uui-css/**/*.ts',
  ],
};

const filter = createFilter(options.include, options.exclude, {});

module.exports = {
  default: function () {
    return {
      name: 'process-lit-postcss',

      async transform(code, id) {
        if (filter(id)) {
          const additionalPlugins = [
            postcssCustomPropertiesFallback({ importFrom: customProperties }),
          ];

          try {
            return await postcssConfig().then(async ({ plugins, options }) => {
              const result = await postcss([
                ...plugins,
                ...additionalPlugins,
              ]).process(code, {
                syntax: syntax,
                map: null, // provide source map if available
              });

              return {
                code: result.content,
              };
            });
          } catch (e) {
            console.error(e);
          }
        }
      },
    };
  },
};