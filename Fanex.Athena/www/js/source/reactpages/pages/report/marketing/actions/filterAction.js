import { SET_VIEW_MODE } from './types';
import { setSelectedBaseCurrency } from '@jsroot/actions/baseCurrencyAction';

const setViewMode = viewMode => {
    return {
        type: SET_VIEW_MODE,
        data: viewMode
    }
}

export default {
    setSelectedBaseCurrency,
    setViewMode
}
