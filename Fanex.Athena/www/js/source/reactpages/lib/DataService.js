import axios from 'axios'
import Site from '@jsroot/lib/site'
import QueryString from '@jsroot/lib/QueryString';

export default class DataService {
    static apiKeys = {
        report: 'reportApi',
        betlist: 'betlistApi'
    }

    static buildProxyUrl(apiKey, apiUrl) {
        const encodeUrl = apiUrl.replace(new RegExp('/', 'g'), '_');
        const proxyUrl = `api/proxy/${apiKey}/${encodeUrl}`;
        return proxyUrl;
    }

    static getData(url, params) {
        url = QueryString.setParams(url, params);     

        return axios.get(url, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                '__RequestVerificationToken': Site.getXsrfToken()
            }
        });
    }

    static postData(url, params) {
        return axios.post(url, params, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                '__RequestVerificationToken': Site.getXsrfToken()
            }
        });
    }

    static getFile(url, params) {
        return axios.post(url, params, {
            responseType: 'blob',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                '__RequestVerificationToken': Site.getXsrfToken()
            }
        });
    }

    static postProxyData(apiKey, apiUrl, params) {
        const proxyUrl = this.buildProxyUrl(apiKey, apiUrl);
        return this.postData(proxyUrl, params);
    }

    static postReportData(url, params) {
        return this.postProxyData(this.apiKeys.report, url, params);
    }

    static postBetListData(url, params) {
        return this.postProxyData(this.apiKeys.betlist, url, params);
    }

    static getProxyFile(apiKey, apiUrl, params) {
        const proxyUrl = this.buildProxyUrl(apiKey, apiUrl);
        return this.getFile(proxyUrl, params);
    }

    static getReportFile(url, params) {
        return this.getProxyFile(this.apiKeys.report, url, params);
    }

    static getBetListFile(url, params) {
        return this.getProxyFile(this.apiKeys.betlist, url, params);
    }

    static getProxyData(apiKey, apiUrl, params) {
        const proxyUrl = this.buildProxyUrl(apiKey, apiUrl);
        return this.getData(proxyUrl, params);
    }

    static getReportData(url, params) {
        return this.getProxyData(this.apiKeys.report, url, params);
    }
}