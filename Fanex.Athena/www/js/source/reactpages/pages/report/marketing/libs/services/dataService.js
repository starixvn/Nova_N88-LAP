import DateTimeHelper from '../helpers/dateTimeHelper';
import Site from '@jsroot/lib/site';

export default class DataService {

    static getCommonAPIParams = ({ selectedBrand, selectedCurrency, reportDate }) => {
        const params = {
            brandId: selectedBrand,
            currencyIdList: selectedCurrency,
            fromDate: Site.convertDateToString(reportDate.fromDate),
            toDate: Site.convertDateToString(reportDate.toDate)
        }
        return params;
    }

    static getPerformanceHighlightAPIParams = ({ selectedBrand, selectedCurrency, selectedBaseCurrency, reportDate, compareDate }) => {
        const commonParams = this.getCommonAPIParams({ selectedBrand, selectedCurrency, reportDate });
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

    static getPerformanceHighlightPopupSummaryAPIParams = ({ baseCurrency, ...rest }) => {
        const commonParams = this.getPerformanceHighlightAPIParams(rest);
        const params = {
            ...commonParams,
            baseCurrency
        }
        return params;
    }

    static getPerformanceHighlightPopupDetailAPIParams = ({ reportDate, selectedBrand, selectedCurrency, pagingOption, sortInfo, ...rest }) => {
        const commonParams = this.getCommonAPIParams({ selectedBrand, selectedCurrency, reportDate  });
        const params = {
            ...commonParams,
            ...sortInfo,
            ...{ pageIndex: pagingOption.PageIndex, pageSize: pagingOption.PageSize },
            ...rest
        }
        return params;
    }

    static getPerformanceHighlightPopupExportAPIParams =  ({ baseCurrency, sortInfo, allowedCompare, ...rest }) => {
        const commonParams = this.getPerformanceHighlightAPIParams(rest);
        const params = {
            ...commonParams,
            ...sortInfo,
            baseCurrency,
            allowedCompare
        }
        return params;
    }

    static getPerformanceHighlightExportAPIParams = ({ selectedBrand, selectedCurrency, reportDate, selectedBaseCurrency, currencyNameList }) => {
        const commonParams = this.getCommonAPIParams({ selectedBrand, selectedCurrency, reportDate });
        const params = {
            ...commonParams,
            baseCurrency: selectedBaseCurrency,
            currencyNameList
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
        const { selectedBrand, selectedCurrency, reportDate, viewMode } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, selectedCurrency, reportDate });
        const params = {
            ...commonParams,
            ...{ 
                viewMode 
            }
        }

        return params;
    }

    static getAvgRevenueAPIParams = filterData => {
        const { selectedBrand, selectedCurrency, reportDate, selectedBaseCurrency, products } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, selectedCurrency, reportDate });
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