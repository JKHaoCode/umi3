import { Effect, Reducer } from 'umi';
import { work, remove } from '@/services/api';
import { message } from 'antd';

export interface Work {
  id?: number;
  content?: string;
  idDone?: boolean;
  dataTime?: string;
}

export interface WorkState {
  WorlkList: {
    list: Work[];
    pagination: {
      current: number;
      pageSize: number;
      total: number;
    };
  };
}

export interface SearchType {
  page?: number;
  page_size?: number;
  total?: number;
}

export interface WorkType {
  namespaced: string;
  state: WorkState;
  effects: {
    fetch: Effect;
    deleteWork: Effect;
  };
  reducers: {
    saveWork: Reducer<WorkState>;
  };
}

const workModel: WorkType = {
  namespaced: 'work',
  state: {
    WorlkList: {
      list: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
    },
  },
  effects: {
    *fetch({ payload }, { call, put }: { call: any; put: any }) {
      // console.log(payload)
      const { data } = yield call(work, payload);
      yield put({
        type: 'saveWork',
        payload: {
          ...data,
          ...payload,
        },
      });
    },
    *deleteWork({ payload, callback }, { call }: { call: any }) {
      const { data } = yield call(remove, payload);
      if (data.success) {
        callback && callback();
        message.success('删除成功');
      } else {
        message.error('删除失败');
      }
    },
  },
  reducers: {
    saveWork(state, { payload }) {
      return {
        ...state,
        WorlkList: {
          list: payload.list,
          pagination: {
            current: payload.page || 1,
            pageSize: payload.page_size || 10,
            total: payload.total || 0,
          },
        },
      };
    },
  },
};

export default workModel;
