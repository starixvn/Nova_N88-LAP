import * as types from './types';
import { setDateRange } from '@jsroot/actions/dateRangeAction';
import { setSelectedCurrency } from '@jsroot/actions/currencyAction';
import { setSelectedBaseCurrency } from '@jsroot/actions/baseCurrencyAction';
import { setUsername } from '@jsroot/actions/usernameAction';
import { setSelectedProduct } from '@jsroot/actions/productAction';
import { changeIsExcludeTest } from '@jsroot/actions/excludeTestAction';

const setNoDraw = isNoDraw => {
    return {
        type: types.SET_NO_DRAW,
        data: isNoDraw
    }
}

const setSelectedDateType = selectedDateType => {
    return {
        type: types.SET_SELECTED_DATE_TYPE,
        data: selectedDateType
    }
}

const setSelectedGroupByOption = groupByOption => {
    return {
        type: types.SET_SELECTED_GROUP_BY_OPTION,
        data: groupByOption
    }
}

export default {
    setSelectedDateType,
    setDateRange,
    setSelectedProduct,
    setUsername,
    setSelectedCurrency,
    setSelectedBaseCurrency,
    changeIsExcludeTest,
    setNoDraw,
    setSelectedGroupByOption
}
