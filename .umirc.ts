import { defineConfig } from 'umi';
const CompressionPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg|ts|tsx)(\?.*)?$/i;
const IS_PROD = ['production', 'prod'].includes(String(process.env.NODE_ENV));
import route from './route';

// console.log(process.env.NODE_ENV, IS_PROD)

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // mock: true, // 关闭 Mock？
  title: 'ddaaa', // 网页标题
  // base: '/docs/', 路由前缀
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  // analyze: {
  //   analyzerMode: 'server',
  //   analyzerPort: 8888,
  //   openAnalyzer: true,
  //   // generate stats file while ANALYZE_DUMP exist
  //   generateStatsFile: false,
  //   statsFilename: 'stats.json',
  //   logLevel: 'info',
  //   defaultSizes: 'parsed', // stat  // gzip
  // },
  publicPath: './', // 编译后 index.html js css 前缀
  hash: true,
  history: {
    type: 'browser',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    http2: false,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:9093',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
  theme: {
    '@primary-color': '#1DA57A',
  },
  targets: {
    chrome: 49,
    firefox: 64,
    safari: 10,
    edge: 13,
    ios: 10,
  },
  // layout: {},
  // title 是标题
  routes: route,
  // host: '127.0.0.1',
  chainWebpack(memo: any) {
    memo.plugin('CompressionPlugin').use(
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: productionGzipExtensions,
        // 只处理大于xx字节 的文件，默认：0
        threshold: 10240,
        // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
        minRatio: 0.8, // 默认: 0.8
        // 是否删除源文件，默认: false
        deleteOriginalAssets: process.env.NODE_ENV === 'production',
      }),
    );
  },
  // chunks: ['vendors', 'umi'],
  // chainWebpack: function (config, { webpack }) {
  //   config.merge({
  //     optimization: {
  //       minimize: true,
  //       splitChunks: {
  //         chunks: 'async',
  //         minSize: 30000,
  //         minChunks: 3,
  //         automaticNameDelimiter: '.',
  //         cacheGroups: {
  //           vendor: {
  //             name: 'vendors',
  //             test({ resource }: {resource: any}) {
  //               return /[\\/]node_modules[\\/]/.test(resource);
  //             },
  //             priority: 10,
  //           },
  //         },
  //       },
  //     }
  //   });
  // },
  extraBabelPlugins: [IS_PROD ? 'transform-remove-console' : ''],
  // dynamicImport: {
  //   loading: '@/Loading',
  // },
  // favicon: '/assets/favicon.ico', // 配置favicon

  // proxy: { 配置代理能力。
  //   '/api': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
  antd: {},
  dva: {
    hmr: true,
  },
  // locale: {
  //   // default zh-CN
  //   default: 'zh-CN',
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   antd: true,
  //   baseNavigator: true,
  // },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
});
