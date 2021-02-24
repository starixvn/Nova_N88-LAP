import * as types from '../actions/types'
import createReducer from '../lib/createReducer.js'

export const settingData = createReducer({}, {
    [types.SET_SETTING_DATA](state, action) {
        return action.data;
    }
});