import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pager } from '@9softstudio/react-grid';
import GridData from './grid/GridData';
import GridCaption from './grid/GridCaption';
import ActionCreators from '../actions'

export const Content = props => { 
    return (
        <>
            <GridCaption />
            <GridData />
            <Pager />
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Content);