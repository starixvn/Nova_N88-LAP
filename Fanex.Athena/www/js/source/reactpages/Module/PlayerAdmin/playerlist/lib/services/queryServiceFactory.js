import LrfPlayerQueryService from './lrfPlayerQueryService';

export default class QueryServiceFactory {
    static getPlayerListService() {
        return LrfPlayerQueryService;
    }
}