import { extend, RequestOptionsInit, ResponseType } from 'umi-request';
import { notification, message } from 'antd';
import { history } from 'umi';

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: Response }): Response => {
    // @ts-ignore
    const { response, data } = error;
    if (response && response.status) {
        const errorText: string = data.error;
        const { status } = response;

        notification.error({
            message: `请求错误 ${status}`,
            description: errorText,
            duration: 10,
        });
    } else if (!response) {
        notification.error({
            description: '您的网络发生异常，无法连接服务器',
            message: '网络异常',
        });
    }
    return response;
};

/**
 * 配置request请求时的默认参数
 */
// const authorizotion: string = localStorage.getItem('token')
//   ? `Bearer ${localStorage.getItem('token')}`
//   : '';
// let i = 0;
// console.log(authorizotion);
const request = extend({
    errorHandler, // 默认错误处理
    // credentials: 'include', // 默认请求是否带上cookie
    // responseType: 'json',
    useCache: false,
    getResponse: true,
    parseResponse: true,
    charset: 'utf8',
    mode: 'cors',
    prefix: 'https://api.hapyun.com',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
    },
});

// request.use(async (ctx, next) => {
//   const { req } = ctx;
//   const { options } = req; // url,
//   // 判断是否需要添加前缀，如果是统一添加可通过 prefix、suffix 参数配置
//   // if ( url.indexOf('/api') !== 0 ) {
//   //   ctx.req.url = `/api/v1/${url}`;
//   // }
//   ctx.req.options = {
//     ...options,
//     // foo: 'foo'
//     headers: {
//       ...options.headers,
//       Authorization: localStorage.getItem('token') ? `Bearer ${localStorage.getItem('token')}` : '',
//     },
//   };
//
//   await next();
//   // const { res } = ctx;
//   // const { success = false } = res; // 假设返回结果为 : { success: false, errorCode: 'B001' }
//   // if (!success) {
//   //   // 对异常情况做对应处理
//   // }
// });

request.interceptors.request.use((url: string, options: RequestOptionsInit) => {
    const auth = localStorage.getItem('token');
    if (auth) {
        return {
            url,
            options: {
                ...options,
                interceptors: true,
                headers: {
                    ...options.headers,
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `Bearer ${auth}`,
                },
                params: {
                    ...options.params,
                },
            },
        };
    }

    return { url, options };
});

request.interceptors.response.use(async (response: any) => {
    if (response.status === 401) {
        if (location.href.indexOf('/user/login') >= 0) {
            message.error('登录失败，请输入正确的邮箱或密码！', 5);
        } else {
            history.push('/user/login');
            window.location.reload();
        }
    }
    if (response.url.indexOf('download') >= 0) {
        return response.blob();
    }
    return response;
});

export default request;