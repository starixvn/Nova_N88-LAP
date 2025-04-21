import * as types from './types';

export const setReportFilter = (filter) => ({
    type: types.SET_REPORT_FILTER,
    filter
});

export default {
    setReportFilter
}
