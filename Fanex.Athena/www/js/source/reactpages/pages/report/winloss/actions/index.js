import * as types from './types';
import * as loaderAction from '@jsroot/actions/loaderAction';
import filterAction from './filterAction';

export const ActionCreators = {
    ...loaderAction,
    ...filterAction,
}