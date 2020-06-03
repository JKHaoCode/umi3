import { Effect, Reducer } from 'umi';
import { work } from '@/services/api';

export interface Work {
    id?: number;
    content?: string;
    idDone?: boolean;
    dataTime?: string;
}

export interface WorkState {
    WorlkList: Work[],
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
        WorlkList: []
    },
    effects: {
        *fetch(_: any, { call, put }: { call: any, put: any }) {
            const { data } = yield call(work);
            yield put({
                type: 'saveWork',
                payload: {
                    ...data,
                }
            });
        }
    },
    reducers: {
        saveWork(state: WorkState, { payload }: { payload: { list: WorkType[] } }) {
            return {
                ...state,
                WorlkList: payload.list,
            }
        }
    }

};