import { combineReducers } from 'redux';
import * as loaderReducer from '@jsroot/reducers/loaderReducer';
import filterReducer from './filterReducer';
import gridReducer from './gridReducer';

export default combineReducers(Object.assign(
    loaderReducer,
    filterReducer,
    gridReducer
))
