import { SET_DISPLAYED_COLUMNS } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer';
import { gridData } from  '@jsroot/reducers/gridDataReducer';

const displayedColumns = createReducer({}, {
    [SET_DISPLAYED_COLUMNS](state, action) {
        return action.data
    }
});


export default {
    displayedColumns,
    gridData
}