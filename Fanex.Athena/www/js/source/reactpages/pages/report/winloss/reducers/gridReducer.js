import { SET_DISPLAYED_COLUMNS, SET_BETLIST_PARAM } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer';
import { gridData } from  '@jsroot/reducers/gridDataReducer';
import { pagingOption } from '@jsroot/reducers/pagingOptionReducer';
import { sortOption } from '@jsroot/reducers/sortOptionReducer';
import { requestParam } from '@jsroot/reducers/requestParamReducer';

const displayedColumns = createReducer({}, {
    [SET_DISPLAYED_COLUMNS](state, action) {
        return action.data
    }
})

const betListParam = createReducer({}, {
    [SET_BETLIST_PARAM](state, action) {
        return action.data
    }
})

export default {
    displayedColumns,
    gridData,
    pagingOption,
    sortOption,
    requestParam,
    betListParam
}