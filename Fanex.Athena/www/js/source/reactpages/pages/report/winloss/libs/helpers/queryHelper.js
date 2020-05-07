import Site from '@jsroot/lib/site';
import store from '../store';
import { setPagingOption } from '../../actions/gridAction';

export default class QueryHelper {
    static toAPIParams({ requestParam, username, selectedCurrency, selectedBaseCurrency,
         selectedProduct, selectedDateType, isExcludeTest, noDraw, dateRange, selectedGroupByOption }) {
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
                toDate: Site.convertDateToString(dateRange.toDate),
                groupBy: selectedGroupByOption 
            }
        }
    }

    static callBackToUpdatePagingOption = response => {
        const { totalItems, pageIndex, pageSize } = response;
        const { pagingOption } = store.getState();
        const newPagingOption = {
            ...pagingOption,
            ...{
                PageIndex: pageIndex,           
                PageSize: pageSize,
                TotalItem: totalItems
            }
        }
        store.dispatch(setPagingOption(newPagingOption));
    }
}