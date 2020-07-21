import Store from '@jsroot/lib/store';
import reducers from '../reducers';
import { displayedColumns, defaultPagingOption, defaultSortOption } from '../constants/gridContants';
import { GroupByOptionIds, TimezoneOptions } from '../constants/filterConsts';
import GroupHelper from '../libs/helpers/groupHelper';

const defaultState = {
   ...window.initialState, 
   ...{
     isLoading: false,
     gridData: {},
     requestParam: {},
     pagingOption: defaultPagingOption,
     sortOption: defaultSortOption,
     selectedGroupByOption: GroupByOptionIds.date,
     selectedTimezone: TimezoneOptions[0].value,
     displayedColumns: GroupHelper.getDislayedColumns(displayedColumns, GroupByOptionIds.date)
   }
}

const store = Store.createStore(reducers, defaultState);

export default store;