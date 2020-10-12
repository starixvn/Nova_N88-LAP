import BaseCommonService from './baseCommonService';
import { systemType } from '../constants/configInfo';
import Site from '@jsroot/lib/site';
import axios from 'axios'
import qs from 'qs';

const defaultAjaxConfig = {
    method: 'post',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'content-type': 'application/x-www-form-urlencoded',
        '__RequestVerificationToken': Site.getXsrfToken()
    },
    withCredentials: false,
    responseType: 'json',
    cancelToken: new axios.CancelToken(function (cancel) { })
}

class LapCommonService extends BaseCommonService {
    constructor(initialConfig) {
        super();

        const { baseUrl, tabList } = initialConfig;
        this._baseUrl = baseUrl;
        this._tabList = tabList || [];
    }

    getTabList() {
        return [...this._tabList];
    }

    _buildCommonAjaxConfig(configOption, apiActionUrl, params) {
        const commonConfig = {
            ...configOption,
            url: apiActionUrl
        };

        const configWithParam = this._getConfigParam(commonConfig, params);

        return configWithParam;
    }

    _getConfigParam(config, params) {
        const isGetMethod = config.method.toLowerCase() === 'get';
        const paramConfig = isGetMethod ? { params } : { data: qs.stringify(params) };

        return {
            ...config,
            ...paramConfig
        }
    }

    fetchData(sysType, action, params, configOption = defaultAjaxConfig) {
        const config = { ...defaultAjaxConfig, ...configOption };

        const relativeUrl = this._baseUrl + action;

        const ajaxConfig = this._buildCommonAjaxConfig(config, relativeUrl, params);

        return axios(ajaxConfig);
    }

    fetchMultiple(promiseList, callback) {
        if (promiseList && promiseList.length) {
            return axios.all(promiseList)
                .then(axios.spread(callback));
        }
    }
}

export default LapCommonService