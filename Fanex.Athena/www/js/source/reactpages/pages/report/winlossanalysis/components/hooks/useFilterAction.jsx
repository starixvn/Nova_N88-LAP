import { ActionCreators } from '../../actions/index.js'
import LangHelper from '@jsroot/lib/langHelper'
import Site from '@jsroot/lib/site'
import AppData from '@jsroot/lib/AppData'
import useBaseCurrencyForMultiSelectCurrency from '@jsroot/customHooks/useBaseCurrencyForMultiSelectCurrency'
import Service from '../../common/Service.js'
import { useValidParam } from './useValidParam'
import { batch, shallowEqual, useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import StringHelper from '@jsroot/lib/stringHelper.js';
import CurrencyHelper from '@jsroot/lib/currencyHelper'
import { ALL_SELECTED_TEXT, SortBy, SortOrder, SearchMode } from '../../common/constants.js'
import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useFilterAction = () => {
    const isValidModel = useValidParam();
    const dispatch = useDispatch();
    const {
        requestParam,
        username,
        selectedBaseCurrency,
        selectedProduct,
        selectedStatus,
        dateRange,
        selectedLiveStatus,
        selectedPlatform,
        selectedCurrency,
        selectedSport,
        selectedBettype,
        selectedOddsGroup,
        selectedCustomerClass,
        searchMode,
        sportList,
        bettypeList,
        selectedVipOnly,
        isGroupInOriginalCurrency,
        isExcludeTestData,
        isViewCashOutOnly,
        selectedGroupByOption,
        selectedBreakDownByOption,
        selectedBrand
    }
        = useSelector(state => state, shallowEqual);

    const { baseCurrencyList } = useBaseCurrencyForMultiSelectCurrency(selectedBaseCurrency, selectedBrand);

    const { setReportTitle, setRequestParam, toggleLoader, getReportData, setDateRange, setSelectedProduct, setSelectedCurrency,
        setSelectedPlatform, setSelectedStatus, setSelectedLiveStatus, setSelectedBaseCurrency, setSelectedVipOnly, setSelectedCustomerClass, setSelectedOddsGroup,
        setUsername, setSearchMode, setGroupInOriginalCurrency, setViewCashOutOnly, setExcludeTestData, setSelectedGroupByOption, setSelectedBreakDownByOption,
        setAppUuid, setProductList } = ActionCreators;

    const _buildTitle = (params) => {
        const { FromDate, ToDate, ProductCodes, SearchUserName, CurrencyCodes, BaseCurrencyName } = params;
        const dateRangeText = `, ${Site.convertDateToString(FromDate)} → ${Site.convertDateToString(ToDate)}`;
        const currencyText = `, ${LangHelper.getSingleResource("Currency")}: ${CurrencyCodes}, ${LangHelper.getSingleResource("BaseCurrency")}: ${BaseCurrencyName}`;
        const productText = `, ${LangHelper.getSingleResource("LicenseeW_L")} (${ProductCodes})`;
        const userText = !!SearchUserName ? `, ${LangHelper.getSingleResource("Username")}: ${SearchUserName}` : "";

        return LangHelper.getSingleResource("SabaWinLossAnalysis") + dateRangeText + currencyText + productText + userText;
    }
    const _getParams = () => {
        if (!isValidModel) {
            return null;
        }

        const { fromDate, toDate } = dateRange;
        const { PageSize } = requestParam;
        const { oddsGroupList, riskLevelList, liveStatusList, statusList, platformList, brands } = AppData;
        const currencyList = CurrencyHelper.getTpCurrencyList(selectedBrand, brands);
        const baseCurrency = baseCurrencyList.find(x => x.value === selectedBaseCurrency);

        const selectedCurrencyCode = Service.getCurrencyCodes(selectedCurrency, currencyList);
        const seletedCurrencyText = selectedCurrencyCode == ALL_SELECTED_TEXT ? LangHelper.getSingleResource("All") : StringHelper.addSpaceAfterComma(selectedCurrencyCode);

        return {
            PageSize: PageSize,
            PageIndex: 1,
            FromDate: Site.convertDateToString(fromDate),
            ToDate: Site.convertDateToString(toDate),
            ProductCodes: selectedProduct,
            SearchUserName: username,
            SearchMode: searchMode,
            CurrencyIdList: selectedCurrency,
            CurrencyCodes: seletedCurrencyText,
            BaseCurrency: selectedBaseCurrency,
            StatusIds: Service.getNormalizedSelectedParamValueForMultiSelectFilter(selectedStatus, statusList),
            SportIds: Service.getNormalizedSelectedParamValueForTreeListFilter(selectedSport, sportList),
            BetTypeIds: Service.getSelectedBettypeXML(selectedBettype),
            PlatformIds: Service.getNormalizedSelectedParamValueForMultiSelectFilter(selectedPlatform, platformList),
            LiveStatusIds: Service.getNormalizedSelectedParamValueForMultiSelectFilter(selectedLiveStatus, liveStatusList),
            IsVipOnly: selectedVipOnly,
            CustomerClass: Service.getNormalizedSelectedParamValueForMultiSelectFilter(selectedCustomerClass, riskLevelList, r => r.customerClassList),
            FullCustomerClass: riskLevelList && riskLevelList.map(r => r.customerClassList).join(","),
            OddsGroup: Service.getNormalizedSelectedParamValueForMultiSelectFilter(selectedOddsGroup, oddsGroupList),
            IsShowInOrginalCurrency: isGroupInOriginalCurrency,
            IsExcludedTestData: isExcludeTestData,
            IsViewCashOutOnly: isViewCashOutOnly,
            GroupMode: selectedGroupByOption,
            BreakdownMode: selectedBreakDownByOption,
            BaseCurrencyName: baseCurrency ? baseCurrency.label : '',
            SortBy: SortBy.Default,
            SortOrder: SortOrder.ASC,
            SubmitTime: new Date().getTime(),
            BrandIds: selectedBrand,
        }
    }

    const submit = (event) => {
        event.preventDefault();
        const params = _getParams();
        if (!params) {
            return;
        }

        toast.dismiss();
        const title = _buildTitle(params);
        batch(() => {
            dispatch(setReportTitle(title));
            dispatch(setRequestParam(params));
            dispatch(toggleLoader(true));
            dispatch(getReportData(params));
        })
    }

    const onClickClearFilter = useCallback(() => {
        let defaultState = window.initialState;
        batch(() => {
            dispatch(setDateRange({ startDate: defaultState.dateRange.fromDate, endDate: defaultState.dateRange.toDate }));
            dispatch(setProductList(AppData.productList));
            dispatch(setSelectedProduct(defaultState.selectedProduct));
            dispatch(setSelectedCurrency(defaultState.selectedCurrency));
            dispatch(setSelectedPlatform(defaultState.selectedPlatform));
            dispatch(setSelectedStatus(defaultState.selectedStatus));
            dispatch(setSelectedLiveStatus(defaultState.selectedLiveStatus));
            dispatch(setSelectedBaseCurrency(defaultState.selectedBaseCurrency));
            dispatch(setSelectedVipOnly(defaultState.selectedVipOnly));
            dispatch(setSelectedCustomerClass(defaultState.selectedCustomerClass));
            dispatch(setSelectedOddsGroup(defaultState.selectedOddsGroup));
            dispatch(setUsername(''));
            dispatch(setSearchMode(SearchMode.MatchPrecise));
            dispatch(setGroupInOriginalCurrency(defaultState.isGroupInOriginalCurrency));
            dispatch(setViewCashOutOnly(defaultState.isViewCashOutOnly));
            dispatch(setExcludeTestData(defaultState.isExcludeTestData));
            dispatch(setSelectedGroupByOption(defaultState.selectedGroupByOption));
            dispatch(setSelectedBreakDownByOption(defaultState.selectedBreakDownByOption));
            // dispatch(setSubsidiarySearch(false));
            // dispatch(setSubsidiaryList(""));
            dispatch(setAppUuid(`${uuidv4()}`));
        })

    });


    return { submit, onClickClearFilter };
}

export default useFilterAction;