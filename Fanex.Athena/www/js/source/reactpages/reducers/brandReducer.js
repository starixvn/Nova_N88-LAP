import * as types from '../actions/types'
import createReducer from '../lib/createReducer.js'

export const selectedBrand = createReducer({}, {
    [types.SET_SELECTED_BRAND](state, action) {
        return action.data;
    }
});