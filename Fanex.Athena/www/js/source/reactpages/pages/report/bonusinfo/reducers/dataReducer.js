import { SET_BONUS_INFO_SUMMARY_DATA, SET_BONUS_INFO_DETAIL_DATA } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';

const bonusInfoSummaryData = createReducer(null, {
   [SET_BONUS_INFO_SUMMARY_DATA](state, action){
      return action.data
   }
})

const bonusInfoDetailData = createReducer(null, {
   [SET_BONUS_INFO_DETAIL_DATA](state, action){
      return action.data
   }
})

export default {
    bonusInfoSummaryData,
    bonusInfoDetailData
}