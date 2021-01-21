import { SET_GLOBAL_FILTER, SET_COLLAPSE_FORM_FILTER, SET_DETAIL_FILTER, SET_SUMMARY_GRID_HEIGHT, SET_DROPDOWN_OPTIONS_DATA } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';
import { dateRange } from '@jsroot/reducers/dateRangeReducer';
import { selectedBaseCurrency } from '@jsroot/reducers/baseCurrencyReducer';
import { selectedBrand } from '@jsroot/reducers/brandReducer';
import { selectedBonusName, selectedBonusType, selectedBonusStatus, bonusCodeList, selectedBonusCode } from '@jsroot/reducers/bonusReducer';
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

export default {
   dateRange,
   selectedBrand,
   selectedBaseCurrency,
   selectedBonusName,
   selectedBonusType,
   selectedBonusStatus,
   selectedClaimStatus,
   selectedBonusCode,
   bonusCodeList,
   globalFilter,
   detailFilter,
   isCollapsedFormFilter,
   summaryGridHeight,
   dropdownOptionsData
}