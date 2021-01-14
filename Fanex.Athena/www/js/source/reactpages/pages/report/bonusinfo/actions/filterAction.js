import { SET_GLOBAL_FILTER, SET_COLLAPSE_FORM_FILTER, SET_DETAIL_FILTER, SET_SUMMARY_GRID_HEIGHT, SET_DROPDOWN_OPTIONS_DATA } from './types';
import { setSelectedBaseCurrency } from '@jsroot/actions/baseCurrencyAction';
import { setSelectedBrand } from '@jsroot/actions/brandAction';
import { setSelectedBonusName, setSelectedBonusType, setSelectedBonusStatus, setBonusCodeList, setSelectedBonusCode } from '@jsroot/actions/bonusAction';
import { setSelectedClaimStatus } from '@jsroot/actions/claimAction';
import { setDateRange } from '@jsroot/actions/dateRangeAction';

const setGlobalFilter = filterData => async dispatch => {
    dispatch(setGlobalFilterData(filterData));
    dispatch(setSummaryGridHeight(500));
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

const setCollapseFormFilter = isCollapsed => {
    return {
        type: SET_COLLAPSE_FORM_FILTER,
        data: isCollapsed
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

export default {
    setDateRange,
    setSelectedBaseCurrency,
    setSelectedBrand,
    setBonusCodeList,
    setSelectedBonusName,
    setSelectedBonusType,
    setSelectedBonusStatus,
    setSelectedClaimStatus,
    setSelectedBonusCode,
    setGlobalFilter,
    setDetailFilter,
    setCollapseFormFilter,
    setSummaryGridHeight,
    setDropdownOptionsData
}
