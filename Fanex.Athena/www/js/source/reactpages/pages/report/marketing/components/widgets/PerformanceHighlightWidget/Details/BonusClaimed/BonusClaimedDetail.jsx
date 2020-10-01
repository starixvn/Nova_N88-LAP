import React, { useState } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import DataService from '../../../../../libs/services/dataService';
import QueryService from '../../../../../libs/services/queryService';
import BonusClaimedSummaryWidget from './BonusClaimedSummaryWidget';
import BonusClaimedDetailWidget from './BonusClaimedDetailWidget';
import { DefaultSortInfo } from '../../../../../constants/gridConst';

const _BonusClaimedDetail = ({ reportDate, compareDate, baseCurrency, selectedBrand }) => {
    const [sortInfoDetailWidget, setSortInfoDetailWidget] = useState(DefaultSortInfo);

    const handleExportExcel = () => {
        const exportParams = DataService.getBonusClaimedExportAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand, sortInfo: sortInfoDetailWidget });
        QueryService.exportBonusClaimedData(exportParams);
    }

    const _renderCaption = () => {
        return <div className="highlight-detail-title">
            <span>
                {LangHelper.getSingleResource('BonusClaimed')}
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
                <BonusClaimedSummaryWidget reportDate={reportDate} compareDate={compareDate} baseCurrency={baseCurrency} selectedBrand={selectedBrand} />
                <BonusClaimedDetailWidget onSort={setSortInfoDetailWidget} sortInfo={sortInfoDetailWidget} reportDate={reportDate} baseCurrency={baseCurrency} selectedBrand={selectedBrand} />
            </div>
        </div>
    )
}

const BonusClaimedDetail =  React.memo(_BonusClaimedDetail);
BonusClaimedDetail.key = 'BonusClaimed';

export default BonusClaimedDetail;