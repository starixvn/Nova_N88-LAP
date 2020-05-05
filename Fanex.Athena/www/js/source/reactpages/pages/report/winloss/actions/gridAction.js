import { SET_DISPLAYED_COLUMNS } from './types';

export const setDisplayedColumns = columns => {
    return {
        type:  SET_DISPLAYED_COLUMNS,
        data: columns
    }
}

export default {
    setDisplayedColumns
}