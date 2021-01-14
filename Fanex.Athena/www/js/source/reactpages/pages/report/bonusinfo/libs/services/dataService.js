export default class DataService {

    static getCommonAPIParams = ({ selectedBrand, fromDate, toDate, selectedBaseCurrency, claimStatus}) => {
        const params = {
            brandId: selectedBrand,
            fromDate: fromDate,
            toDate: toDate,
            baseCurrency: selectedBaseCurrency,
            claimStatus
        }
        return params;
    }

    static getBonusInfoSummaryAPIParams =  (filterData, sortInfo) => {
        const { selectedBrand, selectedBaseCurrency, fromDate, toDate, claimStatus, ...rest } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, fromDate, toDate, selectedBaseCurrency, claimStatus });
        const params = {
            ...commonParams,
            ...sortInfo,
            ...rest
        }
        return params;
    }

    static getBonusInfoDetailAPIParams =  (filterData, pagingOption, sortInfo, bonusCode) => {
        const { fromDate, toDate, selectedBrand, selectedBaseCurrency, claimStatus, ...rest } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, fromDate, toDate, selectedBaseCurrency, claimStatus });
        const params = {
            ...commonParams,
            ...sortInfo,
            ...{ pageIndex: pagingOption.PageIndex, pageSize: pagingOption.PageSize },
            bonusCode
        }
        return params;
    }

    static getBonusInfoSummaryExportAPIParams =  (filterData, sortInfo) => {
        const { fromDate, toDate, selectedBrand, selectedBaseCurrency, claimStatus, ...rest } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, fromDate, toDate, selectedBaseCurrency, claimStatus });
        const params = {
            ...commonParams,
            ...sortInfo,
            ...rest
        }
        return params;
    }

    static getBonusInfoDetailExportAPIParams =  (filterData, sortInfo, bonusCode) => {
        const { fromDate, toDate, selectedBrand, selectedBaseCurrency, claimStatus } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, fromDate, toDate, selectedBaseCurrency, claimStatus });
        const params = {
            ...commonParams,
            ...sortInfo,
            bonusCode
        }
        return params;
    }
}