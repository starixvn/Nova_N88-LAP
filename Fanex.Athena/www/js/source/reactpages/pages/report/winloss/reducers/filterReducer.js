import * as types from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';
import { dateRange } from '@jsroot/reducers/dateRangeReducer';
import { selectedCurrency } from '@jsroot/reducers/currencyReducer';
import { selectedBaseCurrency } from '@jsroot/reducers/baseCurrencyReducer';
import { username } from '@jsroot/reducers/usernameReducer';
import { selectedProduct } from '@jsroot/reducers/productReducer';
import { isExcludeTest } from '@jsroot/reducers/excludeTestReducer';

const selectedDateType = createReducer({}, {
    [types.SET_SELECTED_DATE_TYPE](state, action) {
        return action.data
    }
});

const noDraw = createReducer({}, {
    [types.SET_NO_DRAW](state, action) {
        return action.data
    }
});

const selectedGroupByOption = createReducer({}, {
    [types.SET_SELECTED_GROUP_BY_OPTION](state, action) {
        return action.data
    }
});

export default {
    selectedDateType,
    dateRange,
    selectedProduct,
    username,
    selectedCurrency,
    selectedBaseCurrency,
    noDraw,
    isExcludeTest,
    selectedGroupByOption
}