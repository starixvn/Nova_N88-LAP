import * as types from '../actions/types'
import createReducer from '../lib/createReducer.js'

export const selectedCurrency = createReducer({}, {
    [types.SET_SELECTED_CURRENCY](state, action) {
        return action.data
    }
});

export const selectedCurrencyList = createReducer({}, {
    [types.SET_CURRENCY_LIST](state, action) {
        return action.data
    }
});