import { defineConfig } from 'umi';

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
  // host: '127.0.0.1'
});
