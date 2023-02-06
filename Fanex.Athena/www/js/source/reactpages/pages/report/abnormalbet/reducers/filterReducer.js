import * as types from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';
import { selectedBrand } from '@jsroot/reducers/brandReducer'

const reportFilter = createReducer(null, {
   [types.SET_REPORT_FILTER](state, action){
      return action.data
   }
})

export default {
   selectedBrand,
   reportFilter
}