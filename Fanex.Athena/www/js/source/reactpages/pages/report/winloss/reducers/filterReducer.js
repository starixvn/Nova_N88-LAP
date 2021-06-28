import { SET_SELECTED_DATE_TYPE, SET_NO_DRAW, SET_SELECTED_GROUP_BY_OPTION,
     DRILLDOWN_IN_ORIGINAL_CURRENCY, USERNAME_FILTER_OPTION, SET_SELECTED_TIMEZONE, SET_INCLUDE_FREE_SPINS } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';
import { dateRange } from '@jsroot/reducers/dateRangeReducer';
import { selectedCurrency } from '@jsroot/reducers/currencyReducer';
import { selectedBaseCurrency } from '@jsroot/reducers/baseCurrencyReducer';
import { username } from '@jsroot/reducers/usernameReducer';
import { selectedProduct } from '@jsroot/reducers/productReducer';
import { isExcludeTest } from '@jsroot/reducers/excludeTestReducer';
import { selectedBrand } from '@jsroot/reducers/brandReducer';

const selectedDateType = createReducer({}, {
    [SET_SELECTED_DATE_TYPE](state, action) {
        return action.data
    }
});

const noDraw = createReducer({}, {
    [SET_NO_DRAW](state, action) {
        return action.data
    }
});

const includeFreeSpins = createReducer(true, {
    [SET_INCLUDE_FREE_SPINS](state, action) {
        return action.data
    }
});

const drilldownInOriginalCurrency = createReducer({}, {
    [DRILLDOWN_IN_ORIGINAL_CURRENCY](state, action) {
        return action.data
    }
});

const userNameFilterOption = createReducer({}, {
    [USERNAME_FILTER_OPTION](state, action) {
        return action.data
    }
});

const selectedGroupByOption = createReducer({}, {
    [SET_SELECTED_GROUP_BY_OPTION](state, action) {
        return action.data
    }
});

const selectedTimezone = createReducer({}, {
    [SET_SELECTED_TIMEZONE](state, action) {
        return action.data
    }
});

export default {
    selectedDateType,
    dateRange,
    selectedProduct,
    selectedBrand,
    userNameFilterOption,
    username,
    selectedCurrency,
    selectedBaseCurrency,
    noDraw,
    drilldownInOriginalCurrency,
    isExcludeTest,
    selectedGroupByOption,
    selectedTimezone,
    includeFreeSpins
}