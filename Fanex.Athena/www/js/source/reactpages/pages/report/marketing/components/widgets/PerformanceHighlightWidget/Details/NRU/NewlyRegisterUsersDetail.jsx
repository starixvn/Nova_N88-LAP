import React, { useState } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import DataService from '../../../../../libs/services/dataService';
import QueryService from '../../../../../libs/services/queryService';
import NewlyRegisterUsersSummaryWidget from './NewlyRegisterUsersSummaryWidget';
import NewlyRegisterUsersDetailWidget from './NewlyRegisterUsersDetailWidget';
import { DefaultSortInfo } from '../../../../../constants/gridConst';

const _NewlyRegisterUsersDetail = ({ reportDate, compareDate, baseCurrency, selectedBrand } ) => {
    const [sortInfoDetailWidget, setSortInfoDetailWidget] = useState(DefaultSortInfo);

    const handleExportExcel = () => {
        const exportParams = DataService.getNewlyRegisterUsersExportAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand, sortInfo: sortInfoDetailWidget });
        QueryService.exportNewlyRegisterUsersData(exportParams);
    }

    const _renderCaption = () => {
        return <div className="highlight-detail-title">
            <span>
                {LangHelper.getSingleResource('NewlyRegisteredUsers')}
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
                <NewlyRegisterUsersSummaryWidget reportDate={reportDate} compareDate={compareDate} baseCurrency={baseCurrency} selectedBrand={selectedBrand} />
                <NewlyRegisterUsersDetailWidget onSort={setSortInfoDetailWidget} sortInfo={sortInfoDetailWidget} reportDate={reportDate} baseCurrency={baseCurrency} selectedBrand={selectedBrand} />
            </div>
        </div>
    )
}

const NewlyRegisterUsersDetail =  React.memo(_NewlyRegisterUsersDetail);
NewlyRegisterUsersDetail.key = 'NewlyRegisteredUsers';

export default NewlyRegisterUsersDetail;