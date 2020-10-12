import LapCommonService from "./lapCommonService";

export default class FactoryCommonService {
    static createInstance() {
        const pageConfig = window._pConfig;
        if (!pageConfig) {
            throw new Error("Missing _pConfig in window");
        }

        const { tabList, hostUrl } = pageConfig;

        const initialConfig = {
            tabList,
            baseUrl: hostUrl
        }
        return new LapCommonService(initialConfig);
    }
}