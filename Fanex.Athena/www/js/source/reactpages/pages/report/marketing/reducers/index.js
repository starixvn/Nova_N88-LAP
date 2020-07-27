import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import dataReducer from './dataReducer';

export default combineReducers(Object.assign(
    filterReducer,
    dataReducer
))
