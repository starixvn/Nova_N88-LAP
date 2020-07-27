import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select'
import CollapsiblePanel from '@jsroot/components/collapsible-panel'
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import LangHelper from '@jsroot/lib/langHelper'
import AppData from '@jsroot/lib/AppData'
import ActionCreators from '../actions'
import { ViewByOptions, ViewByOptionKeys, ReportDateSelectionOptions, CompareDateSelectionOptions, CompareDateOptionValues } from '../constants/filterConst';
import FilterHelper from '../libs/helpers/filterHelper';
import TimePeriodSelect from './common/TimePeriodSelect';

export const FormFilter = props => {
    const { setSelectedBaseCurrency, setViewMode, setReportDate, setCompareDate, setGlobalFilter,
        selectedBaseCurrency, reportDate, compareDate
    } = props;

    const _renderBaseCurrencySelectList = () => {
        const baseCurrencyList = AppData.baseCurrencyList;
        return baseCurrencyList && baseCurrencyList.length && (
            <Select instanceId="ddlBasedCurrency"
                value={selectedBaseCurrency}
                options={baseCurrencyList}
                onChange={(item) => setSelectedBaseCurrency(item.value)} />
        );
    }

    const _renderViewModeOptions = () => {
        return (<RadioGroup
            name={'ViewBy'}
            value={ViewByOptions[0].value}
            options={ViewByOptions}
            onChange={setViewMode}
        />)
    }

    const _renderReportDateSelection = () => {
        return (<TimePeriodSelect
            selectOptions={ReportDateSelectionOptions}
            selectOptionGenerateRange={FilterHelper.ReportDateGenerateRangeSelections}
            selectedRange={reportDate}
            onChange={selectedRange => {
                setReportDate(selectedRange);
                setCompareDate(FilterHelper.CompareDateGenerateRangeSelections[CompareDateOptionValues.previousPeriod](selectedRange)); //reset to default selection
            }}
        />)
    }

    const _renderCompareDateSelection = () => {
        return (<TimePeriodSelect
            selectOptions={CompareDateSelectionOptions}
            selectOptionGenerateRange={FilterHelper.CompareDateGenerateRangeSelections}
            selectedRange={compareDate}
            selectedDependRange={reportDate}
            onChange={selectedRange => setCompareDate(selectedRange)}
        />)
    }

    const _onSubmit = () => {
        const globalFilter = { reportDate, compareDate, selectedBaseCurrency };
        setGlobalFilter(globalFilter);
    }

    return (<React.Fragment>
        <CollapsiblePanel className="page-filter">
            <div className="row">
                <div className="col-12 col-md-6 col-sm-6 col-lg-5 col-xl-3">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("ReportDate")}</label>
                        {_renderReportDateSelection()}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6 col-lg-5 col-xl-3">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("CompareDate")}</label>
                        {_renderCompareDateSelection()}
                    </div>
                </div>
            </div>
            <div className="row">
                {/* <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("ViewBy")}</label>
                        {_renderViewModeOptions()}
                    </div>
                </div> */}
                {/* <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("DisplayCurrency")}</label>
                        {_renderBaseCurrencySelectList()}
                    </div>
                </div> */}
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                    <div className="form-group">
                        <div className="button-group">
                            <button type="button" className="btn btn-submit" disabled={false} onClick={_onSubmit}>{LangHelper.getSingleResource("Submit")}</button>
                        </div>
                    </div>
                </div>
            </div>
        </CollapsiblePanel>
    </React.Fragment>
    );
}

function mapStateToProps(state) {
    const { selectedBaseCurrency, viewMode, reportDate, compareDate } = state;
    return Object.assign({}, {
        selectedBaseCurrency,
        viewMode,
        reportDate,
        compareDate
    });
}

function mapDispatchToProps(dispatch) {
    const { setSelectedBaseCurrency, setViewMode, setReportDate, setCompareDate, setGlobalFilter } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setSelectedBaseCurrency,
        setViewMode,
        setReportDate,
        setCompareDate,
        setGlobalFilter
    }), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);