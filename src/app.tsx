// 先会跑app.tsx umi定义
import request from '@/utils/request';
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
