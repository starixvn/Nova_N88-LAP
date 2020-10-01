import React, { useState } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import DataService from '../../../../../libs/services/dataService';
import QueryService from '../../../../../libs/services/queryService';
import WithdrawalAmountSummaryWidget from './WithdrawalAmountSummaryWidget';
import WithdrawalAmountDetailWidget from './WithdrawalAmountDetailWidget';
import { DefaultSortInfo } from '../../../../../constants/gridConst';

const _WithdrawalAmountDetail = ({ reportDate, compareDate, baseCurrency, selectedBrand }) => {
    const [sortInfoDetailWidget, setSortInfoDetailWidget] = useState(DefaultSortInfo);

    const handleExportExcel = () => {
        const exportParams = DataService.getWithdrawalAmountExportAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand, sortInfo: sortInfoDetailWidget });
        QueryService.exportWithdrawalAmountData(exportParams);
    }

    const _renderCaption = () => {
        return <div className="highlight-detail-title">
            <span>
                {LangHelper.getSingleResource('WithdrawalAmount')}
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
                <WithdrawalAmountSummaryWidget reportDate={reportDate} compareDate={compareDate} baseCurrency={baseCurrency} selectedBrand={selectedBrand} />
                <WithdrawalAmountDetailWidget onSort={setSortInfoDetailWidget} sortInfo={sortInfoDetailWidget} reportDate={reportDate} baseCurrency={baseCurrency} selectedBrand={selectedBrand} />
            </div>
        </div>
    )
}



const WithdrawalAmountDetail = React.memo(_WithdrawalAmountDetail);
WithdrawalAmountDetail.key = 'WithdrawalAmount';

export default WithdrawalAmountDetail;
