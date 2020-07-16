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
      if (data && data.token) {
        yield localStorage.setItem('token', data.token);
        console.log(11111111);
        yield history.push({
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
            ...data,
          },
        });
      }
    },
  },

  reducers: {
    saveUser(state, { payload }) {
      console.log(payload);
      return {
        ...state,
        username: {
          ...payload,
        },
      };
    },
  },
};

export default Login;
