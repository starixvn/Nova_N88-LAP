import Store from '@jsroot/lib/store';
import reducers from '../reducers';
import FilterHelper from '../libs/helpers/filterHelper';
import { ViewModeOptionValues } from '../constants/filterConst';

const defaultState = {
   ...window.initialState, 
   ...{
      isCollapsedFormFilter: false,
      allowedCompare: false,
      viewMode: ViewModeOptionValues.Daily,
      compareDate: FilterHelper.GetDefaultCompareDate(window.initialState.reportDate)
   }
}

const store = Store.createStore(reducers, defaultState);

export default store;