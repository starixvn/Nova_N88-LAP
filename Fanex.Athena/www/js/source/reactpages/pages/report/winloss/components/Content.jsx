import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pager } from '@9softstudio/react-grid';
import DataGrid from './DataGrid';
import GridCaption from './GridCaption';
import ActionCreators from '../actions'

export const Content = props => { 
    return (
        <div>
            <GridCaption />
            <DataGrid />
            <Pager />
        </div>
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