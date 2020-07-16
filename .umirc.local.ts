import { defineConfig } from 'umi';

/**
 * [defineConfig description]
 * @param {'abc'}} {  hash [description]
 */
export default defineConfig({
    hash: false,
    title: 'abc',
    devServer: {
        host: '0.0.0.0',
        port: 8000,
        https: false,
        http2: false,
    },
});
