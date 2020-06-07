// 先会跑app.tsx
import request from '@/utils/request';

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

export async function getInitialState() {
  const data = await request('/login');
  return data;
}
