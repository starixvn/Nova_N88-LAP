import DataService from '@jsroot/lib/DataService';
import { Url, errorResponse, successResponse } from '../../constants/queryConst';

export default class QueryService {

    static fetchPerformanceHighlightData = async params => {
        var data = await this.fetchData(() => DataService.postData(Url.performanceHighlight, params));
        return data;
    }

    static fetchUserActivitiesData = async params => {
        var data = await this.fetchData(() => DataService.postData(Url.userActivities, params));
        return data;
    }

    static fetchAvgRevenueData = async params => {
        var data = await this.fetchData(() => DataService.postData(Url.avgRevenue, params));
        return data;
    }

    static fetchData = async apiCall => {
        try {
            const response = await apiCall();
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