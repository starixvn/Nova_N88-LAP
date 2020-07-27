import React, { useState } from 'react';
import Loader from '@jsroot/components/Loader';
import LangHelper from '@jsroot/lib/langHelper'

export const Widget = props => {
    const { title, isLoading, children } = props;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const _renderTitle = () => {
        return (<div className="widget-title">
            <i className={`${(isCollapsed ? "arrow-up" : "arrow-down")} ${"arrow"}`} onClick={() => setIsCollapsed(!isCollapsed)}></i>
            <span>{title}</span>
        </div>)
    }

    const _renderNoData = () => {
        return (<p className="no-data-widget">
            {LangHelper.getSingleResource('NoInfo')}
        </p>)
    }

    return (<div className="widget">
        {_renderTitle()}
        {<div className="widget-content" style={{ display: isCollapsed ? 'none' : 'block' }}>
            <Loader isLoading={isLoading} />
            {children || _renderNoData()}
        </div>}
    </div>)
}

export default React.memo(Widget);