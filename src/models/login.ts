import { Effect, Reducer, history } from 'umi';
import { user, loginUser } from '@/services/login';

export interface LoginType {
  username?: {
    name: string;
  };
}

export interface LoginInter {
  namespaced: string;
  state: LoginType;
  effects: {
    login: Effect;
    userMe: Effect;
  };
  reducers: {
    saveUser: Reducer<LoginType>;
  };
}

const Login: LoginInter = {
  namespaced: 'login',

  state: {
    username: undefined,
  },

  effects: {
    *login({ payload }, { call, put }) {
      const { data } = yield call(loginUser, payload);
      console.log(data);
      if (data.data && data.data.token) {
        yield localStorage.setItem('token', data.data.token);

        history.push({
          pathname: '/list',
        });
      }
    },
    *userMe(_, { call, put }) {
      const { data } = yield call(user);

      if (data) {
        yield put({
          type: 'saveUser',
          payload: {
            ...data.data,
          },
        });
      }
    },
  },

  reducers: {
    saveUser(state, { payload }) {
      return {
        username: {
          ...payload.data,
        },
      };
    },
  },
};

export default Login;
