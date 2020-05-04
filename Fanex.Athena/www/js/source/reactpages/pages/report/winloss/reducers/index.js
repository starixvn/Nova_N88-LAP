import { combineReducers } from 'redux';
import * as loaderReducer from '@jsroot/reducers/loaderReducer';
import filterReducer from './filterReducer';

export default combineReducers(Object.assign(
    loaderReducer,
    filterReducer
))
