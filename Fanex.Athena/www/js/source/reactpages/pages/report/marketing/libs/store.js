import Store from '@jsroot/lib/store';
import reducers from '../reducers';
import FilterHelper from '../libs/helpers/filterHelper';

const defaultState = {
   ...window.initialState, 
   ...{
      reportDate: FilterHelper.DefaultReportDate,
      compareDate: FilterHelper.DefaultCompareDate
   }
}

const store = Store.createStore(reducers, defaultState);

export default store;