import React, { useState } from 'react';
import Loader from '@jsroot/components/Loader';
import LangHelper from '@jsroot/lib/langHelper';

export const Widget = props => {
    const { title, isLoading, handleExportExcel, hasData, children } = props;
    const [isCollapsed, setIsCollapsed] = useState(false);

    const _renderTitle = () => {
        return (<div className="widget-title">
            <i className="icon-arrow" style={{ transform: isCollapsed ? 'rotate(-180deg)' : null }} onClick={() => setIsCollapsed(!isCollapsed)}></i>
            <span>{title}</span>
            {handleExportExcel && <span className="caret-block">
                <span className="icon-excel-wrapper" onClick={handleExportExcel}>
                    <i className="icon-excel" title={LangHelper.getSingleResource('ExportToExcel')}></i>
                </span>
            </span>}
        </div>)
    }

    const _renderNoData = () => {
        return (<p className="no-data-widget">
            {LangHelper.getSingleResource('NoInfo')}
        </p>)
    }

    return (<div className="widget">
        {_renderTitle()}
        {<div className={hasData ? "widget-content" : "widget-no-content"} style={{ display: isCollapsed ? 'none' : 'block' }}>
            <Loader isLoading={isLoading} />
            {hasData && children || _renderNoData()}
        </div>}
    </div>)
}

export default React.memo(Widget);