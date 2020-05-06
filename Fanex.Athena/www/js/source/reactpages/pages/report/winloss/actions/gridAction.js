import { SET_DISPLAYED_COLUMNS } from './types';
import { setGridData } from '@jsroot/actions/gridDataAction';
import { setPagingOption } from '@jsroot/actions/pagingOptionAction';
import { setRequestParam } from '@jsroot/actions/requestParamAction';
import { toggleLoader } from '@jsroot/actions/loaderAction';

const gridData = () => {
    const data = []
    for(let i = 0; i < 500; i++) {
       const item = {
         ...{ group: 'adsa' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 },
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
      }
    }
  } 


export const fetchReportData = (params, afterSuccess) => async dispatch => {
    dispatch(toggleLoader(true));
    const response = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(gridData()), 1000);
    });
    dispatch(setGridData(response));
    dispatch(toggleLoader(false));
}

export const setDisplayedColumns = columns => {
    return {
        type:  SET_DISPLAYED_COLUMNS,
        data: columns
    }
}

export default {
    setDisplayedColumns,
    setGridData,
    setPagingOption,
    setRequestParam,
    fetchReportData
}