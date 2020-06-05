import Site from '@jsroot/lib/site';
import store from '../store';
import { setPagingOption, setSortOption } from '../../actions/gridAction';
import { defaultSortOption } from '../../constants/gridContants';

export default class QueryHelper {
    static toAPIParams({ requestParam, username, selectedCurrency, selectedBaseCurrency,
         selectedProduct, selectedDateType, isExcludeTest, noDraw, drilldownInOriginalCurrency, dateRange, selectedGroupByOption, userNameFilterOption }) {
        return {
            ...requestParam,
            ...{
                UserNameFilterId: userNameFilterOption,
                username, 
                currencyIdList: selectedCurrency,
                baseCurrency: selectedBaseCurrency,
                productIds: selectedProduct,
                dateType: selectedDateType,
                isIncludedTestData: !isExcludeTest, 
                isNoDrawTicket: noDraw,
                drilldownInOriginalCurrency: drilldownInOriginalCurrency,
                fromDate: Site.convertDateToString(dateRange.fromDate),
                toDate: Site.convertDateToString(dateRange.toDate),
                groupBy: selectedGroupByOption
            }
        }
    }

    static callBackToUpdateGridOption = (pageIndex, pageSize) => response => {
        const { totalRows } = response;
        const { pagingOption } = store.getState();
        const newPagingOption = {
            ...pagingOption,
            ...{
                PageIndex: pageIndex,           
                PageSize: pageSize,
                TotalItem: totalRows
            }
        }
        store.dispatch(setPagingOption(newPagingOption));
        store.dispatch(setSortOption(defaultSortOption));
    }
}

