import { SET_VIEW_MODE } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';
import { selectedBaseCurrency } from '@jsroot/reducers/baseCurrencyReducer';

const viewMode = createReducer({}, {
   [SET_VIEW_MODE](state, action){
      return action.data
   }
})

export default {
   selectedBaseCurrency,
   viewMode
}