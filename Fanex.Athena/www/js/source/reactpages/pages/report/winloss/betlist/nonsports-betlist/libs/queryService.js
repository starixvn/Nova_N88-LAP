import DataService from '@jsroot/lib/DataService';
import LangHelper from '@jsroot/lib/langHelper';
import Site from '@jsroot/lib/site';
import { Url, defaultGridData } from './constants';

export default class QueryService {
    static async getNonSportsBetList(params) {
        try {
            const response = await DataService.postReportData(Url.nonSportsBetList, params);
            if (response.status === 200) {
                return response.data;
            }
        }
        catch (e) {
            console.log(e)
        }

        alert(LangHelper.getSingleResource("ErrorProcessingMsg"));

        return defaultGridData;
    }

    static async exportNonSportsBetList(params, after) {
        try {
            const response = await DataService.getReportFile(Url.exportNonSportsBetList, params)
            const noContentStatusCode = 204;
            if (response.status === noContentStatusCode) {
                alert(LangHelper.getSingleResource("NoInfo"));
            } else {
                Site.downloadFile(response.data, LangHelper.getSingleResource('PlayerBetList') + '_' + params.ProductName + '.xlsx');
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