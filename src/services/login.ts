import request from '@/utils/request';

export interface User {
  username: string;
  password: string;
}

export async function loginUser(params: User) {
  return request(`http://127.0.0.1:8000/auth`, {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function user() {
  return request(`http://127.0.0.1:8000/api/v1/auth/user`);
}
