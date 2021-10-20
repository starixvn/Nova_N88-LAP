export default class DataService {

    static getBonusInfoSummaryAPIParams =  (filterData, sortInfo) => {
        const params = {
            ...filterData,
            ...sortInfo
        }
        return params;
    }

    static getBonusInfoDetailAPIParams =  (filterData, pagingOption, sortInfo, dateRange, bonusCode, bonusTypeId) => {
        const params = {
            ...filterData,
            ...sortInfo,
            ...dateRange,
            ...{ pageIndex: pagingOption.PageIndex, pageSize: pagingOption.PageSize },
            bonusCode,
            bonusTypeId
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

    static getBonusInfoDetailExportAPIParams =  (filterData, sortInfo, dateRange, bonusCode, bonusTypeId) => {
        const params = {
            ...filterData,
            ...sortInfo,
            ...dateRange,
            bonusCode,
            bonusTypeId
        }
        return params;
    }
}