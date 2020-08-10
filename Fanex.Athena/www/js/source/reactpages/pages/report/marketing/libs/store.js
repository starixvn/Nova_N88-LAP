import Store from '@jsroot/lib/store';
import reducers from '../reducers';
import FilterHelper from '../libs/helpers/filterHelper';
import { ViewModeOptionValues } from '../constants/filterConst';

const defaultState = {
   ...window.initialState, 
   ...{
      isCollapsedFormFilter: false,
      viewMode: ViewModeOptionValues.Daily,
      reportDate: FilterHelper.DefaultReportDate,
      compareDate: FilterHelper.DefaultCompareDate
   }
}

const store = Store.createStore(reducers, defaultState);

export default store;