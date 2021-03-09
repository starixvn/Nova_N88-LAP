import { combineReducers } from 'redux';
import * as loaderReducer from '@jsroot/reducers/loaderReducer';
import * as settingDataReducer from '@jsroot/reducers/settingDataReducer';
import filterReducer from './filterReducer';
import gridReducer from './gridReducer';
export default combineReducers(Object.assign(
    loaderReducer,
    settingDataReducer,
    filterReducer,
    gridReducer
))
