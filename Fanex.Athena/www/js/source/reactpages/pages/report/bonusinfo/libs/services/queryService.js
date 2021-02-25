import DataService from '@jsroot/lib/DataService';
import Site from '@jsroot/lib/site';
import { Url, FileNameExport, errorResponse, successResponse } from '../../constants/queryConst';

export default class QueryService {

    static fetchDropdownOptionsData = async callBack => {
        var data = await this.fetchData(() => DataService.getReportData(Url.bonusInfoSetting));
        callBack && callBack(data);
    }

    static fetchBonusInfoSummaryData = async params => {
        var data = await this.fetchData(() => DataService.postReportData(Url.bonusInfoSummary, params));
        return data;
    }

    static fetchBonusInfoDetailData = async params => {
        var data = await this.fetchData(() => DataService.postReportData(Url.bonusInfoDetail, params));
        return data;
    }

    static async exportBonusInfoSummaryData(params) {
        try {
            const response = await DataService.getReportFile(Url.bonusInfoSummaryExport, params)
            Site.downloadFile(response.data, FileNameExport.bonusInfoSummaryExport);
        }
        catch (e) {
            console.log(e)
        }       
    }

    static async exportBonusInfoDetailData(params) {
        try {
            const response = await DataService.getReportFile(Url.bonusInfoDetailExport, params)
            Site.downloadFile(response.data, FileNameExport.bonusInfoDetailExport);
        }
        catch (e) {
            console.log(e)
        }       
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