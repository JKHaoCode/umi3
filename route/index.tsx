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
                component: '@/pages/index',
            },
            {
                path: '/login',
                component: '@/pages/login/index',
            },
            {
                path: '/list',
                component: '@/pages/home/index',
            },
            {
                path: '/toggle',
                component: '@/pages/toggle/index',
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
