import { defineConfig } from 'umi';

/**
 * [defineConfig description]
 * @param {'abc'}} {  hash [description]
 */
export default defineConfig({
  hash: false,
  // title: ,
  devServer: {
    host: '0.0.0.0',
    port: 8050,
    https: false,
    http2: false,
  },
});
