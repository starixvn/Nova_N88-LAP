import LapCommonService from "./lapCommonService";

export default class FactoryCommonService {
    static createInstance() {
        const pageConfig = window._pConfig;
        if (!pageConfig) {
            throw new Error("Missing _pConfig in window");
        }

        const { applyApiTokenUrl, tabList } = pageConfig;

        if (!applyApiTokenUrl) {
            throw new Error("Missing applyApiTokenUrl in window._pConfig");
        }

        const initialConfig = {
            tabList,
            baseUrl: pageConfig.hostUrl,
            applyApiTokenUrl,
            applyLinkTokenUrl: pageConfig.applyApiTokenUrl
        }
        return new LapCommonService(initialConfig);
    }
}