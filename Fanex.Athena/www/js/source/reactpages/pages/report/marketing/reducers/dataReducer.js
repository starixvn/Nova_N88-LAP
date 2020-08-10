import { SET_PERFORMANCE_HIGHLIGHT_DATA, SET_USER_ACTIVITIES_DATA, SET_AVG_REVENUE_DATA } from '../actions/types';
import createReducer from '@jsroot/lib/createReducer.js';

const performanceHighlightData = createReducer(null, {
   [SET_PERFORMANCE_HIGHLIGHT_DATA](state, action){
      return action.data
   }
})

const userActivitiesData = createReducer(null, {
   [SET_USER_ACTIVITIES_DATA](state, action){
      return action.data
   }
})


const avgRevenueData = createReducer(null, {
   [SET_AVG_REVENUE_DATA](state, action){
      return action.data
   }
})

export default {
    performanceHighlightData,
    userActivitiesData,
    avgRevenueData
}