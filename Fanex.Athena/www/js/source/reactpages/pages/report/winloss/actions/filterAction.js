import { SET_NO_DRAW, SET_SELECTED_DATE_TYPE, SET_SELECTED_GROUP_BY_OPTION, DRILLDOWN_IN_ORIGINAL_CURRENCY, USERNAME_FILTER_OPTION, SET_SELECTED_TIMEZONE } from './types';
import { setDateRange } from '@jsroot/actions/dateRangeAction';
import { setSelectedCurrency } from '@jsroot/actions/currencyAction';
import { setSelectedBaseCurrency } from '@jsroot/actions/baseCurrencyAction';
import { setUsername } from '@jsroot/actions/usernameAction';
import { setSelectedProduct } from '@jsroot/actions/productAction';
import { changeIsExcludeTest } from '@jsroot/actions/excludeTestAction';

const setNoDraw = isNoDraw => {
    return {
        type: SET_NO_DRAW,
        data: isNoDraw
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

export default {
    setSelectedDateType,
    setDateRange,
    setSelectedProduct,
    setUserNameFilterOption,
    setUsername,
    setSelectedCurrency,
    setSelectedBaseCurrency,
    changeIsExcludeTest,
    setNoDraw,
    setDrilldownInOriginalCurrency,
    setSelectedGroupByOption,
    setSelectedTimezone
}
