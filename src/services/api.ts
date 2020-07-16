import request from '@/utils/request';

export async function work() {
  return request('https://yapi.hapyun.com/mock/248/list/list');
}

export async function remove({ id }: { id: number }) {
  return request(`https://yapi.hapyun.com/mock/248/list/work/${id}`, {
    method: 'DELETE',
  });
}
