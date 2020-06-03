import { defineConfig } from 'umi';
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg|ts|tsx)(\?.*)?$/i;
const IS_PROD = ["production", "prod"].includes(String(process.env.NODE_ENV));

// console.log(process.env.NODE_ENV, IS_PROD)

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'ddaaa', // 网页标题
  // base: '/docs/', 路由前缀
  publicPath: '/static/', // 编译后 index.html js css 前缀
  hash: true,
  history: {
    type: 'browser',
  },
  theme: {
    '@primary-color': '#1DA57A',
  },
  targets: {
    chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10
  },
  // layout: {},
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          redirect: '/index',
        },
        {
          path: '/index',
          component: '@/pages/index',
        },
        {
          component: '@/pages/404'
        },
      ]
    },
    {
      component: '@/pages/404'
    },
  ],
  // host: '127.0.0.1',
  chainWebpack(memo: any) {
    memo.plugin('CompressionPlugin').use(new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: productionGzipExtensions,
      // 只处理大于xx字节 的文件，默认：0
      threshold: 10240,
      // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
      minRatio: 0.8, // 默认: 0.8
      // 是否删除源文件，默认: false
      deleteOriginalAssets: false
    }));
  },
  extraBabelPlugins: [
    IS_PROD ? 'transform-remove-console' : ""
  ],
});
