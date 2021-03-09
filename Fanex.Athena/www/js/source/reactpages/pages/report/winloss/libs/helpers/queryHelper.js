import Site from '@jsroot/lib/site';
import store from '../store';
import { setPagingOption, setSortOption, setDisplayedColumns } from '../../actions/gridAction';
import { displayedColumns } from '../../constants/gridContants';
import GroupHelper from '../helpers/groupHelper';

export default class QueryHelper {
    static toAPIParams({ requestParam, username, selectedCurrency, selectedBaseCurrency,
         selectedProduct, selectedBrand, selectedDateType, isExcludeTest, noDraw, drilldownInOriginalCurrency, dateRange, selectedGroupByOption, userNameFilterOption, selectedTimezone }) {
        return {
            ...requestParam,
            ...{
                userNameFilterId: userNameFilterOption,
                username, 
                currencyIdList: selectedCurrency,
                baseCurrency: selectedBaseCurrency,
                productIds: selectedProduct,
                brandIds: selectedBrand,
                dateType: selectedDateType,
                isIncludedTestData: !isExcludeTest, 
                isNoDrawTicket: noDraw,
                drilldownInOriginalCurrency: drilldownInOriginalCurrency,
                fromDate: Site.convertDateToString(dateRange.fromDate),
                toDate: Site.convertDateToString(dateRange.toDate),
                groupBy: selectedGroupByOption,
                timezone: selectedTimezone
            }
        }
    }

    static callBackToUpdateGridOption = (pageIndex, pageSize, sortBy, sortType) => response => {
        const { totalRows } = response;
        const { pagingOption, selectedGroupByOption } = store.getState();
        const newPagingOption = {
            ...pagingOption,
            ...{
                PageIndex: pageIndex,           
                PageSize: pageSize,
                TotalItem: totalRows
            }
        }

        store.dispatch(setPagingOption(newPagingOption));
        store.dispatch(setSortOption({ sortBy, sortType }));
    }
}

