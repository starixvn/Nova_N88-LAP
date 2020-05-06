import { SET_DISPLAYED_COLUMNS } from './types';
import { setGridData } from '@jsroot/actions/gridDataAction';

export const setDisplayedColumns = columns => {
    return {
        type:  SET_DISPLAYED_COLUMNS,
        data: columns
    }
}

export default {
    setDisplayedColumns,
    setGridData
}