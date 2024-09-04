import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select'
import MultipleSelect from '@legion-lib/react-multiselect'
import AutoComplete from '@jsroot/components/auto-complete'
import CollapsiblePanel from '@jsroot/components/collapsible-panel'
import CheckBox from '@jsroot/components/CheckBox'
import { DateRange } from '@jsroot/components/date-range'
import LangHelper from '@jsroot/lib/langHelper'
import CurrencyHelper from '@jsroot/lib/currencyHelper'
import AppData from '@jsroot/lib/AppData'
import ActionCreators from '../actions'
import GroupFilter from './filter/GroupFilter';
import QueryHelper from '../libs/helpers/queryHelper';
import CollectionHelper from '@jsroot/lib/collectionHelper';
import { DateFilterTypeOptions, UserNameFilterOptions } from '../constants/filterConsts';
import { defaultPagingOption, defaultSortOption } from '../constants/gridContants';
import SelectOption from '../components/filter/SelectOption';
import QueryService from '../libs/queryService';
import GridHelper from '../libs/helpers/gridHelper';
import { columnKeys } from '../constants/gridContants'

export class FormFilter extends PureComponent {
    constructor(props) {
        super(props);
        this.currencyList = CurrencyHelper.getTpCurrencyList(this.props.selectedBrand, AppData.brands);
    }

    componentDidMount() {
        this.props.fetchSettingData();
    }

    currencyList = [];

    _renderDateRange() {
        const { dateRange } = this.props;
        const dateConstraint = AppData.dateConstraint;
        return (
            <DateRange
                startDate={dateRange.fromDate} endDate={dateRange.toDate}
                minDate={dateConstraint.minDate} maxDate={dateConstraint.maxDate}
                today={dateRange.toDate} limitedMonthRange={dateConstraint.limitedMonthRange}
                onChange={this._onChangeDateRange}
            />
        )
    }

    _onChangeDateRange = (date, isValidMonthRange = true) => {
        if (isValidMonthRange) {
            this.props.setDateRange(date);
        }
        else {
            const message = LangHelper.getSingleResource("DateRangeExceedMsg").replace("{0}", AppData.dateConstraint.limitedMonthRange);
            alert(message);
        }
    }

    _renderCurrencySelectList() {
        const { selectedCurrency, setSelectedCurrency } = this.props;
        const currencyList = this.currencyList;
        const dataSource = CollectionHelper.createDataSourceFrom(currencyList, selectedCurrency);
        return currencyList && (
            <MultipleSelect id="ddlCurrency"
                language={LangHelper.currentLanguage}
                dataSource={dataSource}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(_, selectedItemsKey) => setSelectedCurrency(selectedItemsKey)} />);
    }

    _renderBaseCurrencySelectList() {
        const baseCurrencyList = AppData.baseCurrencyList;
        return baseCurrencyList && baseCurrencyList.length && (
            <Select instanceId="ddlBasedCurrency"
                value={this.props.selectedBaseCurrency}
                options={baseCurrencyList}
                onChange={(item) => this.props.setSelectedBaseCurrency(item.value)} />
        );
    }

    _renderTimezoneSelectList() {
        const timezones = this.props.settingData.timezones;
        return (
            <Select instanceId="ddlTimezone"
                value={this.props.selectedTimezone}
                options={timezones}
                onChange={(item) => this.props.setSelectedTimezone(item.value)} />
        );
    }

    _renderPlayerSelectList() {
        const playerListOptions = AppData.playerListOptions;
        return (
            <Select instanceId="ddlPlayerList"
                value={this.props.selectedPlayerList}
                options={playerListOptions}
                onChange={(item) => this.props.setSelectedPlayerList(item.value)} />
        );
    }


    _renderProductSelectList() {
        const productOptions = AppData.productOptions;
        return productOptions && productOptions.length ? (
            <MultipleSelect id="ProductList"
                hasSearchBox={true}
                language={LangHelper.currentLanguage}
                dataSource={productOptions}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(currentItem, selectedItemsKey) => this.props.setSelectedProduct(selectedItemsKey)}
                hasCheckAllBasedOnSearch={true}
            />
        ) : null;
    }

    _renderUserNameInputSearch() {
        const { userNameFilterOption, setUserNameFilterOption } = this.props;
        const optionName = UserNameFilterOptions.find(option => option.value === userNameFilterOption);
        const icon = AppData.isAllowedGroupByPlayerSingle ? "*" : "";
        return <>
            <label className="label-text">
                <span>{optionName.label + icon}</span>
                {<SelectOption name={'userNameInputSearch'}
                    value={userNameFilterOption}
                    onChange={value => setUserNameFilterOption(value)}
                    options={UserNameFilterOptions} />}
            </label>
            <AutoComplete
                onSelect={(value) => this.props.setUsername(value)}
                onInput={(value) => this.props.setUsername(value)}
            />
        </>
    }

    _renderDateFilter() {
        const { selectedDateType, setSelectedDateType } = this.props;
        const optionName = DateFilterTypeOptions.find(option => option.value === selectedDateType);
        return <>
            <label className="label-text">
                <span>{optionName.label}</span>
                {<SelectOption name={'dateTypeFilter'}
                    value={selectedDateType}
                    onChange={value => setSelectedDateType(value)}
                    options={DateFilterTypeOptions} />}
            </label>
            {this._renderDateRange()}
        </>
    }

    _renderBrandSelectList() {
        return (
            <MultipleSelect id="BrandList"
                language={LangHelper.currentLanguage}
                dataSource={AppData.brandOptions}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(currentItem, selectedItemsKey) => {
                    this.props.setSelectedBrand(selectedItemsKey);
                    this.currencyList = CurrencyHelper.getTpCurrencyList(selectedItemsKey, AppData.brands);
                    const selectedCurrency = this.currencyList.map(_ => _.key).join(',');
                    this.props.setSelectedCurrency(selectedCurrency)
                }}
            />
        )
    }

    _validateDateRangeSupportQuickDownload = dateRange => {
        const { fromDate, toDate } = dateRange;
        if (typeof fromDate === "string" || typeof toDate === "string") {
            return true;
        } else {
            const differentDays = toDate.diff(fromDate, 'days');
            return differentDays <= 30;
        }
    }

    _handleQuickDownload = event => {
        event.preventDefault();
        const { displayedColumns, dateRange, toggleLoader } = this.props;
        if (!this._validateDateRangeSupportQuickDownload(dateRange)) {
            alert(LangHelper.getSingleResource('QuickDownloadDateRangeExceedMsg'))
            return;
        }

        const params = {
            ...QueryHelper.toAPIParams({
                ...this.props,
                requestParam: {}
            }),
            orderCols: GridHelper.getOrderCols(displayedColumns, [
                columnKeys.noOfDeposit,
                columnKeys.totalDepositAmount,
                columnKeys.noOfWithdrawal,
                columnKeys.totalWithdrawalAmount,
                columnKeys.bonusAmount
            ])
        }
        toggleLoader(true);
        QueryService.exportReportDetailData(params, () => toggleLoader(false));

    }

    _handleSubmit = event => {
        event.preventDefault();
        const { displayedColumns } = this.props;
        const newRequestParam = QueryHelper.toAPIParams(this.props);
        this.props.setRequestParam({ ...newRequestParam, displayedColumns });
        this.props.fetchReportData(newRequestParam, QueryHelper.callBackToUpdateGridOption(defaultPagingOption.PageIndex, defaultPagingOption.PageSize,
            defaultSortOption.sortBy, defaultSortOption.sortType));
    }

    isNotValid = () => {
        return !this.props.selectedCurrency
            || !this.props.selectedProduct
            || !this.props.selectedGroupByOption
            || (AppData.isAllowedGroupByPlayerSingle && !this.props.username)
            || (AppData.playerListOptions && AppData.playerListOptions.length > 1 && !this.props.selectedPlayerList);
    }

    render() {
        return (<React.Fragment>
            <CollapsiblePanel className="page-filter">
                <div className="row">
                    <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                        <div className="form-group">
                            {this._renderDateFilter()}
                        </div>
                    </div>
                    {AppData.brandOptions && AppData.brandOptions.length > 1 && <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Brand")}</label>
                            {this._renderBrandSelectList()}
                        </div>
                    </div>}
                    <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Product")}</label>
                            {this._renderProductSelectList()}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6 col-lg-2 col-xl-2">
                        <div className="form-group">
                            {this._renderUserNameInputSearch()}
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Currency")}</label>
                            {this._renderCurrencySelectList()}
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("BaseCurrency")}</label>
                            {this._renderBaseCurrencySelectList()}
                        </div>
                    </div>
                    <div className="col-12 col-md-2 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("DisplayTimezone")}</label>
                            {this._renderTimezoneSelectList()}
                        </div>
                    </div>
                    {AppData.playerListOptions && AppData.playerListOptions.length > 1 && <div className="col-12 col-md-2 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("PlayerList")}</label>
                            {this._renderPlayerSelectList()}
                        </div>
                    </div>}
                    <div className="col-12 col-md-2 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <CheckBox id="ExcludeTestData"
                                checked={!this.props.isExcludeTest}
                                onChange={checked => this.props.changeIsExcludeTest(!checked)}
                                label={LangHelper.getSingleResource("IncludeTestData")} />
                        </div>
                    </div>
                    <div className="col-12 col-md-2 col-sm-2 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <CheckBox id="IncludeFreeSpins"
                                checked={this.props.includeFreeSpins}
                                onChange={checked => this.props.setIncludeFreeSpins(checked)}
                                label={LangHelper.getSingleResource("IncludeFreeSpins")} />
                        </div>
                    </div>
                    <div className="col-12 col-md-1 col-sm-2 col-lg-1 col-xl-1">
                        <div className="form-group">
                            <CheckBox id="NoDraw"
                                checked={this.props.noDraw}
                                onChange={checked => this.props.setNoDraw(checked)}
                                label={LangHelper.getSingleResource("NoDraw")} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-4 col-lg-4 col-xl-3">
                        <div className="form-group">
                            <CheckBox id="DrilldownInOriginalCurrency"
                                checked={this.props.drilldownInOriginalCurrency}
                                onChange={checked => this.props.setDrilldownInOriginalCurrency(checked)}
                                label={LangHelper.getSingleResource("DrilldownInOriginalCurrency")} />
                        </div>
                    </div>
                </div>
            </CollapsiblePanel>
            <GroupFilter
                isDisabledSubmit={this.isNotValid()} onSubmit={this._handleSubmit}
                onQuickDownload={this._handleQuickDownload}
            />
        </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    const { fetchReportData, fetchSettingData, setSelectedDateType, setSelectedBrand, setDateRange, setSelectedProduct, setUsername, setSelectedCurrency, setSelectedBaseCurrency,
        changeIsExcludeTest, setIncludeFreeSpins, setNoDraw, setRequestParam, setDrilldownInOriginalCurrency, setUserNameFilterOption, setSelectedTimezone, setSelectedPlayerList, toggleLoader } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        fetchReportData,
        fetchSettingData,
        setSelectedDateType,
        setSelectedBrand,
        setDateRange,
        setSelectedProduct,
        setUserNameFilterOption,
        setUsername,
        setSelectedCurrency,
        setSelectedBaseCurrency,
        changeIsExcludeTest,
        setIncludeFreeSpins,
        setNoDraw,
        setDrilldownInOriginalCurrency,
        setRequestParam,
        setSelectedTimezone,
        setSelectedPlayerList,
        toggleLoader,

    }), dispatch);
}

function mapStateToProps(state) {
    const { settingData, selectedDateType, dateRange, selectedBrand, username, selectedProduct, selectedCurrency, selectedBaseCurrency,
        isExcludeTest, includeFreeSpins, noDraw, selectedGroupByOption, drilldownInOriginalCurrency, userNameFilterOption, selectedTimezone, selectedPlayerList,
        selectedDataView, displayedColumns } = state;
    return Object.assign({}, {
        settingData,
        selectedDateType,
        dateRange,
        selectedBrand,
        userNameFilterOption,
        username,
        selectedProduct,
        isExcludeTest,
        includeFreeSpins,
        noDraw,
        drilldownInOriginalCurrency,
        selectedCurrency,
        selectedBaseCurrency,
        selectedGroupByOption,
        selectedTimezone,
        selectedPlayerList,
        displayedColumns,
        selectedDataView
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);