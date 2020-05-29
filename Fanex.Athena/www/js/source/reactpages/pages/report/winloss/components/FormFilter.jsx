import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select'
import MultipleSelect from '@9softstudio/react-multiselect'
import AutoComplete from '@jsroot/components/auto-complete'
import CollapsiblePanel from '@jsroot/components/collapsible-panel'
import CheckBox from '@jsroot/components/CheckBox'
import { DateRange } from '@jsroot/components/date-range'
import LangHelper from '@jsroot/lib/langHelper'
import AppData from '@jsroot/lib/AppData'
import ActionCreators from '../actions'
import GroupFilter from './filter/GroupFilter';
import QueryHelper from '../libs/helpers/queryHelper';
import CollectionHelper from '../libs/helpers/collectionHelper';
import { DateFilterTypes } from '../constants/filterConsts';
import { defaultPagingOption } from '../constants/gridContants';

export class FormFilter extends PureComponent {
    constructor(props) {
        super(props);
    }

    _renderDateRange() {
        const { dateRange } = this.props;
        const dateConstraint = AppData.dateConstraint;
        return (
            <DateRange
                startDate={dateRange.fromDate} endDate={dateRange.toDate}
                minDate={dateConstraint.minDate} maxDate={dateConstraint.maxDate}
                toDate={dateRange.toDate} limitedMonthRange={dateConstraint.limitedMonthRange}
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
        const currencyList = AppData.currencyList;
        const dataSource = CollectionHelper.createDataSourceFrom(currencyList, selectedCurrency);
        return currencyList && currencyList.length && (
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

    _renderDateTypeSelectList() {
        return (
            <Select instanceId="ddlDateType"
                value={this.props.selectedDateType}
                options={DateFilterTypes}
                onChange={(item) => this.props.setSelectedDateType(item.value)} />
        );
    }

    _renderProductSelectList() {
        const productOptions = AppData.productOptions;
        return productOptions && productOptions.length ? (
            <MultipleSelect id="ProductList"
                language={LangHelper.currentLanguage}
                dataSource={productOptions}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(currentItem, selectedItemsKey) => this.props.setSelectedProduct(selectedItemsKey)}
            />
        ) : null;
    }

    _handleSubmit = event => {
        event.preventDefault();
        const newRequestParam = QueryHelper.toAPIParams(this.props);
        this.props.setRequestParam(newRequestParam);
        this.props.fetchReportData(newRequestParam, QueryHelper.callBackToUpdateGridOption(defaultPagingOption.PageIndex, defaultPagingOption.PageSize));
    }

    render() {
        return (<React.Fragment>
            <CollapsiblePanel className="page-filter">
                <div className="row">
                    <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            {this._renderDateTypeSelectList()}
                            {this._renderDateRange()}
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Product")}</label>
                            {this._renderProductSelectList()}
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Username")}</label>
                            <AutoComplete
                                onSelect={(value) => this.props.setUsername(value)}
                                onInput={(value) => this.props.setUsername(value)}
                            />
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
                            <label className="label-text">{LangHelper.getSingleResource("DisplayCurrency")}</label>
                            {this._renderBaseCurrencySelectList()}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-2 col-sm-2 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <CheckBox id="ExcludeTestData"
                                checked={!this.props.isExcludeTest}
                                onChange={checked => this.props.changeIsExcludeTest(!checked)}
                                label={LangHelper.getSingleResource("IncludeTestData")} />
                        </div>
                    </div>
                    <div className="col-12 col-md-2 col-sm-2 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <CheckBox id="NoDraw"
                                checked={this.props.noDraw}
                                onChange={checked => this.props.setNoDraw(checked)}
                                label={LangHelper.getSingleResource("NoDraw")} />
                        </div>
                    </div>
                </div>
            </CollapsiblePanel>
            <GroupFilter isDisabledSubmit={!this.props.selectedCurrency || !this.props.selectedProduct} onSubmit={this._handleSubmit} />
        </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {
    const { fetchReportData, setSelectedDateType, setDateRange, setSelectedProduct, setUsername, setSelectedCurrency, setSelectedBaseCurrency,
        changeIsExcludeTest, setNoDraw, setRequestParam } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        fetchReportData,
        setSelectedDateType,
        setDateRange,
        setSelectedProduct,
        setUsername,
        setSelectedCurrency,
        setSelectedBaseCurrency,
        changeIsExcludeTest,
        setNoDraw,
        setRequestParam
    }), dispatch);
}

function mapStateToProps(state) {
    const { selectedDateType, dateRange, username, selectedProduct, selectedCurrency, selectedBaseCurrency,
        isExcludeTest, noDraw, selectedGroupByOption } = state;
    return Object.assign({}, {
        selectedDateType,
        dateRange,
        username,
        selectedProduct,
        isExcludeTest,
        noDraw,
        selectedCurrency,
        selectedBaseCurrency,
        selectedGroupByOption
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);