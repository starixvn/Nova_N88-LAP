import * as types from '../actions/types'
import createReducer from '../lib/createReducer.js'

export const selectedBonusStatus = createReducer({}, {
    [types.SET_SELECTED_BONUS_STATUS](state, action) {
        return action.data
    }
});

export const selectedBonusType = createReducer({}, {
    [types.SET_SELECTED_BONUS_TYPE](state, action) {
        return action.data
    }
});

export const selectedBonusName = createReducer({}, {
    [types.SET_BONUS_NAME](state, action) {
        return action.data
    }
});


export const bonusCodeList = createReducer({}, {
    [types.SET_BONUS_CODE_LIST](state, action) {
        return action.data
    }
});

export const selectedBonusCode = createReducer({}, {
    [types.SET_SELECTED_BONUS_CODE](state, action) {
        return action.data
    }
});