import { SET_DISPLAYED_COLUMNS, SET_BETLIST_PARAM } from './types';
import { setGridData } from '@jsroot/actions/gridDataAction';
import { setPagingOption } from '@jsroot/actions/pagingOptionAction';
import { setSortOption } from '@jsroot/actions/sortOptionAction';
import { setRequestParam } from '@jsroot/actions/requestParamAction';
import { toggleLoader } from '@jsroot/actions/loaderAction';
import LangHelper from '@jsroot/lib/langHelper';
import QueryService from '../libs/queryService';

export const fetchReportData = (params, afterSuccess) => async dispatch => {
    dispatch(toggleLoader(true));
    const response = await QueryService.getReportData(params);
    if(!response.isSuccess) {
        alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
    } 
    afterSuccess && afterSuccess(response.data);
    dispatch(setGridData(response.data));
    dispatch(toggleLoader(false));
}

export const setBetListParam = (custId, productId, parentName, sabaSystemId) => {
    return {
        type: SET_BETLIST_PARAM,
        data: {
            custId,
            productId,
            username: parentName,
            sabaSystemId
        }
    }
}

export const setDisplayedColumns = columns => {
    return {
        type: SET_DISPLAYED_COLUMNS,
        data: columns
    }
}

export { setPagingOption, setSortOption }

export default {
    setDisplayedColumns,
    setGridData,
    setPagingOption,
    setSortOption,
    setRequestParam,
    fetchReportData,
    setBetListParam
}