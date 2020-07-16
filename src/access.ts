export default function(initialState: any) {
    // const { userId, role } = initialState;

    console.log(initialState);
    return {
        canReadFoo: true,
        // canUpdateFoo: role === 'admin',
        canUpdateFoo: true,
        canDeleteFoo: (foo: any) => {
            // console.log(foo)
            // return foo.ownerId === userId;
            return true;
        },
    };
}

// 配合 Layout 插件你可以很简单是实现针对某些页码的权限控制。如下所示，只有拥有了 canReadPageA （在 src/access.ts 中定义）权限，用户才可以访问该页面。否则会默认渲染 Layout 插件内置的权限错误页面。
// route 使用
// export const routes =  [
//   {
//     path: '/pageA',
//     component: 'PageA',
//     access: 'canReadPageA', // 权限定义返回值的某个 key
//   }
// ]
