import * as types from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';
import { selectedBrand } from '@jsroot/reducers/brandReducer'

const reportFilter = createReducer(null, {
   [types.SET_REPORT_FILTER](state, action){
      return action.data
   }
})

const detailParams = createReducer(null, {
   [types.SET_DETAIL_PARAMS](state, action){
      return action.data
   }
})

export default {
   reportFilter,
   detailParams,
   selectedBrand
}