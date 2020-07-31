import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppLayout from '@jsroot/layouts/AppLayout';
import ActionCreators from '../actions';
import FormFilter from './FormFilter';
import Content from './Content';

export const AppContainer = props => {
    return (<AppLayout className="marketing-report">
        <FormFilter />
        <Content />
    </AppLayout>)
}

function mapStateToProps(state) {
    const { } = state;
    return Object.assign({}, { });
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);