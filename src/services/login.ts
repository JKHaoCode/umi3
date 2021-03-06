import request from '@/utils/request';

export interface User {
  username: string;
  password: string;
}

export async function loginUser(params: User) {
  return request(`/auth`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function user() {
  return request(`/api/v1/auth/user`);
}
