import Store from '@jsroot/lib/store';
import reducers from '../reducers';
import { displayedColumns, defaultPagingOption } from '../constants/gridContants';

const defaultState = {
   ...window.initialState, 
   ...{
     isLoading: false,
     gridData: {},
     requestParam: {},
     pagingOption: defaultPagingOption,
     selectedGroupByOption: 1,
     displayedColumns: displayedColumns,
   }
}

const store = Store.createStore(reducers, defaultState);

export default store;