import Store from '@jsroot/lib/store';
import reducers from '../reducers';

const defaultState = {
   ...window.initialState, 
   ...{
   }
}

const store = Store.createStore(reducers, defaultState);

export default store;