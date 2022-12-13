import * as types from './types.js'
import { setSelectedBrand } from '@jsroot/actions/brandAction';

const setReportFilter = data => {
    return {
        type: types.SET_REPORT_FILTER,
        data: data
    }
}

export default {
    setSelectedBrand,
    setReportFilter
}
