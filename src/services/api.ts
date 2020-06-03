import request from '@/utils/request';

export async function work() {
    return request('https://yapi.hapyun.com/mock/248/list/list');
}