import { UUIProdConfig } from '../rollup-package.config';

export default UUIProdConfig({
  entryPoints: ['index'],
  bundle: 'define/index.js',
  test: true,
});
