import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select'
import CollapsiblePanel from '@jsroot/components/collapsible-panel'
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import CheckBox from '@jsroot/components/CheckBox'
import LangHelper from '@jsroot/lib/langHelper'
import AppData from '@jsroot/lib/AppData'
import { DateRange } from '@jsroot/components/date-range';
import MultipleSelect from '@9softstudio/react-multiselect'
import CollectionHelper from '@jsroot/lib/collectionHelper';
import CurrencyHelper from '@jsroot/lib/currencyHelper'
import DateTimeHelper from '../libs/helpers/dateTimeHelper';
import ActionCreators from '../actions'
import { ViewModeOptions, CompareDateSelectionOptions, CompareDateOptionValues } from '../constants/filterConst';
import FilterHelper from '../libs/helpers/filterHelper';
import TimePeriodSelect from './common/TimePeriodSelect';

export const FormFilter = props => {
    const { setSelectedBrand, setSelectedBaseCurrency, setViewMode, setReportDate, setSelectedCurrency, setCompareDate, setAllowedCompare, setGlobalFilter, setCollapseFormFilter,
        selectedBrand, selectedBaseCurrency, reportDate, compareDate, allowedCompare, viewMode, selectedCurrency
    } = props;

    const currencyList = React.useMemo(() => CurrencyHelper.getTpCurrencyList(selectedBrand, AppData.brands), [selectedBrand]);
    var fromLastXDays = AppData.dateConstraint.userLimitDataRange > 0 ? AppData.dateConstraint.minDate : null;

    useEffect(() => {
        const selectedCurrency = currencyList.map(_ => _.key).join(',');
        setSelectedCurrency(selectedCurrency)
    }, [currencyList])

    const _renderBaseCurrencySelectList = () => {
        const baseCurrencyList = AppData.baseCurrencyList;
        return baseCurrencyList && baseCurrencyList.length && (
            <Select instanceId="baseCurrency"
                value={selectedBaseCurrency}
                options={baseCurrencyList}
                onChange={(item) => setSelectedBaseCurrency(item.value)} />
        );
    }

    const _renderCurrencySelectList = () => {
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

    const _renderBrandSelectList = () => {
        return (
            <Select instanceId="brandList"
                value={selectedBrand}
                options={AppData.brandOptions}
                onChange={(item) => {
                    setSelectedBrand(item.value)
                }} />
        );
    }

    const _renderViewModeOptions = () => {
        return (<RadioGroup
            name={'ViewMode'}
            value={viewMode}
            options={ViewModeOptions}
            onChange={setViewMode}
        />)
    }

    const _renderReportDateSelection = () => {       
        const dateConstraint = AppData.dateConstraint;
        return (
            <DateRange
                startDate={reportDate.fromDate} endDate={reportDate.toDate}
                minDate={dateConstraint.minDate} maxDate={dateConstraint.maxDate}
                today={AppData.today} limitedMonthRange={dateConstraint.limitedMonthRange}
                onChange={_onChangeReportDate}
            />
        )
    }

    const _onChangeReportDate = (range, isValidMonthRange = true) => {
        if (isValidMonthRange) {
            setReportDate(range);
        }
        else {
            const message = LangHelper.getSingleResource("DateRangeExceedMsg").replace("{0}", AppData.dateConstraint.limitedMonthRange);
            alert(message);
        }
    }

    const convertedReportDate = React.useMemo(() => {
        let { fromDate, toDate } = reportDate;
        const isStringFormat = typeof fromDate === 'string';
        fromDate = isStringFormat ? new Date(fromDate) : fromDate._d;
        toDate = isStringFormat ? new Date(toDate) : toDate._d;
        return {
            fromDate: DateTimeHelper.convertToDateStructure(fromDate),
            toDate: DateTimeHelper.convertToDateStructure(toDate),
        }
    }, [reportDate])

    const _renderCompareDateSelection = () => {
        return (<TimePeriodSelect
            selectOptions={CompareDateSelectionOptions}
            selectOptionGenerateRange={FilterHelper.CompareDateGenerateRangeSelections}
            selectedRange={compareDate}
            selectedDependRange={convertedReportDate}
            disabled={!allowedCompare}
            onChange={setCompareDate}
            defaultOption={CompareDateOptionValues.previousPeriod}
        />)
    }

    const _onSubmit = () => {
        const globalFilter = { reportDate, compareDate, viewMode, selectedBaseCurrency, selectedCurrency, selectedBrand, allowedCompare, fromLastXDays };
        setGlobalFilter(globalFilter);
    }

    return (<React.Fragment>
        <CollapsiblePanel className="page-filter" onCollapse={() => setCollapseFormFilter(true)} onExpand={() => setCollapseFormFilter(false)}>
            <div className="row">
                {AppData.brandOptions && AppData.brandOptions.length > 1 && <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Brand")}</label>
                        {_renderBrandSelectList()}
                    </div>
                </div>}
                <div className="col-12 col-md-3 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("ReportDate")}</label>
                        {_renderReportDateSelection()}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6 col-lg-5 col-xl-4">
                    <div className="form-group">
                        <CheckBox id="CompareDate"
                            checked={allowedCompare}
                            onChange={checked => setAllowedCompare(checked)}
                            label={LangHelper.getSingleResource("CompareDate")} 
                            disabled={AppData.dateConstraint.userLimitDataRange > 0}/>
                        {_renderCompareDateSelection()}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("ViewBy")}</label>
                        {_renderViewModeOptions()}
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Currency")}</label>
                        {_renderCurrencySelectList()}
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("BaseCurrency")}</label>
                        {_renderBaseCurrencySelectList()}
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                    <div className="form-group">
                        <div className="button-group">
                            <button type="button" className="btn btn-submit" disabled={!selectedCurrency} onClick={_onSubmit}>{LangHelper.getSingleResource("Submit")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </CollapsiblePanel>
    </React.Fragment>
    );
}

function mapStateToProps(state) {
    const { selectedBrand, selectedBaseCurrency, viewMode, reportDate, compareDate, allowedCompare, selectedCurrency } = state;
    return Object.assign({}, {
        selectedBrand,
        selectedBaseCurrency,
        viewMode,
        reportDate,
        compareDate,
        allowedCompare,
        selectedCurrency
    });
}

function mapDispatchToProps(dispatch) {
    const { setSelectedBrand, setSelectedBaseCurrency, setViewMode, setReportDate, setCompareDate, setAllowedCompare, setGlobalFilter, setCollapseFormFilter, setSelectedCurrency } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setSelectedBrand,
        setSelectedBaseCurrency,
        setViewMode,
        setReportDate,
        setCompareDate,
        setAllowedCompare,
        setGlobalFilter,
        setCollapseFormFilter,
        setSelectedCurrency
    }), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);