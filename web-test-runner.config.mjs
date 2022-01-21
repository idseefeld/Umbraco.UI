import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  nodeResolve: true,
  files: 'packages/*/lib/**/*.test.ts',
  plugins: [esbuildPlugin({ ts: true })],
};
