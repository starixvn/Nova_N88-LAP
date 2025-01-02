import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import moment from 'moment'
import { ToastContainer, toast, Flip } from 'react-toastify';

import Select from 'react-select'
import MultipleSelect from '@9softstudio/react-multiselect'
import { DateRange } from '@jsroot/components/date-range'
import AutoComplete from '@jsroot/components/auto-complete'
import CheckBox from '@jsroot/components/CheckBox'
import CollapsiblePanel from '@jsroot/components/collapsible-panel'
import UserGuide from '@jsroot/components/UserGuide'
import CurrencyHelper from '@jsroot/lib/currencyHelper'
import { ActionCreators } from '../actions/index.js'
import LangHelper from '@jsroot/lib/langHelper'
import Site from '@jsroot/lib/site'
import AppData from '@jsroot/lib/AppData'
import { TreeViewOption } from '@jsroot/constants/report';
import { TreeViewSelect } from '@legion-lib/react-multiselect'
import DataService from '@jsroot/lib/DataService.js'
import Service from '../../common/lib/Service'
import { ApiUrl, CashOutMode, ProductCode } from '../../common/lib/constants'
import { validateBaseCurrency } from '@jsroot/lib/validationHelper'
import {decode} from '@jsroot/lib/htmlHelper';
import NumberFormat from '@jsroot/lib/numberFormat'

const ToastMsg = props => (
    <div>
        <div>{decode(LangHelper.getSingleResource("BTCMaxTicketLimitMsg")).replace("{0}", NumberFormat.formatInteger(props.limit))}</div>
    </div>
)
export class FormFilter extends Component {
    constructor(props) {
        super(props);
        this.baseCurrencyList = AppData.baseCurrencyList;
        this.defaultBaseCurrency = props.selectedBaseCurrency;
        this.currencyList = CurrencyHelper.getAgentCurrencyList(this.props.selectedBrand, AppData.brands);
    }

    componentDidMount() {
        this._onChangeProduct(null, this.props.selectedProduct);
    }

    _showExportWarning = limitRows => {
        toast.success(<ToastMsg limit={limitRows}/>);
    }

    _isEnableLeagueMatch = () => {
        const productCode = this.props.selectedProduct;
        return (productCode === 'SB' || productCode === 'BA') && this.isSingleDate();
    }

    get isValidModel() {
        return !!this.props.selectedProduct
            && !!this.props.selectedStatus
            && !!this.props.selectedLiveStatus
            && !!this.props.selectedCurrency
            && !!this.props.selectedBettype
            && !!this.props.selectedSport
            && validateBaseCurrency(this.props.selectedBaseCurrency);
    }

    isSingleDate = (dateRange) => {
        const { fromDate, toDate } = dateRange || this.props.dateRange;
        return moment(fromDate, "MM/DD/YYYY", true).isSame(moment(toDate, "MM/DD/YYYY", true), 'day');
    }

    submit = (event) => {
        event.preventDefault();
        const params = this._getParams();
        if (!params) {
            return;
        }

        toast.dismiss();
        const title = Service.getTitle(params.FromDate, params.ToDate, params.IsConvertAll ? params.BaseCurrencyName : '');
        this.props.setReportTitle(title);
        this.props.setRequestParam(params);
        this.props.toggleLoader(true);
        this.props.getGridData(ApiUrl.ADVANCEDSEARCH_DATA_URL, params);
    }

    _getParams() {
        if (!this.isValidModel) {
            return null;
        }

        const { fromDate, toDate } = this.props.dateRange;
        const { PageSize, SortBy, SortOrder } = this.props.requestParam;

        const isEnableLeagueMatch = this._isEnableLeagueMatch();
        const baseCurrency = this.baseCurrencyList.find(x => x.value === this.props.selectedBaseCurrency);
        return {
            PageSize: PageSize,
            PageIndex: 1,
            FromDate: Site.convertDateToString(fromDate),
            ToDate: Site.convertDateToString(toDate),
            BrandId: this.props.selectedBrand,
            ProductCodeList: this.props.selectedProduct,
            Username: this.props.username,
            CurrencyIdList: this.props.selectedCurrency,
            BaseCurrency: this.props.selectedBaseCurrency,
            Status: this.props.selectedStatus,
            LiveStatus: this.props.selectedLiveStatus,
            SportIds: Service.getNormalizedSelectedParamValueForTreeListFilter(this.props.selectedSport, this.props.sportList),
            BetTypeIds: Service.getSelectedBettype(this.props.selectedBettype, this.props.bettypeList),
            CashOutMode: this.props.selectedCashOutMode,
            LeagueId: isEnableLeagueMatch ? this.props.selectedLeague : 0,
            MatchId: isEnableLeagueMatch ? this.props.selectedMatch : 0,
            SortBy: SortBy,
            SortOrder: SortOrder,
            IsConvertAll: this.props.isConvertAll,
            BaseCurrencyName: baseCurrency ? baseCurrency.label : ''
        }
    }

    exportExcel = (event) => {
        event.preventDefault();

        const params = this._getParams();
        if (!params) {
            return;
        }

        params.IsExport = true;
        this.props.toggleLoader(true);
        DataService.getFile(ApiUrl.ADVANCEDSEARCH_DATA_URL, params).then((response) => {
            toast.dismiss();
            const contentType = response.headers["content-type"];
            if (contentType && contentType.indexOf('application/json') > -1) {
                const RowsExceedLimitErrorCode = 1001;
                Site.readAsJson(response.data, (result) => {
                    if (result.ErrorCode === RowsExceedLimitErrorCode) {
                        this._showExportWarning(result.LimitRows);
                    }
                    else {
                        const msg = result.ErrorMsg || LangHelper.getSingleResource("ErrorProcessingMsg");
                        alert(msg);
                    }
                });
            } else {
                const NoContentStatusCode = 204;
                if (response.status === NoContentStatusCode) {
                    alert(LangHelper.getSingleResource("NoInfo"));
                }
                else {
                    const fileName = "BetHistory_AdvancedSearch." +
                        (response.headers["content-type"] === "application/zip" ? "zip" : "xls");

                    Site.downloadFile(response.data, fileName);
                }
            }

            this.props.toggleLoader(false);
        }).catch(error => {
            alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
            this.props.toggleLoader(false);
        });
    }

    showUserGuide = () => {
        const userGuideContent = this.props.userGuideContent;

        if (!userGuideContent || userGuideContent.length === 0) {
            this.props.getUserGuideContent('BettingTicketCenterAdvancedSearch');
        }
    }

    _renderUserGuide() {
        const userGuideContent = this.props.userGuideContent;

        return (<UserGuide
            title={LangHelper.getSingleResource("UserGuide")}
            contentTitle={LangHelper.getSingleResource("BetHistory")}
            onClick={this.showUserGuide}
            content={userGuideContent} />)
    }

    _renderDateRange() {
        const dateRange = this.props.dateRange;
        const dateConstraint = AppData.dateConstraint;

        return (
            <DateRange startDate={dateRange.fromDate} endDate={dateRange.toDate}
                minDate={dateConstraint.minDate} maxDate={dateConstraint.maxDate}
                today={dateRange.toDate} limitedMonthRange={dateConstraint.limitedMonthRange}
                onChange={this._onChangeDateRange} />
        )
    }

    _onChangeDateRange = (date, isValidMonthRange = true) => {
        if (isValidMonthRange) {
            this.props.setDateRange(date);
            this.props.getBettypeList(this.props.selectedProduct, this.isSingleDate({ fromDate: date.startDate, toDate: date.endDate }));
            if (this._isEnableLeagueMatch()) {
                this.props.getLeagueList(this.props.selectedSport, date.startDate);
            }
        }
        else {
            const message = LangHelper.getSingleResource("DateRangeExceedMsg").replace("{0}", AppData.dateConstraint.limitedMonthRange);
            alert(message);
        }
    }

    _renderProductSelectList() {
        const productList = this.props.productList;

        return productList && productList?.length ? (
            <MultipleSelect id="ProductList"
                hasSearchBox={true}
                language={LangHelper.currentLanguage}
                dataSource={productList}
                valueField={"value"}
                keyField={"id"}
                statusField={"status"}
                onChange={this._onChangeProduct}
                isValid={!!this.props.selectedProduct} />
        ) : null;
    }

    _onChangeProduct = (currentItem, selectedItemsKey) => {
        this.props.setSelectedProduct(selectedItemsKey);
        this.props.getSportList(selectedItemsKey, this.isSingleDate() && this.props.dateRange.fromDate);
        this.props.getBettypeList(selectedItemsKey);
    }

    _renderSportSelectList() {
        const sportList = this.props.sportList;

        if(!sportList || !sportList.length){
            return(
            <TreeViewSelect
                language={LangHelper.currentLanguage}
                id="SportList"
                dataSource={[]}
                keyField="Value"
                valueField="Name"
                statusField="Checked"
                texts={{ All: LangHelper.getSingleResource("N_A") }}
                isAllTextShown={true}
                hasSearchBox={true}
                treeViewOption={TreeViewOption}
                isValid={false} />
            )
        }

        return (
            <TreeViewSelect              
                language={LangHelper.currentLanguage}
                id="SportList"
                dataSource={sportList}
                keyField="Value"
                valueField="Name"
                statusField="Checked"
                isAllTextShown={true}
                hasSearchBox={true}
                treeViewOption={TreeViewOption}
                onChange={this._onChangeSport}
                isValid={!!this.props.selectedSport}  />
        );
    }

    _onChangeSport = (currentItem, selectedItemsKey) => {
        this.props.setSelectedSport(selectedItemsKey);
        if (this._isEnableLeagueMatch()) {
            this.props.getLeagueList(selectedItemsKey, this.props.dateRange.fromDate);
        }
    }


    _renderBettypeSelectList() {
        const bettypeList = this.props.bettypeList;

        if(!bettypeList || !bettypeList.length){
            return (
                <TreeViewSelect
                    language={LangHelper.currentLanguage}
                    id="BetTypeList"
                    dataSource={[]}
                    keyField="Value"
                    valueField="Name"
                    statusField="Checked"
                    texts={{ All: LangHelper.getSingleResource("N_A")  }}
                    isAllTextShown={true}
                    hasSearchBox={true}
                    treeViewOption={TreeViewOption}
                    isValid={false} />
            );
        }
        return (
            <TreeViewSelect                  
                language={LangHelper.currentLanguage}
                id="BetTypeList"
                dataSource={bettypeList}
                keyField="Value"
                valueField="Name"
                statusField="Checked"
                isAllTextShown={true}
                hasSearchBox={true}
                treeViewOption={TreeViewOption}
                onChange={(currentItem, selectedItemsKey) => this.props.setSelectedBettype(selectedItemsKey)}
                isValid={!!this.props.selectedBettype}  />
        );
    }

    _renderLeagueSelectList() {
        const leagueList = this.props.leagueList;

        return leagueList && leagueList.length && (
            <Select disabled={!this._isEnableLeagueMatch()} instanceId="LeagueList"
                value={this.props.selectedLeague}
                options={leagueList}
                onChange={(item) => this._onChangeLeague(item.value)} />
        );
    }

    _onChangeLeague = (leagueId) => {
        this.props.setSelectedLeague(leagueId);
        if (this.isSingleDate()) {
            this.props.getMatchList(this.props.selectedSport.value, leagueId, this.props.dateRange.fromDate);
        }
    }

    _renderMatchSelectList() {
        const matchList = this.props.matchList;

        return matchList && matchList.length && (
            <Select disabled={!this._isEnableLeagueMatch()} instanceId="MatchList"
                value={this.props.selectedMatch}
                options={matchList}
                onChange={(item) => this.props.setSelectedMatch(item.value)} />
        );
    }

    _renderCurrencySelectList() {
        const currencyList = this.currencyList;

        return currencyList && (
            <MultipleSelect id="ddlCurrency"
                language={LangHelper.currentLanguage}
                dataSource={currencyList}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(currentItem, selectedItemsKey) => this._onChangeCurrency(selectedItemsKey)} />);
    }

    _onChangeCurrency = (currencyIdList) => {
        let baseCurrency = "";
        if (!currencyIdList || currencyIdList.indexOf(',') > 0) { // none or multi currencies
            this.baseCurrencyList = AppData.baseCurrencyList;
            baseCurrency = this.baseCurrencyList.find(x => x.label === this.props.selectedBaseCurrency) ?
                this.props.selectedBaseCurrency :
                this.defaultBaseCurrency;
        }
        else {
            const currencyName = this.currencyList.find(x => x.key == currencyIdList).value;

            if (!this.baseCurrencyList.find(x => x.label === currencyName)) {
                baseCurrency = '';
                this.baseCurrencyList = AppData.baseCurrencyList.slice(0);
                this.baseCurrencyList.push({ value: baseCurrency, label: currencyName });
            }
            else {
                baseCurrency = currencyName;
            }
        }

        this.props.setSelectedCurrency(currencyIdList)
        this.props.setSelectedBaseCurrency(baseCurrency);
    }

    _renderBaseCurrencySelectList() {
        const baseCurrencyList = this.baseCurrencyList;

        return baseCurrencyList && baseCurrencyList.length && (
            <Select instanceId="ddlBased"
                value={this.props.selectedBaseCurrency}
                options={baseCurrencyList}
                onChange={(item) => this.props.setSelectedBaseCurrency(item.value)} />
        );
    }

    _renderStatusSelectList() {
        const statusList = AppData.statusList;

        return statusList && statusList.length && (
            <MultipleSelect id="StatusList"
                language={LangHelper.currentLanguage}
                dataSource={statusList}
                keyField={"Id"}
                valueField={"Value"}
                statusField={"Status"}
                onChange={(currentItem, selectedItemsKey) => this.props.setSelectedStatus(selectedItemsKey)} />);
    }

    _renderLiveStatusSelectList() {
        const liveStatusList = AppData.liveStatusList;

        return liveStatusList && liveStatusList.length && (
            <MultipleSelect id="LiveStatusList"
                language={LangHelper.currentLanguage}
                dataSource={liveStatusList}
                keyField={"Id"}
                valueField={"Value"}
                statusField={"Status"}
                onChange={(currentItem, selectedItemsKey) => this.props.setSelectedLiveStatus(selectedItemsKey)} />);
    }

    _renderBrandSelectList() {
        return (
            <Select instanceId="brandList"
                value={this.props.selectedBrand}
                options={AppData.brandOptions}
                onChange={item => {
                    this.props.setSelectedBrand(item.value);
                    this.currencyList = CurrencyHelper.getAgentCurrencyList(item.value, AppData.brands);
                    const selectedCurrency = this.currencyList.map(_ => _.key).join(',');
                    this.props.setSelectedCurrency(selectedCurrency);
                    this.props.setSelectedBaseCurrency(this.defaultBaseCurrency);
                }}
            />
        );
    }

    _renderCashOutMode() {
        const cashOutModeList = AppData.cashOutModeList;
        const isEnableCashOutFilter = Service.isContainProductSportBookOrBa(this.props.selectedProduct);

        return cashOutModeList && cashOutModeList.length && (
            <Select
                instanceId="CashOutMode"
                value={this.props.selectedCashOutMode}
                options={cashOutModeList}
                disabled={!isEnableCashOutFilter}
                onChange={this._onChangeCashOutMode} />
        );
    }

    _onChangeCashOutMode = item => {
        if (item.value === CashOutMode.ViewCOOnly) {
            const selectedProduct = AppData.productList.filter(product => product.id == ProductCode.BA || product.id == ProductCode.SportsBook)
                .map(product => product.id)
                .join(',');
            const productList = AppData.productList.map(product => product.id == ProductCode.SportsBook || product.id == ProductCode.BA ? product : { ...product, status: false });
            this.props.setSelectedProduct(selectedProduct);
            this.props.setProductList(productList);
        }
        this.props.setSelectedCashOutMode(item.value);
    }

    render() {
        const excelButton = <div>
            <i className="icon-excel right" onClick={this.exportExcel} title={LangHelper.getSingleResource("ExportToExcel")}></i>
            {this._renderUserGuide()}
        </div>;

        return (
            <CollapsiblePanel className="page-filter" stickyFooter={excelButton}>
                <div className="row">
                    <ToastContainer
                        autoClose={10000}
                        pauseOnFocusLoss={false}
                        position="top-left"
                        style={{ width: "500px" }}
                        transition={Flip} />
                    {AppData.allowSelectBrand &&
                        <div className="col-12 col-md-3 col-sm-6 col-lg-4 col-xl-2">
                            <div className="form-group">
                                <label className="label-text">{LangHelper.getSingleResource("Brand")}</label>
                                {this._renderBrandSelectList()}
                            </div>
                        </div>}
                    <div className="col-12 col-md-3 col-sm-6 col-lg-4 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Date")}</label>
                            {this._renderDateRange()}
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-6 col-lg-4 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Product")}</label>
                            {this._renderProductSelectList()}
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-3 col-lg-4 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Sport")}</label>
                            {this._renderSportSelectList()}
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-3 col-lg-4 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("BetType")}</label>
                            {this._renderBettypeSelectList()}
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-3 col-lg-4 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("League")}</label>
                            {this._renderLeagueSelectList()}
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-3 col-lg-4 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Match")}</label>
                            {this._renderMatchSelectList()}
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-3 col-lg-4 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Username")}</label>
                            <AutoComplete url={ApiUrl.CUSTOMER_SEARCH_URL}
                                onSelect={(value) => this.props.setUsername(value)}
                                onInput={(value) => this.props.setUsername(value)}
                                htmlAttributes={{ placeholder: LangHelper.getSingleResource("ExternalIdOrSystemId") }} />
                        </div>
                    </div>

                    {AppData.isOfferCashOutProduct &&
                        <div className="col-12 col-md-3 col-sm-6 col-lg-4 col-xl-2">
                            <div className="form-group">
                                <label className="label-text">{LangHelper.getSingleResource("CashOut")}</label>
                                {this._renderCashOutMode()}
                            </div>
                        </div>
                    }

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

                    <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <CheckBox id="IsConvertAll"
                                checked={this.props.isConvertAll}
                                onChange={(checked) => this.props.changeIsConvertAll(checked)}
                                label={LangHelper.getSingleResource("ConvertAllFiguresToBaseCurrency")} />
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-3 col-lg-4 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Status")}</label>
                            {this._renderStatusSelectList()}
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Live")}</label>
                            {this._renderLiveStatusSelectList()}
                        </div>
                    </div>

                    <div className="col-12 col-md-2 col-sm-2 col-lg-2 col-xl-1">
                        <div className="form-group">
                            <div className="button-group">
                                <button type="button" disabled={!this.isValidModel} className="btn btn-submit" onClick={this.submit}>{LangHelper.getSingleResource("Submit")}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-1" style={{ flex: "0 0 4%" }}>
                        {LangHelper.getSingleResource('Note')}:
                    </div>
                    <div className="col-9">
                        * {LangHelper.getSingleResource('BettingTicketCenter_AdvancedSearchTabNote1')}
                        <br />
                        * {LangHelper.getSingleResource('BettingTicketCenter_AdvancedSearchTabNote2').replace("{0}", AppData.dateConstraint.minDate)}
                    </div>
                </div>

            </CollapsiblePanel>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}
function mapStateToProps(state) {
    const { requestParam, selectedBrand, dateRange, selectedProduct, sportList, selectedSport, selectedBettype, bettypeList, selectedLeague, leagueList, selectedMatch, matchList,
        selectedCurrency, baseCurrencyList, selectedBaseCurrency, selectedStatus, selectedLiveStatus, username, isConvertAll, userGuideContent, productList, selectedCashOutMode } = state;

    return Object.assign({}, {
        requestParam, selectedBrand, dateRange, selectedProduct, sportList, selectedSport, selectedBettype, bettypeList, selectedLeague, leagueList, selectedMatch, matchList,
        selectedCurrency, baseCurrencyList, selectedBaseCurrency, selectedStatus, selectedLiveStatus, username, isConvertAll, userGuideContent, productList, selectedCashOutMode
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);
