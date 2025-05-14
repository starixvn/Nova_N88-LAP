import React from 'react'
import { render } from 'react-dom';
import AppContainer from './AppContainer.jsx'
import { Provider } from 'react-redux'
import reducer from '../reducers/index.js'
import Store from '@jsroot/lib/store'
import { DefaultPagingOption } from '../lib/constants'

const defaultState = Object.assign({}, window.initialState, {
    userGuideContent: '',
    requestParam: { PageSize: DefaultPagingOption.PageSize }
});

const store = Store.createStore(reducer, defaultState);

store.subscribe(() => {
    console.log('Store updated:', store.getState());
});

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

render(<App />, document.getElementById("app-container"));