import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select'
import CollapsiblePanel from '@jsroot/components/collapsible-panel'
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import LangHelper from '@jsroot/lib/langHelper'
import AppData from '@jsroot/lib/AppData'
import ActionCreators from '../actions'
import { ViewModeOptions, ReportDateSelectionOptions, CompareDateSelectionOptions, CompareDateOptionValues, ViewModeOptionValues } from '../constants/filterConst';
import FilterHelper from '../libs/helpers/filterHelper';
import TimePeriodSelect from './common/TimePeriodSelect';

export const FormFilter = props => {
    const { setSelectedBaseCurrency, setViewMode, setReportDate, setCompareDate, setGlobalFilter, setCollapseFormFilter,
        selectedBaseCurrency, reportDate, compareDate, viewMode
    } = props;

    const _isSupportViewMode = React.useMemo(() => {
        return FilterHelper.isSupportViewMode(reportDate);
    }, [reportDate])

    const _renderBaseCurrencySelectList = () => {
        const baseCurrencyList = AppData.baseCurrencyList;
        return baseCurrencyList && baseCurrencyList.length && (
            <Select instanceId="baseCurrency"
                value={selectedBaseCurrency}
                options={baseCurrencyList}
                onChange={(item) => setSelectedBaseCurrency(item.value)} />
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

    const _onChangeReportDateSelection = React.useCallback(selectedRange => {
        setReportDate(selectedRange);
        setCompareDate(FilterHelper.CompareDateGenerateRangeSelections[CompareDateOptionValues.previousPeriod](selectedRange)); //reset to default selection
    })

    const _onChangeCompareDateSelection = React.useCallback(selectedRange => setCompareDate(selectedRange))

    const _renderReportDateSelection = () => {
        return (<TimePeriodSelect
            selectOptions={ReportDateSelectionOptions}
            selectOptionGenerateRange={FilterHelper.ReportDateGenerateRangeSelections}
            selectedRange={reportDate}
            onChange={_onChangeReportDateSelection}
        />)
    }

    const _renderCompareDateSelection = () => {
        return (<TimePeriodSelect
            selectOptions={CompareDateSelectionOptions}
            selectOptionGenerateRange={FilterHelper.CompareDateGenerateRangeSelections}
            selectedRange={compareDate}
            selectedDependRange={reportDate}
            onChange={_onChangeCompareDateSelection}
        />)
    }

    const _onSubmit = () => {
        const _viewMode = _isSupportViewMode ? viewMode : ViewModeOptionValues.Daily;
        const globalFilter = { reportDate, compareDate, viewMode: _viewMode, selectedBaseCurrency };
        setGlobalFilter(globalFilter);
    }

    return (<React.Fragment>
        <CollapsiblePanel className="page-filter" onCollapse={() => setCollapseFormFilter(true)} onExpand={() => setCollapseFormFilter(false)}>
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
                {_isSupportViewMode && <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("ViewBy")}</label>
                        {_renderViewModeOptions()}
                    </div>
                </div>}
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-1">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("DisplayCurrency")}</label>
                        {_renderBaseCurrencySelectList()}
                    </div>
                </div>
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
    const { setSelectedBaseCurrency, setViewMode, setReportDate, setCompareDate, setGlobalFilter, setCollapseFormFilter } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setSelectedBaseCurrency,
        setViewMode,
        setReportDate,
        setCompareDate,
        setGlobalFilter,
        setCollapseFormFilter
    }), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);