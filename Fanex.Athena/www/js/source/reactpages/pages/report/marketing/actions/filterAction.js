import { SET_VIEW_MODE, SET_REPORT_DATE, SET_COMPARE_DATE, SET_GLOBAL_FILTER } from './types';
import { setSelectedBaseCurrency } from '@jsroot/actions/baseCurrencyAction';

const setViewMode = viewMode => {
    return {
        type: SET_VIEW_MODE,
        data: viewMode
    }
}

const setReportDate = reportDate => {
    return {
        type: SET_REPORT_DATE,
        data: reportDate
    }
}

const setCompareDate = compareDate => {
    return {
        type: SET_COMPARE_DATE,
        data: compareDate
    }
}

const setGlobalFilter = filterData => {
    return {
        type: SET_GLOBAL_FILTER,
        data: filterData
    }
}

export default {
    setSelectedBaseCurrency,
    setViewMode,
    setReportDate,
    setCompareDate,
    setGlobalFilter
}
