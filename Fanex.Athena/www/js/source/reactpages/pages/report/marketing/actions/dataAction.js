import { SET_PERFORMANCE_HIGHLIGHT_DATA } from './types';
import QueryService from '../libs/services/queryService';
const fetchPeformanceHighlightData = (params, callBack) => async dispatch => {
    const response = await QueryService.fetchPerformanceHighlightData(params);
    dispatch(setPeformanceHighlightData(response.data));
    callBack && callBack();
}

const setPeformanceHighlightData = data => {
    return {
        type: SET_PERFORMANCE_HIGHLIGHT_DATA,
        data: data
    }
}

export default {
    fetchPeformanceHighlightData,
    setPeformanceHighlightData
}
