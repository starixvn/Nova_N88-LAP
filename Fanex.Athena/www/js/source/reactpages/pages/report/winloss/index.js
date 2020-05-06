import React from 'react';
import { render } from 'react-dom';
import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux';
import Store from '@jsroot/lib/store';
import reducers from './reducers';
import { displayedColumns } from './constants/gridContants';

const gridData = () => {
  const data = []
  for(let i = 0; i < 100; i++) {
     const item = {
       ...{ group: 'adsa' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 },
       ...{ drillDownData: 
        [
          { group: 'adsa' + i + ' - child' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 },
          { group: 'adsa' + i + ' - child' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 },
          { group: 'adsa' + i + ' - child' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 }
      ]}
     }
      data.push(item)
  }
  return data;
} 
const defaultState = {
   ...window.initialState, 
   ...{
     selectedGroupByOption: 1,
     displayedColumns: displayedColumns,
     gridData: gridData()
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