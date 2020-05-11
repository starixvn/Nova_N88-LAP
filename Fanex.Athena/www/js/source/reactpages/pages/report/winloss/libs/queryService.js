import DataService from '@jsroot/lib/DataService';
import { Url, errorResponse, successResponse } from '../constants/queryConsts';

export default class QueryService {
    static async getReportData(params) {
        try {
            const response = await DataService.postData(Url.reportByGroup, params);
            if(response.status === 200) {
                return { 
                    ...successResponse,
                    ...{ data: response.data }
                }
            }
        }
        catch(e) {
            console.log(e)
        }

        return  { 
            ...errorResponse,
            ...{ data: { gridData: {} } }
        };
    }
}
