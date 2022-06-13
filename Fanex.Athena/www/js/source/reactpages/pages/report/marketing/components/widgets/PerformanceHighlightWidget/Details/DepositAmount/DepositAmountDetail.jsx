import React, { useState } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import DataService from '../../../../../libs/services/dataService';
import QueryService from '../../../../../libs/services/queryService';
import DepositAmountSummaryWidget from './DepositAmountSummaryWidget';
import DepositAmountDetailWidget from './DepositAmountDetailWidget';
import { DefaultSortInfo } from '../../../../../constants/gridConst';

const DepositAmountDetail = ({ reportDate, compareDate, baseCurrency, selectedBrand, selectedCurrency, allowedCompare }) => {
    const [sortInfoDetailWidget, setSortInfoDetailWidget] = useState(DefaultSortInfo);

    const handleExportExcel = () => {
        const exportParams = DataService.getDepositAmountExportAPIParams({
            reportDate, compareDate, baseCurrency, selectedBrand,
            selectedCurrency, allowedCompare, sortInfo: sortInfoDetailWidget
        });
        QueryService.exportDepositAmountData(exportParams);
    }

    const _renderCaption = () => {
        return <div className="highlight-detail-title">
            <span>
                {`${LangHelper.getSingleResource('DepositAmount')}, ${reportDate.fromDate} - ${reportDate.toDate}, ${LangHelper.getSingleResource('Viewin').replace('{0}', baseCurrency)} `}
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
                <DepositAmountSummaryWidget reportDate={reportDate} compareDate={compareDate} baseCurrency={baseCurrency}
                    selectedBrand={selectedBrand} selectedCurrency={selectedCurrency} allowedCompare={allowedCompare} />
                <DepositAmountDetailWidget onSort={setSortInfoDetailWidget} sortInfo={sortInfoDetailWidget} reportDate={reportDate} baseCurrency={baseCurrency}
                    selectedBrand={selectedBrand} selectedCurrency={selectedCurrency} />
            </div>
        </div>
    )
}

export default React.memo(DepositAmountDetail);