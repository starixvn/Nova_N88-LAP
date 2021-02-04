import Store from '@jsroot/lib/store';
import reducers from '../reducers';
import { GroupByOptionIds } from '../constants/filterConsts';

const defaultState = {
   ...window.initialState,
   ...{
      dropdownOptionsData: {
         bonusTypeList: [],
         bonusStatusList: [],
         claimStatusList: []
      }
   },
   ...{
      selectedGroupByOption: GroupByOptionIds.bonusCode,
   }
}

const store = Store.createStore(reducers, defaultState);

export default store;