import { SET_VIEW_MODE, SET_REPORT_DATE, SET_COMPARE_DATE, SET_GLOBAL_FILTER, SET_COLLAPSE_FORM_FILTER } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';
import { selectedBaseCurrency } from '@jsroot/reducers/baseCurrencyReducer';
import { selectedBrand } from '@jsroot/reducers/brandReducer';

const viewMode = createReducer({}, {
   [SET_VIEW_MODE](state, action){
      return action.data
   }
})

const reportDate = createReducer(null, {
   [SET_REPORT_DATE](state, action){
      return action.data
   }
})

const compareDate = createReducer(null, {
   [SET_COMPARE_DATE](state, action){
      return action.data
   }
})

const globalFilter = createReducer(null, {
   [SET_GLOBAL_FILTER](state, action){
      return action.data
   }
})

const isCollapsedFormFilter =  createReducer(null, {
   [SET_COLLAPSE_FORM_FILTER](state, action){
      return action.data
   }
})

export default {
   selectedBrand,
   selectedBaseCurrency,
   viewMode,
   reportDate,
   compareDate,
   globalFilter,
   isCollapsedFormFilter
}