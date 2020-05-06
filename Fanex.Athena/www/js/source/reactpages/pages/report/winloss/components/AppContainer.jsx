import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import AppLayout from '@jsroot/layouts/AppLayout';
import FormFilter from './FormFilter';
import GroupFilter from './GroupFilter';
import Content from './Content';

export const AppContainer = props => {
    return (
        <AppLayout className="winloss-report">
                <FormFilter />
                <GroupFilter />
                <Content />
        </AppLayout>
    )
}

function mapStateToProps(state) {
    const { } = state;
    return Object.assign({}, {});
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);