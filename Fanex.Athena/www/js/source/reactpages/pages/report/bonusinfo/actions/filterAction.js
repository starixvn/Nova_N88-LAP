import { SET_GLOBAL_FILTER, SET_DETAIL_FILTER, SET_SUMMARY_GRID_HEIGHT, SET_DROPDOWN_OPTIONS_DATA, SET_SELECTED_GROUP_BY_OPTION, SET_SELECTED_SUMMARY_DATE, SET_SUMMARY_SORT_INFO } from './types';
import { setSelectedBaseCurrency } from '@jsroot/actions/baseCurrencyAction';
import { setSelectedCurrency } from '@jsroot/actions/currencyAction';
import { setSelectedBrand } from '@jsroot/actions/brandAction';
import { setSelectedBonusName, setSelectedBonusType, setSelectedBonusStatus, setBonusCodeList, setSelectedBonusCode } from '@jsroot/actions/bonusAction';
import { setSelectedClaimStatus } from '@jsroot/actions/claimAction';
import { setDateRange } from '@jsroot/actions/dateRangeAction';

const setGlobalFilter = filterData => async dispatch => {
    dispatch(setGlobalFilterData(filterData));
    dispatch(setSummaryGridHeight(380));
    dispatch(setDetailFilter(null));
}

const setGlobalFilterData = filterData => {
    return {
        type: SET_GLOBAL_FILTER,
        data: filterData
    }
}

const setDetailFilter = detailFilterData => async dispatch => {
    dispatch(setDetailFilterData(detailFilterData));
}

const setDetailFilterData = detailFilterData => {
    return {
        type: SET_DETAIL_FILTER,
        data: detailFilterData
    }
}

const setSummaryGridHeight = data => {
    return {
        type: SET_SUMMARY_GRID_HEIGHT,
        data: data
    }
}

const setDropdownOptionsData = data => {
    return {
        type: SET_DROPDOWN_OPTIONS_DATA,
        data: data
    }
}

const setSelectedGroupByOption = groupByOption => {
    return {
        type: SET_SELECTED_GROUP_BY_OPTION,
        data: groupByOption
    }
}

const setSelectedSummaryDate = data => {
    return {
        type: SET_SELECTED_SUMMARY_DATE,
        data: data
    }
}

const setSummarySortInfo = data => {
    return {
        type: SET_SUMMARY_SORT_INFO,
        data: data
    }
}

export default {
    setDateRange,
    setSelectedBaseCurrency,
    setSelectedCurrency,
    setSelectedBrand,
    setBonusCodeList,
    setSelectedBonusName,
    setSelectedBonusType,
    setSelectedBonusStatus,
    setSelectedClaimStatus,
    setSelectedBonusCode,
    setSelectedSummaryDate,
    setSummarySortInfo,
    setGlobalFilter,
    setDetailFilter,
    setSummaryGridHeight,
    setDropdownOptionsData,
    setSelectedGroupByOption
}
