import Store from '@jsroot/lib/store';
import reducers from '../reducers';
import { displayedColumns, defaultPagingOption, defaultSortOption } from '../constants/gridContants';
import { GroupByOptionAllowByPermission, DefaultTimezone } from '../constants/filterConsts';
import GroupHelper from '../libs/helpers/groupHelper';

const optionDefault = (!GroupByOptionAllowByPermission || GroupByOptionAllowByPermission.length == 0) ? null : GroupByOptionAllowByPermission[0].value

const defaultState = {
   ...window.initialState, 
   ...{
     isLoading: false,
     gridData: {},
     requestParam: {},
     pagingOption: defaultPagingOption,
     sortOption: defaultSortOption,
     selectedGroupByOption: optionDefault,
     selectedTimezone: DefaultTimezone,
     settingData: { timezones: [] },
     displayedColumns: GroupHelper.getDislayedColumns(displayedColumns, optionDefault)
   }
}

const store = Store.createStore(reducers, defaultState);

export default store;