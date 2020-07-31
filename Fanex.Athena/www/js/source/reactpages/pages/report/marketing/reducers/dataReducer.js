import { SET_PERFORMANCE_HIGHLIGHT_DATA } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';

const performanceHighlightData = createReducer(null, {
   [SET_PERFORMANCE_HIGHLIGHT_DATA](state, action){
      return action.data
   }
})

export default {
    performanceHighlightData
}