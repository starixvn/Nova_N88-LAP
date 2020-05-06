import React from 'react';
import { render } from 'react-dom';
import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux';
import Store from '@jsroot/lib/store';
import reducers from './reducers';
import { displayedColumns, defaultPagingOption } from './constants/gridContants';

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

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

render(<App />, document.getElementById("app-container"));