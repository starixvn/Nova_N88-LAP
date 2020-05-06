import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from '@jsroot/components/Loader';
import AppLayout from '@jsroot/layouts/AppLayout';
import ActionCreators from '../actions';
import FormFilter from './FormFilter';
import Content from './Content';

export const AppContainer = props => {
    return (
        <AppLayout className="winloss-report">
                <Loader isLoading={props.isLoading}/>
                <FormFilter />
                <Content />
        </AppLayout>
    )
}

function mapStateToProps(state) {
    const { isLoading } = state; 
    return Object.assign({}, { isLoading });
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);