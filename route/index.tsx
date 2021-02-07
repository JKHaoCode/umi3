export default [
  // exact: true 精确匹配
  {
    path: '/user',
    component: '@/layout/UserLayout',
    routes: [
      {
        path: '/user/login',
        title: 'Login',
        name: 'login',
        component: '@/pages/login/index',
      },
    ],
  },
  {
    path: '/',
    component: '@/layout/index',
    access: 'canDeleteFoo',
    routes: [
      {
        path: '/',
        redirect: '/index',
      },
      {
        path: '/index',
        title: 'index',
        component: '@/pages/home',
      },
      // {
      //     path: '/login',
      //     component: '@/pages/login/index',
      // },
      // {
      //     path: '/list',
      //     component: '@/pages/home/index',
      // },
      // {
      //     path: '/toggle',
      //     component: '@/pages/toggle/index',
      // },
      // {
      //     path: '/hooks',
      //     component: '@/pages/hooks/index',
      // },
      // {
      //     path: '/hooks/usememo',
      //     component: '@/pages/cycle/Index',
      // },
      // {
      //     path: '/hooks/callback',
      //     component: '@/pages/cycle/callback',
      // },
      // {
      //     path: '/hooks/reducer',
      //     exact: true,
      //     component: '@/pages/hooks/useReducer',
      // },
      // {
      //     path: '/hooks/ref',
      //     component: '@/pages/hooks/ref',
      // },
      // {
      //     path: '/hooks/manual',
      //     component: '@/pages/hooks/manual',
      // },
      // {
      //     path: '/hooks/polling',
      //     component: '@/pages/hooks/polling',
      // },
      // {
      //     path: '/hooks/parallel',
      //     component: '@/pages/hooks/parallel',
      // },
      // {
      //     path: '/hooks/mutate',
      //     component: '@/pages/hooks/mutate',
      // },
      // {
      //     path: '/request',
      //     component: '@/pages/useRequest/index',
      // },
      // {
      //     path: '/request/fetch',
      //     component: '@/pages/useRequest/fetchs',
      // },
      // {
      //     path: '/hooks/full',
      //     component: '@/pages/hooks/fullScreen',
      // },
      // {
      //     path: '/hooks/usedrop',
      //     component: '@/pages/usedrop/index',
      // },
      // {
      //     path: '/hooks/usedynamic',
      //     component: '@/pages/hooks/useDynamicList',
      // },
      // {
      //     path: '/hooks/app',
      //     component: '@/pages/hooks/customize',
      // },
      // {
      //     path: '/ahooks/useRequest/index',
      //     component: '@/pages/ahooks/useRequest/useRequest',
      // },
      // {
      //     path: '/ahooks/useRequest/manual',
      //     component: '@/pages/ahooks/useRequest/manual',
      // },
      // {
      //     path: '/ahooks/useRequest/polling',
      //     component: '@/pages/ahooks/useRequest/pollingInterval',
      // },
      // {
      //     path: '/ahooks/useRequest/fetch',
      //     component: '@/pages/ahooks/useRequest/fetchKey',
      // },
      // {
      //     path: '/ahooks/useRequest/rely',
      //     component: '@/pages/ahooks/useRequest/rely',
      // },
      // {
      //     path: '/ahooks/useRequest/debounce',
      //     component: '@/pages/ahooks/useRequest/debounce',
      // },
      // // throttle
      // {
      //     path: '/ahooks/useRequest/throttle',
      //     component: '@/pages/ahooks/useRequest/throttle',
      // },
      // {
      //     path: '/ahooks/useRequest/mutate',
      //     component: '@/pages/ahooks/useRequest/mutate',
      // },
      // {
      //     path: '/ahooks/useRequest/refresh',
      //     component: '@/pages/ahooks/useRequest/refreshDeps',
      // },
      // {
      //     path: '/ahooks/useAntdTable/index',
      //     component: '@/pages/ahooks/useAntdTable/index',
      // },
      // {
      //     path: '/ahooks/useDebounce/index',
      //     component: '@/pages/ahooks/useDebounce/index',
      // },
      // {
      //     path: '/ahooks/useDebounce/fn',
      //     component: '@/pages/ahooks/useDebounce/fn',
      // },
      {
        component: '@/pages/404',
      },
    ],
  },
  {
    component: '@/pages/404',
  },
];
