import { SET_NO_DRAW, SET_SELECTED_DATE_TYPE, SET_SELECTED_GROUP_BY_OPTION, DRILLDOWN_IN_ORIGINAL_CURRENCY, 
    USERNAME_FILTER_OPTION, SET_SELECTED_TIMEZONE, SET_INCLUDE_FREE_SPINS } from './types';
import { setDateRange } from '@jsroot/actions/dateRangeAction';
import { setSelectedCurrency } from '@jsroot/actions/currencyAction';
import { setSelectedBaseCurrency } from '@jsroot/actions/baseCurrencyAction';
import { setUsername } from '@jsroot/actions/usernameAction';
import { setSelectedProduct } from '@jsroot/actions/productAction';
import { changeIsExcludeTest } from '@jsroot/actions/excludeTestAction';
import { setSelectedBrand } from '@jsroot/actions/brandAction';
import { setSettingData } from '@jsroot/actions/settingDataAction';
import QueryService from '../libs/queryService';
import LangHelper from '@jsroot/lib/langHelper'

const setNoDraw = isNoDraw => {
    return {
        type: SET_NO_DRAW,
        data: isNoDraw
    }
}

const setIncludeFreeSpins = isIncludedFreeSpin => {
    return {
        type: SET_INCLUDE_FREE_SPINS,
        data: isIncludedFreeSpin
    }
}

const setDrilldownInOriginalCurrency = isOriginalCurrency => {
    return {
        type: DRILLDOWN_IN_ORIGINAL_CURRENCY,
        data: isOriginalCurrency
    }
}

const setUserNameFilterOption = userNameOption => {
    return {
        type: USERNAME_FILTER_OPTION,
        data: userNameOption
    }
}

const setSelectedDateType = selectedDateType => {
    return {
        type: SET_SELECTED_DATE_TYPE,
        data: selectedDateType
    }
}

const setSelectedGroupByOption = groupByOption => {
    return {
        type: SET_SELECTED_GROUP_BY_OPTION,
        data: groupByOption
    }
}

const setSelectedTimezone = timezone => {
    return {
        type: SET_SELECTED_TIMEZONE,
        data: timezone
    }
}

export const fetchSettingData = () => async dispatch => {
    const response = await QueryService.getSettingData();
    if(!response.isSuccess) {
        alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
    } 
    dispatch(setSettingData(response.data));
}

export default {
    fetchSettingData,
    setSelectedDateType,
    setDateRange,
    setSelectedBrand,
    setSelectedProduct,
    setUserNameFilterOption,
    setUsername,
    setSelectedCurrency,
    setSelectedBaseCurrency,
    changeIsExcludeTest,
    setNoDraw,
    setDrilldownInOriginalCurrency,
    setSelectedGroupByOption,
    setSelectedTimezone,
    setIncludeFreeSpins
}
