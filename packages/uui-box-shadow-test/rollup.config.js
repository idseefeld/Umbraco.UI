import { UUIProdConfig } from '../rollup-package.config';

export default UUIProdConfig({
  entryPoints: ['index', 'uui-box-shadow-test.element'],
  bundle: 'index',
});
