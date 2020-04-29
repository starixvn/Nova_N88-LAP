import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';

export const FormFilter = props => { 
    return (
        <div>
            {'FormFilter'}}
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

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);