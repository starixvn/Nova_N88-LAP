import * as types from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';

export const reportFilter = createReducer({}, {
    [types.SET_REPORT_FILTER](state, action) {
        return {
            ...state,
            ...action.filter
        };
    }
});