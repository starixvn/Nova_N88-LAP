import Site from '@jsroot/lib/site'

export default class ParamHelper {
    static toAPIParams({ requestParam, username, selectedCurrency, selectedBaseCurrency,
         selectedProduct, selectedDateType, isExcludeTest, noDraw, dateRange }) {
        return {
            ...requestParam,
            ...{
                username, 
                currencyIdList: selectedCurrency,
                baseCurrency: selectedBaseCurrency,
                products: selectedProduct,
                dateType: selectedDateType,
                includeTestData: !isExcludeTest, 
                noDraw,
                fromDate: Site.convertDateToString(dateRange.fromDate),
                toDate: Site.convertDateToString(dateRange.toDate)
            }
        }
    }
}