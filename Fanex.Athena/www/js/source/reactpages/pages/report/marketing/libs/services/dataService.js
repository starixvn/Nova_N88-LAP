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
        const { selectedBrand, reportDate, compareDate } = filterData;
        const commonParams = this.getCommonAPIParams({ selectedBrand, reportDate });
        const params = {
            ...commonParams,
            ...{
                compareFromDate: DateTimeHelper.formatDateStructureToString(compareDate.fromDate),
                compareToDate: DateTimeHelper.formatDateStructureToString(compareDate.toDate)
            }
        }

        return params;
    }

    static getNewlyRegisterUsersSummaryAPIParams = filterData => {
        const { baseCurrency, ...rest } = filterData;
        const commonParams = this.getPerformanceHighlightAPIParams(rest);
        const params = {
            ...commonParams,
            baseCurrency
        }
        return params;
    }

    static getNewlyRegisterUsersDetailAPIParams = filterData => {
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

    static getNewlyRegisterUsersExportAPIParams = filterData => {
        const { baseCurrency, sortInfo, ...rest } = filterData;
        const commonParams = this.getPerformanceHighlightAPIParams(rest);
        const params = {
            ...commonParams,
            ...sortInfo,
            baseCurrency
        }
        return params;
    }

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