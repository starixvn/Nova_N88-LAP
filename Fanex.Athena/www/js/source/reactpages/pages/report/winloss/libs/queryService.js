import DataService from '@jsroot/lib/DataService';
import Site from '@jsroot/lib/site';
import LangHelper from '@jsroot/lib/langHelper';
import { Url, FileNameExport, errorResponse, successResponse } from '../constants/queryConsts';

export default class QueryService {
    static async getSettingData() {
        try {
            const response = await DataService.getReportData(Url.setting);
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

    static async getReportData(params) {
        try {
            const response = await DataService.postReportData(Url.reportByGroup, params);
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

    static async getPlayerDetailData(params) {
        try {
            const response = await DataService.postReportData(Url.playerDetail, params);
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

    static async exportReportData(params, after) {
        try {
            const response = await DataService.getReportFile(Url.exportReportByGroup, params)
            const noContentStatusCode = 204;
            if (response.status === noContentStatusCode) {
                alert(LangHelper.getSingleResource("NoInfo"));
            } else {
                Site.downloadFile(response.data, FileNameExport.reportByGroup);
            };
        }
        catch(e) {
            alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
            console.log(e)
        }
        finally {
            after && after();
        }
    }

    static async exportReportDetailData(params, after) {
        try {
            const response = await DataService.getReportFile(Url.exportReportDetailByGroup, params)
            const noContentStatusCode = 204;
            if (response.status === noContentStatusCode) {
                alert(LangHelper.getSingleResource("NoInfo"));
            } else {
                Site.downloadFile(response.data, FileNameExport.reportDetailByGroup);
            };
        }
        catch(e) {
            alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
            console.log(e)
        }
        finally {
            after && after();
        }
    }
}
