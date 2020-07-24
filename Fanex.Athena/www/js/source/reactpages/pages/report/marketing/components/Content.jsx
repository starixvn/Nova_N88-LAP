import React from 'react';
import { connect } from 'react-redux';
import ReportTitle from '@jsroot/components/ReportTitle';
import LangHelper from '@jsroot/lib/langHelper'
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import BPHighlightWidget from './widgets/BPHighlightWidget';

export const Content = props => {
    const { selectedBaseCurrency } = props;
    const _renderTitle = () => {
        const content = `${LangHelper.getSingleResource('Viewin').replace('{0}', selectedBaseCurrency)}`;
        return <ReportTitle tag="div" content={content} />
    }
    return (
        <div className="marketing-content">
            {_renderTitle()}
            <BPHighlightWidget />
        </div>
    )
}

function mapStateToProps(state) {
    const { isLoading, selectedBaseCurrency } = state; 
    return Object.assign({}, { isLoading, selectedBaseCurrency });
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);