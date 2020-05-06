import * as loaderAction from '@jsroot/actions/loaderAction';
import gridAction from './gridAction';
import filterAction from './filterAction';

export default {
    ...loaderAction,
    ...filterAction,
    ...gridAction
}