import { SET_DISPLAYED_COLUMNS } from './types';
import { setGridData } from '@jsroot/actions/gridDataAction';
import { setPagingOption } from '@jsroot/actions/pagingOptionAction';
import { setRequestParam } from '@jsroot/actions/requestParamAction';
import { toggleLoader } from '@jsroot/actions/loaderAction';
import LangHelper from '@jsroot/lib/langHelper';
import QueryService from '../libs/queryService';

const gridData = () => {
    const data = []
    for(let i = 0; i < 1000; i++) {
       const item = {
         ...{ hasParent: false, group: 'adsa' + i, turnover: Math.random() * 90000 - 40000, ggr: Math.random() * 90000 - 40000, betCount: Math.floor(Math.random() * 1000), avgBetAmount: Math.random() * 90000 - 40000, uniquePlayers: Math.floor(Math.random() * 1000), margin: Math.random() * 50 - 20 },
         ...{ drillDownData: 
          [
            { hasParent: true, group: 'childA' , turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, avgBetAmount: 123123, uniquePlayers: 123123, margin: 35 },
            {  hasParent: true, group: 'childB', turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, avgBetAmount: 123123, uniquePlayers: 123123, margin: 35 },
            {  hasParent: true, group: 'childC', turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, avgBetAmount: 123123, uniquePlayers: 123123, margin: 35 }
        ]}
       }
        data.push(item)
    } 
    return {
      dataList: data,
      totalData: {
         turnover: 12312321.1232, ggr: -12312321.12412412, betCount: 123123, avgBetAmount: 123123, uniquePlayers: 123123, margin: 35 
      },
      pageSize: 0,
      pageIndex: 0,
      totalRows: data.length
    }
  } 


export const fetchReportData = (params, afterSuccess) => async dispatch => {
    dispatch(toggleLoader(true));
    // const response = await new Promise((resolve, reject) => {
    //     setTimeout(() => resolve(gridData()), 1000);
    // });
    const response = await QueryService.getReportData(params);
    if(!response.isSuccess) {
        alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
    } 
    afterSuccess && afterSuccess(response.data);
    dispatch(setGridData(response.data));
    dispatch(toggleLoader(false));
}

export const setDisplayedColumns = columns => {
    return {
        type: SET_DISPLAYED_COLUMNS,
        data: columns
    }
}

export { setPagingOption }

export default {
    setDisplayedColumns,
    setGridData,
    setPagingOption,
    setRequestParam,
    fetchReportData
}