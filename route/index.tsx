export default [
    // exact: true 精确匹配
    // {
    //     path: '/user',
    //     component: '@/layout/UserLayout',
    //     routes: [
    //         {
    //             path: '/user/login',
    //             title: 'Login',
    //             name: 'login',
    //             component: '@/pages/login/index',
    //         },
    //     ],
    // },
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
                component: '@/pages/index',
            },
            // {
            //     path: '/login',
            //     component: '@/pages/login/index',
            // },
            {
                path: '/list',
                component: '@/pages/home/index',
            },
            {
                path: '/toggle',
                component: '@/pages/toggle/index',
            },
            {
                path: '/hooks',
                component: '@/pages/hooks/index',
            },
            {
                path: '/hooks/reducer',
                exact: true,
                component: '@/pages/hooks/useReducer',
            },
            {
                path: '/hooks/ref',
                component: '@/pages/hooks/ref',
            },
            {
                path: '/hooks/manual',
                component: '@/pages/hooks/manual',
            },
            {
                path: '/hooks/polling',
                component: '@/pages/hooks/polling',
            },
            {
                path: '/hooks/parallel',
                component: '@/pages/hooks/parallel',
            },
            {
                path: '/hooks/mutate',
                component: '@/pages/hooks/mutate',
            },
            {
                path: '/request',
                component: '@/pages/useRequest/index',
            },
            {
                path: '/request/fetch',
                component: '@/pages/useRequest/fetchs',
            },
            {
                path: '/hooks/full',
                component: '@/pages/hooks/fullScreen',
            },
            {
                component: '@/pages/404',
            },
        ],
    },
    {
        component: '@/pages/404',
    },
];
