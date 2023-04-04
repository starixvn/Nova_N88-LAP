export default class DataService {

    static getBonusInfoSummaryAPIParams =  (filterData, sortInfo) => {
        const params = {
            ...filterData,
            ...sortInfo
        }
        return params;
    }

    static getBonusInfoDetailAPIParams =  (filterData, pagingOption, sortInfo, dateRange, bonusInfo, bonusCode) => {
        const params = {
            ...filterData,
            ...sortInfo,
            ...dateRange,
            ...{ pageIndex: pagingOption.PageIndex, pageSize: pagingOption.PageSize },
            bonusInfo,
            bonusCode
        }
        return params;
    }

    static getBonusInfoSummaryExportAPIParams =  (filterData, sortInfo) => {
        const params = {
            ...filterData,
            ...sortInfo
        }
        return params;
    }

    static getBonusInfoDetailExportAPIParams =  (filterData, sortInfo, dateRange, bonusInfo, bonusCode) => {
        const params = {
            ...filterData,
            ...sortInfo,
            ...dateRange,
            bonusInfo,
            bonusCode
        }
        return params;
    }
}