import React, { useState } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import DataService from '../../../../../libs/services/dataService';
import QueryService from '../../../../../libs/services/queryService';
import DepositAmountSummaryWidget from './DepositAmountSummaryWidget';
import DepositAmountDetailWidget from './DepositAmountDetailWidget';
import { DefaultSortInfo } from '../../../../../constants/gridConst';

const DepositAmountDetail = ({ reportDate, compareDate, baseCurrency, selectedBrand, allowedCompare }) => {
    const [sortInfoDetailWidget, setSortInfoDetailWidget] = useState(DefaultSortInfo);

    const handleExportExcel = () => {
        const exportParams = DataService.getDepositAmountExportAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand, allowedCompare, sortInfo: sortInfoDetailWidget });
        QueryService.exportDepositAmountData(exportParams);
    }

    const _renderCaption = () => {
        return <div className="highlight-detail-title">
            <span>
                {LangHelper.getSingleResource('DepositAmount')}
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
                <DepositAmountSummaryWidget reportDate={reportDate} compareDate={compareDate} baseCurrency={baseCurrency} selectedBrand={selectedBrand} allowedCompare={allowedCompare} />
                <DepositAmountDetailWidget onSort={setSortInfoDetailWidget} sortInfo={sortInfoDetailWidget} reportDate={reportDate} baseCurrency={baseCurrency} selectedBrand={selectedBrand} />
            </div>
        </div>
    )
}

export default React.memo(DepositAmountDetail);