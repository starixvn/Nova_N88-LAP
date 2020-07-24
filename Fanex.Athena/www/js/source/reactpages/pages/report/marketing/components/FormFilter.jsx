import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Select from 'react-select'
import CollapsiblePanel from '@jsroot/components/collapsible-panel'
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import LangHelper from '@jsroot/lib/langHelper'
import AppData from '@jsroot/lib/AppData'
import ActionCreators from '../actions'

const CurrentPeriodSelectionOptions = [
    { value: 1, label: LangHelper.getSingleResource('Yesterday') },
    { value: 2, label: LangHelper.getSingleResource('Last7Days') },
    { value: 3, label: LangHelper.getSingleResource('Last30Days') }
]

const PreviousPeriodSelectionOptions = [
    { value: 1, label: LangHelper.getSingleResource('PreviousPeriod'), func: () => {} },
    { value: 2, label: LangHelper.getSingleResource('SamePeriodLastYear') }
]

const ViewByOptions = [
    { value: 1, label: LangHelper.getSingleResource('Daily') },
    { value: 2, label: LangHelper.getSingleResource('Weekly') }
]

const PeriodSelection = props => {
    const { selection, selections, onChange } = props;

    const _onChange = item => {
        onChange && onChange(item.value);
    }

    const _renderSelections = () => {
        return selections && selections.length && (
            <Select instanceId="ddlSelection"
                value={'1'}
                options={selections}
                onChange={_onChange} />
        );
    }

    return (
        <div className="row">
            <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-5">
                <div className="form-group">
                    {_renderSelections()}
                </div>
            </div>
            <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-7">
                <div className="form-group">
                    <input type="text" className="input-text" value={'abc'} disabled={true}/>
                </div>
            </div>
        </div>
    )
}

export const FormFilter = props => {
    const { selectedBaseCurrency, setSelectedBaseCurrency, setViewMode } = props;
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

    const _renderCurrentPeriodSelection = () => {
        return (<PeriodSelection
            displayName={'abc'}
            selections={CurrentPeriodSelectionOptions}
            onChange={() => { }}
        />)
    }


    const _renderPreviousPeriodSelection = () => {
        return (<PeriodSelection
            displayName={'abc'}
            selections={PreviousPeriodSelectionOptions}
            onChange={() => { }}
        />)
    }

    const _onSubmit = () => {
    }

    return (<React.Fragment>
        <CollapsiblePanel className="page-filter">
            <div className="row">
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("ReportDate")}</label>
                        {_renderCurrentPeriodSelection()}
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("CompareDate")}</label>
                        {_renderPreviousPeriodSelection()}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("ViewBy")}</label>
                        {_renderViewModeOptions()}
                    </div>
                </div>
                <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
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
    const { selectedBaseCurrency, viewMode } = state;
    return Object.assign({}, {
        selectedBaseCurrency,
        viewMode
    });
}

function mapDispatchToProps(dispatch) {
    const { setSelectedBaseCurrency, setViewMode } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setSelectedBaseCurrency,
        setViewMode
    }), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);