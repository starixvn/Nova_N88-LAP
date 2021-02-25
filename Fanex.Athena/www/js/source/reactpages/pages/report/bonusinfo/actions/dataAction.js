import { SET_BONUS_INFO_SUMMARY_DATA, SET_BONUS_INFO_DETAIL_DATA } from './types';
import QueryService from '../libs/services/queryService';
import LangHelper from '@jsroot/lib/langHelper';

const fetchBonusInfoSummaryData = (params, isSort, callBack) => async dispatch => {
    const response = await QueryService.fetchBonusInfoSummaryData(params);
    response.isSuccess && dispatch(setBonusInfoSummaryData(response.data.sortedData)) || alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
    !isSort && dispatch(setBonusInfoDetailData(null));
    callBack && callBack(response.data, response.isSuccess);
}

const setBonusInfoSummaryData = data => {
    return {
        type: SET_BONUS_INFO_SUMMARY_DATA,
        data: data
    }
}

const fetchBonusInfoDetailData = (params, callBack) => async dispatch => {
    const response = await QueryService.fetchBonusInfoDetailData(params);    
    response.isSuccess && dispatch(setBonusInfoDetailData(response.data)) || alert(LangHelper.getSingleResource("ErrorProcessingMsg"));    
    callBack && callBack(response.data, response.isSuccess);
}

const setBonusInfoDetailData = data => {
    return {
        type: SET_BONUS_INFO_DETAIL_DATA,
        data: data
    }
}

export default {
    fetchBonusInfoSummaryData,
    fetchBonusInfoDetailData,
    setBonusInfoDetailData
}
