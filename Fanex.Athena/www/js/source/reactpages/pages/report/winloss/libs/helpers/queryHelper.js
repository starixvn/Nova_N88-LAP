import Site from '@jsroot/lib/site';
import store from '../store';
import AppData from '@jsroot/lib/AppData'
import { setPagingOption, setSortOption, setDisplayedColumns } from '../../actions/gridAction';
export default class QueryHelper {
    static toAPIParams({ requestParam, username, selectedCurrency, selectedBaseCurrency, selectedPlayerList,
        selectedProduct, selectedBrand, selectedDateType, isExcludeTest, includeFreeSpins,
        noDraw, drilldownInOriginalCurrency, dateRange, selectedGroupByOption, userNameFilterOption,
        selectedTimezone, selectedDataView }) {

        var playerListParamList = selectedPlayerList.split('_').map(Number);

        return {
            ...requestParam,
            ...{
                userNameFilterId: userNameFilterOption,
                username,
                currencyIdList: selectedCurrency,
                baseCurrency: selectedBaseCurrency,
                productIds: selectedProduct,
                brandIds: selectedBrand,
                dataView: selectedDataView,
                dataViewName: AppData.dataView ? AppData.dataViewList.find(view => view.value === selectedDataView).label : '',
                dateType: selectedDateType,
                isIncludedTestData: !isExcludeTest,
                isIncludedFreeSpin: includeFreeSpins,
                isNoDrawTicket: noDraw,
                drilldownInOriginalCurrency: drilldownInOriginalCurrency,
                fromDate: Site.convertDateToString(dateRange.fromDate),
                toDate: Site.convertDateToString(dateRange.toDate),
                groupBy: selectedGroupByOption,
                timezone: selectedTimezone,
                isDataLimitDesc: playerListParamList[0],
                dataLimitBy: playerListParamList[1],
                dataLimitValue: playerListParamList[2]
            }
        }
    }

    static callBackToUpdateGridOption = (pageIndex, pageSize, sortBy, sortType) => response => {
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
        store.dispatch(setSortOption({ sortBy, sortType }));
    }
}

