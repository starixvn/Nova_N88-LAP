import DateTimeHelper from '../helpers/dateTimeHelper';

export default class DataService {

    static getCommonAPIParams = ({ selectedBrand, reportDate }) => {
        const params = {
            brandId: selectedBrand,
            fromDate: DateTimeHelper.formatDateStructureToString(reportDate.fromDate),
            toDate: DateTimeHelper.formatDateStructureToString(reportDate.toDate),
        }
        return params;
    }

    static getPerformanceHighlightAPIParams = filterData => {
        const { selectedBrand, selectedBaseCurrency, reportDate, compareDate } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, reportDate });
        const params = {
            ...commonParams,
            ...{
                compareFromDate: DateTimeHelper.formatDateStructureToString(compareDate.fromDate),
                compareToDate: DateTimeHelper.formatDateStructureToString(compareDate.toDate),
                baseCurrency: selectedBaseCurrency
            }
        }

        return params;
    }

    static getPerformanceHighlightPopupSummaryAPIParams =  filterData => {
        const { baseCurrency, ...rest } = filterData;
        const commonParams = this.getPerformanceHighlightAPIParams(rest);
        const params = {
            ...commonParams,
            baseCurrency
        }
        return params;
    }

    static getPerformanceHighlightPopupDetailAPIParams =  filterData => {
        const { reportDate, selectedBrand, pagingOption, sortInfo, ...rest } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, reportDate  });
        const params = {
            ...commonParams,
            ...sortInfo,
            ...{ pageIndex: pagingOption.PageIndex, pageSize: pagingOption.PageSize },
            ...rest
        }
        return params;
    }

    static getPerformanceHighlightPopupExportAPIParams =  filterData => {
        const { baseCurrency, sortInfo, allowedCompare, ...rest } = filterData;
        const commonParams = this.getPerformanceHighlightAPIParams(rest);
        const params = {
            ...commonParams,
            ...sortInfo,
            baseCurrency,
            allowedCompare
        }
        return params;
    }

    static getPerformanceHighlightExportAPIParams = filterData => {
        const { selectedBrand, reportDate, selectedBaseCurrency } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, reportDate });
        const params = {
            ...commonParams,
            baseCurrency: selectedBaseCurrency
        }

        return params;
    }

    /* detail popup*/

    static getNewlyRegisterUsersSummaryAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupSummaryAPIParams(filterData);
        return params;
    }

    static getNewlyRegisterUsersDetailAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupDetailAPIParams(filterData);
        return params;
    }

    static getNewlyRegisterUsersExportAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupExportAPIParams(filterData);
        return params;
    }

    static getWithdrawalAmountSummaryAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupSummaryAPIParams(filterData);
        return params;
    }

    static getWithdrawalAmountDetailAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupDetailAPIParams(filterData);
        return params;
    }

    static getWithdrawalAmountExportAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupExportAPIParams(filterData);
        return params;
    }

    static getBonusClaimedSummaryAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupSummaryAPIParams(filterData);
        return params;
    }

    static getBonusClaimedDetailAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupDetailAPIParams(filterData);
        return params;
    }

    static getBonusClaimedExportAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupExportAPIParams(filterData);
        return params;
    }

    static getDepositAmountSummaryAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupSummaryAPIParams(filterData);
        return params;
    }

    static getDepositAmountDetailAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupDetailAPIParams(filterData);
        return params;
    }

    static getDepositAmountExportAPIParams = filterData => {
        const params = this.getPerformanceHighlightPopupExportAPIParams(filterData);
        return params;
    }

    /* end detail popup */

    static getUserActivitiesAPIParams = filterData => {
        const { selectedBrand, reportDate, viewMode } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, reportDate });
        const params = {
            ...commonParams,
            ...{ 
                viewMode 
            }
        }

        return params;
    }

    static getAvgRevenueAPIParams = filterData => {
        const { selectedBrand, reportDate, selectedBaseCurrency, products } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, reportDate });
        const params = {
            ...commonParams,
            ...{ 
                 productIds: products,
                 baseCurrency: selectedBaseCurrency
            }
        }

        return params;
    }

    static filterDataWithSelectedProducts = (avgRevenueData, products) => {
        const selectedProducts = products.split(',');
        const dicSelectedProducts= selectedProducts.reduce((prevValue, currentValue) => ({ ...prevValue, [currentValue]: true }), {});
        const newData = avgRevenueData.filter(_ => dicSelectedProducts[_.productId]);
        return newData;
    }
}