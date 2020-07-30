// 先会跑app.tsx umi定义 约定 src/app.tsx 为运行时配置。
import request from '@/utils/request';
import { IConfigFromPlugins } from '@@/core/pluginConfig';
// import
// console.log('sdfasdfasdf');
// import React from 'react';
// import { history } from 'umi';
//

// console.log(history)
// // history 栈里的实体个数
// console.log(history.length);
// // 当前 history 跳转的 action，有 PUSH、REPLACE 和 POP 三种类型
// console.log(history.action);
// // location 对象，包含 pathname、search 和 hash
// console.log(history.location.pathname);
// console.log(history.location.search);
// console.log(history.location.hash);

// const unlisten = history.listen((location: { pathname: any; }, action: any) => {
//   console.log(location.pathname, action);
// });
// console.log(unlisten());

async function getInitialState() {
    const data = await request('/api/login');
    return data;
}

// const login = getInitialState();

async function getUser() {
    const data = await request('/api/users/me');
    return data;
}

// const user = getUser(login);

// sessionStorage.setItem('user', user);
// 增加 路由
export function patchRoutes({ routes }: IConfigFromPlugins) {
    // console.log(routes);

    routes &&
        routes.unshift({
            path: '/foo',
            exact: true,
            component: require('@/pages/usedrop/index').default,
        });
}
