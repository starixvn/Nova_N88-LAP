import DataService from '@jsroot/lib/DataService';
import Site from '@jsroot/lib/site';
import { Url, FileNameExport, errorResponse, successResponse } from '../../constants/queryConst';

export default class QueryService {

    static fetchPerformanceHighlightData = async params => {
        var data = await this.fetchData(() => DataService.postReportData(Url.performanceHighlight, params));
        return data;
    }

    static fetchUserActivitiesData = async params => {
        var data = await this.fetchData(() => DataService.postReportData(Url.userActivities, params));
        return data;
    }

    static fetchAvgRevenueData = async params => {
        var data = await this.fetchData(() => DataService.postReportData(Url.avgRevenue, params));
        return data;
    }

    static fetchNewlyRegisterUsersSummaryData = async (params, before, after) => {
        before && before();
        var data = await this.fetchData(() => DataService.postReportData(Url.newlyRegisterUsersSummary, params));
        after && after(data)
        return data;
    }

    static fetchNewlyRegisterUsersDetailData = async (params, before, after) => {
        before && before();
        var data = await this.fetchData(() => DataService.postReportData(Url.newlyRegisterUsersDetail, params));
        after && after(data)
        return data;
    }

    static async exportNewlyRegisterUsersData(params) {
        const response = await DataService.getReportFile(Url.newlyRegisterUsersExport, params)
        const noContentStatusCode = 204;
        if (response.status === noContentStatusCode) {
            alert(LangHelper.getSingleResource("NoInfo"));
        } else {
            Site.downloadFile(response.data, FileNameExport.newlyRegisterUsers);
        };
    }

    static async exportPerformanceHighlightData(params) {
        const response = await DataService.getReportFile(Url.performanceHighlightExport, params)
        const noContentStatusCode = 204;
        if (response.status === noContentStatusCode) {
            alert(LangHelper.getSingleResource("NoInfo"));
        } else {
            Site.downloadFile(response.data, FileNameExport.performanceHighlight);
        };
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