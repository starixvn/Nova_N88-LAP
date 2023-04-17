import { SET_GLOBAL_FILTER, SET_COLLAPSE_FORM_FILTER, SET_DETAIL_FILTER, SET_SUMMARY_GRID_HEIGHT, SET_DROPDOWN_OPTIONS_DATA, SET_SELECTED_GROUP_BY_OPTION, SET_SELECTED_SUMMARY_DATE_RANGE, SET_SUMMARY_SORT_INFO} from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';
import { dateRange } from '@jsroot/reducers/dateRangeReducer';
import { selectedBaseCurrency } from '@jsroot/reducers/baseCurrencyReducer';
import { selectedCurrency } from '@jsroot/reducers/currencyReducer';
import { selectedBrand } from '@jsroot/reducers/brandReducer';
import { selectedBonusName, selectedBonusType, selectedBonusStatus, bonusCodeList, bonusCodeDetailList, selectedBonusCode } from '@jsroot/reducers/bonusReducer';
import { selectedClaimStatus } from '@jsroot/reducers/claimReducer';

const globalFilter = createReducer(null, {
   [SET_GLOBAL_FILTER](state, action){
      return action.data
   }
})

const detailFilter = createReducer(null, {
   [SET_DETAIL_FILTER](state, action){
      return action.data
   }
})

const isCollapsedFormFilter =  createReducer(null, {
   [SET_COLLAPSE_FORM_FILTER](state, action){
      return action.data
   }
})

const summaryGridHeight = createReducer(null, {
   [SET_SUMMARY_GRID_HEIGHT](state, action){
      return action.data
   }
})

const dropdownOptionsData = createReducer(null, {
   [SET_DROPDOWN_OPTIONS_DATA](state, action){
      return action.data
   }
})

const selectedGroupByOption = createReducer({}, {
   [SET_SELECTED_GROUP_BY_OPTION](state, action) {
       return action.data
   }
});

const selectedSummaryDateRange = createReducer(null, {
   [SET_SELECTED_SUMMARY_DATE_RANGE](state, action) {
       return action.data
   }
});

const selectedSummarySortInfo = createReducer(null, {
   [SET_SUMMARY_SORT_INFO](state, action) {
       return action.data
   }
});

export default {
   dateRange,
   selectedBrand,
   selectedBaseCurrency,
   selectedCurrency,
   selectedBonusName,
   selectedBonusType,
   selectedBonusStatus,
   selectedClaimStatus,
   selectedBonusCode,
   selectedGroupByOption,
   selectedSummaryDateRange,
   selectedSummarySortInfo,
   bonusCodeList,
   bonusCodeDetailList,
   globalFilter,
   detailFilter,
   isCollapsedFormFilter,
   summaryGridHeight,
   dropdownOptionsData
}