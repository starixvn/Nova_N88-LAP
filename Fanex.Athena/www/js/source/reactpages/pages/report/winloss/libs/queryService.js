import DataService from '@jsroot/lib/DataService';
import Site from '@jsroot/lib/site';
import { Url, FileNameExport, errorResponse, successResponse } from '../constants/queryConsts';

export default class QueryService {
    static async getReportData(params) {
        try {
            const response = await DataService.postData(Url.reportByGroup, params);
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
            ...{ data: { gridData: {} } }
        };
    }

    static async exportReportData(params) {
        const response = await DataService.getFile(Url.exportReportByGroup, params)
        const noContentStatusCode = 204;
        if (response.status === noContentStatusCode) {
            alert(LangHelper.getSingleResource("NoInfo"));
        } else {
            Site.downloadFile(response.data, FileNameExport.reportByGroup);
        };
    }
}
