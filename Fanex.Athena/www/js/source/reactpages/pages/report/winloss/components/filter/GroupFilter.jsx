import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions';
import CollapsiblePanel from '@jsroot/components/collapsible-panel';
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import LangHelper from '@jsroot/lib/langHelper';
import { GroupByOptions } from '../../constants/filterConsts';

export const GroupFilter = props => {

    const { setSelectedGroupByOption, selectedGroupByOption, onSubmit } = props;

    const isDisabledSubmit = false;

    return (
        <CollapsiblePanel className="group-filter page-filter">
            <div className="form-group">
                <label className="label-text">{LangHelper.getSingleResource("GroupBy") + ":"}</label>
                <RadioGroup
                    name={'filterGroupBy'}
                    value={selectedGroupByOption}
                    options={GroupByOptions}
                    onChange={setSelectedGroupByOption}
                />
            </div>
            <div className="form-group">
                <div className="button-group">
                    <button type="button" className="btn btn-submit" disabled={isDisabledSubmit} onClick={onSubmit}>{LangHelper.getSingleResource("Submit")}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-1 note" style={{ flex: "0 0 4%" }}>
                    {LangHelper.getSingleResource('Note')}:
                    </div>
                <div className="col-9 note">
                    {LangHelper.getSingleResource('The report is reported in GMT+8')}
                    <br />
                    {LangHelper.getSingleResource('This report is reported gross revenue, have not yet deducted cost, fee, ect...')}
                </div>
            </div>
        </CollapsiblePanel>
    )
}

function mapDispatchToProps(dispatch) {
    const { setSelectedGroupByOption } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setSelectedGroupByOption
    }), dispatch)
}


function mapStateToProps(state) {
    const { selectedGroupByOption, requestParam } = state;
    return Object.assign({}, {
        selectedGroupByOption,
        requestParam
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GroupFilter));