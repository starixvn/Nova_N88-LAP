import { SET_DISPLAYED_COLUMNS } from './types';
import { setGridData } from '@jsroot/actions/gridDataAction';
import { setPagingOption } from '@jsroot/actions/pagingOptionAction';
import { setRequestParam } from '@jsroot/actions/requestParamAction';
import { toggleLoader } from '@jsroot/actions/loaderAction';
import QueryService from '../libs/queryService';

const gridData = () => {
    const data = []
    for(let i = 0; i < 1000; i++) {
       const item = {
         ...{ group: 'adsa' + i, turnover: Math.random() * 90000, ggr: Math.random() * 90000, betCount: Math.random() * 90000, betAmount: Math.random() * 90000, uniquePlayers: Math.floor(Math.random() * 1000), margin: Math.random() * 50 },
         ...{ drillDownData: 
          [
            { parent: i, group: 'adsa' + i + ' - child' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 },
            {  parent: i, group: 'adsa' + i + ' - child' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 },
            {  parent: i, group: 'adsa' + i + ' - child' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 }
        ]}
       }
        data.push(item)
    } 
    return {
      dataList: data,
      dataTotal: {
         turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 
      },
      pageSize: 500,
      pageIndex: 1,
      totalItems: data.length
    }
  } 


export const fetchReportData = (params, afterSuccess) => async dispatch => {
    dispatch(toggleLoader(true));
    const response = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(gridData()), 1000);
    });
    afterSuccess && afterSuccess(response);
    dispatch(setGridData(response));
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