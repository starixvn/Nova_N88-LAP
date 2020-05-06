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
import DataSourceHelper from '@jsroot/lib/dataSourceHelper'
import AppData from '@jsroot/lib/AppData'
import ActionCreators from '../actions'

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
            const message = LangHelper.getSingleResource("DateRangeExceedMsg").replace("{0}", 1);
            alert(message);
        }
    }

    _renderCurrencySelectList() {
        const { selectedCurrency, setSelectedCurrency} = this.props;
        const currencyList = AppData.currencyList;
        const dataSource = DataSourceHelper.CreateDataSourceFrom(currencyList, selectedCurrency);
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
        const dateTypes = AppData.dateTypes;
        return dateTypes && dateTypes.length && (
            <Select instanceId="ddlDateType"
                value={this.props.selectedDateType}
                options={dateTypes}
                onChange={(item) => this.props.setSelectedDateType(item.value)} />
        );
    }

    _renderProductSelectList() {
        const productOptions = AppData.productOptions;
        return productOptions && productOptions.length ? (
            <MultipleSelect id="ProductList"
                language={LangHelper.currentLanguage}
                dataSource={productOptions}
                keyField={"Code"}
                valueField={"Name"}
                statusField={"Status"}
                onChange={(currentItem, selectedItemsKey) => this.props.setSelectedProduct(selectedItemsKey)}
            />
        ) : null;
    }

    render() {
        return (
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
                    <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Username")}</label>
                            <AutoComplete
                                onSelect={(value) => this.props.setUsername(value)}
                                onInput={(value) => this.props.setUsername(value)}
                                htmlAttributes={{ placeholder: LangHelper.getSingleResource("ExternalIdOrSystemId") }} />
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Currency")}</label>
                            {this._renderCurrencySelectList()}
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("BaseCurrency")}</label>
                        {this._renderBaseCurrencySelectList()}
                        </div>
                    </div>
                    <div className="col-12 col-md-2 col-sm-2 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <CheckBox id="ExcludeTestData"
                                checked={this.props.isExcludeTest}
                                onChange={checked => this.props.changeIsExcludeTest(checked)}
                                label={LangHelper.getSingleResource("ExcludeTestData")} />
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
        )
    }
}

function mapDispatchToProps(dispatch) {
    const { setSelectedDateType, setDateRange, setSelectedProduct, setUsername, setSelectedCurrency, setSelectedBaseCurrency, changeIsExcludeTest, setNoDraw } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setSelectedDateType,
        setDateRange,
        setSelectedProduct,
        setUsername,
        setSelectedCurrency,
        setSelectedBaseCurrency,
        changeIsExcludeTest,
        setNoDraw
    }), dispatch);
}

function mapStateToProps(state) {
    const { selectedDateType, dateRange, username, selectedProduct, selectedCurrency, selectedBaseCurrency, isExcludeTest, noDraw} = state;
    return Object.assign({}, {
        selectedDateType,
        dateRange,
        username,
        selectedProduct,
        isExcludeTest,
        noDraw,
        selectedCurrency,
        selectedBaseCurrency
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);