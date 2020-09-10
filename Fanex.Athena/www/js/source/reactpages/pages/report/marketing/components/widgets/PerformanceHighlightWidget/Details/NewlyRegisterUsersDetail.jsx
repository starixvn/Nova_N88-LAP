import React, { useState } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import DataService from '../../../../libs/services/dataService';
import QueryService from '../../../../libs/services/queryService';
import NewlyRegisterUsersSummaryWidget from './NewlyRegisterUsersSummaryWidget';
import NewlyRegisterUsersDetailWidget from './NewlyRegisterUsersDetailWidget';
import { DefaultSortInfo } from '../../../../constants/gridConst';

const NewlyRegisterUsersDetail = props => {
    const { reportDate, compareDate, baseCurrency } = props;
    const [sortInfoDetailWidget, setSortInfoDetailWidget] = useState(DefaultSortInfo);

    const handleExportExcel = () => {
        const exportParams = DataService.getNewlyRegisterUsersExportAPIParams({ reportDate, compareDate, baseCurrency, sortInfo: sortInfoDetailWidget });
        QueryService.exportNewlyRegisterUsersData(exportParams);
    }

    const _renderCaption = () => {
        return <div className="highlight-detail-title">
            <span>
                {LangHelper.getSingleResource('NRU')}
            </span>
            <span className="caret-block">
                <span className="icon-excel-wrapper" onClick={handleExportExcel}>
                    <i className="icon-excel" title={LangHelper.getSingleResource('ExportToExcel')}></i>
                </span>
            </span>
        </div>
    }

    return (
        <div className="highlight-detail">
            {_renderCaption()}
            <div className="widget-list">
                <NewlyRegisterUsersSummaryWidget reportDate={reportDate} compareDate={compareDate} baseCurrency={baseCurrency} />
                <NewlyRegisterUsersDetailWidget onSort={setSortInfoDetailWidget} sortInfo={sortInfoDetailWidget} reportDate={reportDate} baseCurrency={baseCurrency} />
            </div>
        </div>
    )
}

export default React.memo(NewlyRegisterUsersDetail);