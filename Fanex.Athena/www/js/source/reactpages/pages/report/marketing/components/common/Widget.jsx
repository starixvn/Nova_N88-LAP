import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions';

export const Widget = props => {
    const { title, children } = props;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const _renderTitle = () => {
        return (<div className="widget-title">
            <i className={`${(isCollapsed ? "arrow-up" : "arrow-down")} ${"arrow"}`} onClick={() => setIsCollapsed(!isCollapsed)}></i>
            <span>{title}</span>
        </div>)
    }

    return (<div className="widget">
        {_renderTitle()}
        <div className="widget-content" style={{ display: isCollapsed ? 'none' : 'block' }}>
            {children}
        </div>
    </div>)
}

function mapStateToProps(state) {
    const { } = state;
    return Object.assign({}, {});
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Widget);