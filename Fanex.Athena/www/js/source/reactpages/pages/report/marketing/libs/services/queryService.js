import DataService from '@jsroot/lib/DataService';
import { Url, errorResponse, successResponse } from '../../constants/queryConst';

export default class QueryService {
    static fetchPerformanceHighlightData = async params => {
        try {
            const response = await DataService.postData(Url.performanceHighlight, params);
            if (response.status === 200) {
                return {
                    ...successResponse,
                    ...{ data: response.data }
                }
            }
        }
        catch (e) {
            console.log(e)
        }

        return {
            ...errorResponse,
        }
    }
}