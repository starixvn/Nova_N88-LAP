import { SET_SORT_OPTION } from '../actions/types'
import createReducer from '../lib/createReducer.js'

export const sortOption = createReducer({}, {
    [SET_SORT_OPTION](prevState, action) {
        return { ...prevState, ...action.data }
    }
});