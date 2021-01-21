import * as types from '../actions/types'
import createReducer from '../lib/createReducer.js'

export const selectedClaimStatus = createReducer({}, {
    [types.SET_SELECTED_CLAIM_STATUS](state, action) {
        return action.data
    }
});