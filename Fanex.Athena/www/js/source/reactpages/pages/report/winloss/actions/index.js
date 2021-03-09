import * as loaderAction from '@jsroot/actions/loaderAction';
import * as settingDataAction from '@jsroot/actions/settingDataAction';
import gridAction from './gridAction';
import filterAction from './filterAction';

export default {
    ...loaderAction,
    ...settingDataAction,
    ...filterAction,
    ...gridAction
}