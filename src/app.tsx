// 先会跑app.tsx umi定义 约定 src/app.tsx 为运行时配置。

export async function getInitialState(): Promise<{
  // settings?: LayoutSettings;
  // currentUser?: API.CurrentUser;
  // fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
}> {
  // console.log('getInitialState')
  // const fetchUserInfo = async () => {
  //   try {
  //     const currentUser = await queryCurrent();
  //     return currentUser;
  //   } catch (error) {
  //     history.push('/user/login');
  //   }
  //   return undefined;
  // };
  // // 如果是登录页面，不执行
  // if (history.location.pathname !== '/user/login') {
  //   const currentUser = await fetchUserInfo();
  //   const response = await menuData();
  //   // console.log('menu', response)
  //   return {
  //     fetchUserInfo,
  //     currentUser,
  //     // menuData: response.data,
  //     // settings: defaultSettings,
  //   };
  // }
  return {
    // fetchUserInfo,
    // settings: defaultSettings,
  };
}
