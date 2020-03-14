import LapCommonService from "./lapCommonService";

export default class FactoryCommonService {
    static createInstance() {
        const pageConfig = window._pConfig;
        if (!pageConfig) {
            throw new Error("Missing _pConfig in window");
        }

        const { applyApiTokenUrl, applyLinkTokenUrl, tabList } = pageConfig;

        const initialConfig = {
            tabList,
            baseUrl: pageConfig.hostUrl,
            applyApiTokenUrl,
            applyLinkTokenUrl
        }
        return new LapCommonService(initialConfig);
    }
}