import { SET_PERFORMANCE_HIGHLIGHT_DATA, SET_USER_ACTIVITIES_DATA, SET_AVG_REVENUE_DATA } from './types';
import QueryService from '../libs/services/queryService';

const fetchPeformanceHighlightData = (params, callBack) => async dispatch => {
    const response = await QueryService.fetchPerformanceHighlightData(params);
    dispatch(setPeformanceHighlightData(response.data));
    callBack && callBack();
}

const fetchUserActivitiesData = (params, callBack) => async dispatch => {
    const response = await QueryService.fetchUserActivitiesData(params);
    dispatch(setUserActivitiesData(response.data));
    callBack && callBack();
}

const fetchAvgRevenueData = (params, callBack) => async dispatch => {
    const response = await QueryService.fetchAvgRevenueData(params);
    dispatch(setAvgRevenueData(response.data));
    callBack && callBack(response.data);
}

const setPeformanceHighlightData = data => {
    return {
        type: SET_PERFORMANCE_HIGHLIGHT_DATA,
        data: data
    }
}

const setUserActivitiesData = data => {
    return {
        type: SET_USER_ACTIVITIES_DATA,
        data: data
    }
}

const setAvgRevenueData = data => {
    return {
        type: SET_AVG_REVENUE_DATA,
        data: data
    }
}

export default {
    fetchPeformanceHighlightData,
    fetchUserActivitiesData,
    fetchAvgRevenueData
}
