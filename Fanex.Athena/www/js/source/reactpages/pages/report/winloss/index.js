import React from 'react';
import { render } from 'react-dom';
import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux';
import store from './libs/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

render(<App />, document.getElementById("app-container"));