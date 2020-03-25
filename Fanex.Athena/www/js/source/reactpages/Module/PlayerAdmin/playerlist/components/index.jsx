import React from 'react';
import { render } from 'react-dom';
import AppContainer from './AppContainer.jsx';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import Store from '@jsroot/lib/store';
import { buildDefaultColumnList } from '../lib/helpers/gridColumnBuilder';

const hasBaPermission = window._pConfig.hasBaPermission;
const hasOddsGroupPermission = window._pConfig.hasOddsGroupPermission;
const hasSpecialLevelPermission = window._pConfig.hasSpecialLevelPermission;
const isAllowedCustomerComm = window._pConfig.isAllowedCustomerComm === 1;
const isAllowedStatement = window._pConfig.isAllowedStatement === 1;

const displayedColumnList = buildDefaultColumnList(hasBaPermission, hasOddsGroupPermission, hasSpecialLevelPermission);
const siteSetting = {
  isAllowedCustomerComm: false,
  isAllowedBA: false
}

const defaultState = { ...window.initialState, displayedColumnList, hasBaPermission, siteSetting, hasOddsGroupPermission, hasSpecialLevelPermission, isAllowedCustomerComm, isAllowedStatement };
const store = Store.createStore(reducer, defaultState);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

render(<App />, document.getElementById("app-container"));