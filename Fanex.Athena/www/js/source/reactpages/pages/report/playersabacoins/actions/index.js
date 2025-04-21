import * as requestParamAction from '@jsroot/actions/requestParamAction';
import * as reportTitleAction from '@jsroot/actions/reportTitleAction';
import * as usernameAction from '@jsroot/actions/usernameAction';
import * as dateRangeAction from '@jsroot/actions/dateRangeAction';
import * as dataAction from './dataAction';
import * as currencyAction from '@jsroot/actions/currencyAction';
import * as loaderAction from '@jsroot/actions/loaderAction';
import * as userGuideAction from '@jsroot/actions/userGuideAction';
import * as brandAction from "@jsroot/actions/brandAction";
import * as reportFilterAction  from './reportFilterAction';

export const ActionCreators = {
    ...dataAction,
    ...currencyAction,
    ...usernameAction,
    ...loaderAction,
    ...dateRangeAction,
    ...userGuideAction,
    ...requestParamAction,
    ...reportTitleAction,
    ...brandAction,
    ...reportFilterAction
};

export default ActionCreators;
