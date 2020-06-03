import { Effect, Reducer } from 'umi';
import { work } from '@/services/api';

export interface Work {
    id?: number;
    content?: string;
    idDone?: boolean;
    dataTime?: string;
}

export interface WorkState {
    WorlkList: {
        list: Work[],
        pagination: {
            current: number;
            pageSize: number;
            total: number;
        }
    },
}

export interface SearchType {
    page?: number;
    page_size?: number;
    total?: number;
}

export interface WorkType {
    namespace: string;
    state: WorkState;
    effects: {
        fetch: Effect,
    },
    reducers: {
        saveWork: Reducer<WorkState>;
    }
}

export default {
    namespaced: 'work',
    state: {
        WorlkList: {
            list: [],
            pagination: {
                current: 1,
                pageSize: 10,
                total: 0,
            }
        }
    },
    effects: {
        *fetch({ payload }: { payload: SearchType }, { call, put }: { call: any, put: any }) {
            console.log(payload)
            const { data } = yield call(work, payload);
            yield put({
                type: 'saveWork',
                payload: {
                    ...data,
                    ...payload,
                }
            });
        }
    },
    reducers: {
        saveWork(state: WorkState, { payload }: { payload: { list: Work[], page?: number; page_size?: number, total?: number } }) {
            return {
                ...state,
                WorlkList: {
                    list: payload.list,
                    pagination: {
                        current: payload.page || 1,
                        pageSize: payload.page_size || 10,
                        total: payload.total || 0,
                    }
                },
            }
        }
    }

};