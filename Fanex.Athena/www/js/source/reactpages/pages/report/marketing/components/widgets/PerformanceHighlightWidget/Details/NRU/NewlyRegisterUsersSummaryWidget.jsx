import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../../common/Widget';
import DataService from '../../../../../libs/services/dataService';
import { Table, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import GroupCell from '../../../../common/GroupCell';
import QueryService from '../../../../../libs/services/queryService';
import NumberHelper from '../../../../../libs/helpers/numberHelper';
import { TotalNRUGridColumns, TotalNRUGridConfig, CampaignNRUGridColumns, CampaignNRUGridConfig, SignupNRUGridColumns, SignupNRUGridConfig, StyleRow, DigitsAmount } from '../../../../../constants/gridConst';

const NewlyRegisterUsersSummaryWidget = ({ reportDate, compareDate, baseCurrency, selectedBrand, selectedCurrency, allowedCompare }) => {
    const [isLoading, setLoading] = useState(false);
    const [summaryData, setSummaryData] = useState(null);

    useEffect(() => {
        const apiParams = DataService.getNewlyRegisterUsersSummaryAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand, selectedCurrency });
        QueryService.fetchNewlyRegisterUsersSummaryData(apiParams,
            () => {
                setLoading(true)
            },
            response => {
                setSummaryData(response.data)
                setLoading(false)
            });
    }, [reportDate, compareDate]);

    const _renderTotalData = () => {
        const { totalData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{TotalNRUGridConfig[TotalNRUGridColumns.total].name}</HeaderCell>
            <HeaderCell>{TotalNRUGridConfig[TotalNRUGridColumns.newlyRegisterUsers].name}</HeaderCell>
            {allowedCompare && <HeaderCell>{TotalNRUGridConfig[TotalNRUGridColumns.compareNewlyRegisterUsers].name}</HeaderCell>}
            {allowedCompare && <HeaderCell>{TotalNRUGridConfig[TotalNRUGridColumns.changeRate].name}</HeaderCell>}
        </HeaderRow>);

        const item = totalData[0];
        const roundRate = NumberFormat.round(item[TotalNRUGridColumns.changeRate], 0);
        const displayRate = NumberHelper.displayRate(roundRate);
        const colorRate = NumberHelper.getColorRate(roundRate);
        const body = (<Row style={StyleRow}>
            <Cell {...TotalNRUGridConfig[TotalNRUGridColumns.total].attributes}>{LangHelper.getSingleResource('NRU')}</Cell>
            <Cell {...TotalNRUGridConfig[TotalNRUGridColumns.newlyRegisterUsers].attributes}>{NumberFormat.format(item[TotalNRUGridColumns.newlyRegisterUsers])}</Cell>
            {allowedCompare && <Cell {...TotalNRUGridConfig[TotalNRUGridColumns.compareNewlyRegisterUsers].attributes}>{NumberFormat.format(item[TotalNRUGridColumns.compareNewlyRegisterUsers])}</Cell>}
            {allowedCompare && <Cell {...TotalNRUGridConfig[TotalNRUGridColumns.changeRate].attributes} className={`${TotalNRUGridConfig[TotalNRUGridColumns.changeRate].attributes.className} ${colorRate}`}>{displayRate}</Cell>}
        </Row>)
        
        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={window.innerWidth}
                autoWidth={true}
                autoHeight={true}
                header={header}
                body={body}
                containerPadding={70}
            />
        </div>)
    };

    const _renderBonusData = () => {
        const { campaignData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell {...CampaignNRUGridConfig[CampaignNRUGridColumns.bonusCode].attributes}>{CampaignNRUGridConfig[CampaignNRUGridColumns.bonusCode].name}</HeaderCell>
            <HeaderCell {...CampaignNRUGridConfig[CampaignNRUGridColumns.bonusName].attributes}>{CampaignNRUGridConfig[CampaignNRUGridColumns.bonusName].name}</HeaderCell>
            <HeaderCell {...CampaignNRUGridConfig[CampaignNRUGridColumns.newlyRegisterUsers].attributes}>{CampaignNRUGridConfig[CampaignNRUGridColumns.newlyRegisterUsers].name}</HeaderCell>
            <HeaderCell {...CampaignNRUGridConfig[CampaignNRUGridColumns.depositUsers].attributes}>{CampaignNRUGridConfig[CampaignNRUGridColumns.depositUsers].name}</HeaderCell>
            <HeaderCell {...CampaignNRUGridConfig[CampaignNRUGridColumns.firstDepositAmount].attributes}>{CampaignNRUGridConfig[CampaignNRUGridColumns.firstDepositAmount].name}</HeaderCell>
            <HeaderCell {...CampaignNRUGridConfig[CampaignNRUGridColumns.totalDepositAmount].attributes} >{CampaignNRUGridConfig[CampaignNRUGridColumns.totalDepositAmount].name}</HeaderCell>
        </HeaderRow>);
        const body = campaignData.map(item => <Row style={StyleRow}>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.bonusCode].attributes}>{item[CampaignNRUGridColumns.bonusCode] || LangHelper.getSingleResource('None')}</Cell>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.bonusName].attributes}>{item[CampaignNRUGridColumns.bonusName]}</Cell>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.newlyRegisterUsers].attributes}>{NumberFormat.format(item[CampaignNRUGridColumns.newlyRegisterUsers])}</Cell>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.depositUsers].attributes}>{NumberFormat.format(item[CampaignNRUGridColumns.depositUsers])}</Cell>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.firstDepositAmount].attributes}>{NumberFormat.format(item[CampaignNRUGridColumns.firstDepositAmount], DigitsAmount)}</Cell>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.totalDepositAmount].attributes}>{NumberFormat.format(item[CampaignNRUGridColumns.totalDepositAmount], DigitsAmount)}</Cell>
        </Row>)

        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={window.innerWidth}
                autoWidth={true}
                autoHeight={true}
                header={header}
                body={body}
                containerPadding={70}
            />
        </div>)
    };

    const _onDrillDownSignupData = newSignupData => {
        const newSummaryData = { ...summaryData };
        newSummaryData.signupData = newSignupData;
        setSummaryData(newSummaryData);
    }

    const _renderSignupData = () => {
        const { signupData, totalSignupData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.url].name}</HeaderCell>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.newlyRegisterUsers].name}</HeaderCell>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.depositUsers].name}</HeaderCell>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.firstDepositAmount].name}</HeaderCell>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.totalDepositAmount].name}</HeaderCell>
        </HeaderRow>);

        const body = signupData.map(item => <Row key={`${item[SignupNRUGridColumns.source]}-${item[SignupNRUGridColumns.url]}`} style={StyleRow}>
            {_renderGroupSignupCell(item, signupData)}
            <Cell {...SignupNRUGridConfig[SignupNRUGridColumns.newlyRegisterUsers].attributes}>{NumberFormat.format(item[SignupNRUGridColumns.newlyRegisterUsers])}</Cell>
            <Cell {...SignupNRUGridConfig[SignupNRUGridColumns.depositUsers].attributes}>{NumberFormat.format(item[SignupNRUGridColumns.depositUsers])}</Cell>
            <Cell {...SignupNRUGridConfig[SignupNRUGridColumns.firstDepositAmount].attributes}>{NumberFormat.format(item[SignupNRUGridColumns.firstDepositAmount], DigitsAmount)}</Cell>
            <Cell {...SignupNRUGridConfig[SignupNRUGridColumns.totalDepositAmount].attributes}>{NumberFormat.format(item[SignupNRUGridColumns.totalDepositAmount], DigitsAmount)}</Cell>
        </Row>)

        const totalRow = (<Row>
            <Cell className='left-align total-cell'>{LangHelper.getSingleResource('Total')}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalSignupData.totalNewlyRegisterUsers, 0)}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalSignupData.totalDepositUsers, 0)}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalSignupData.totalFirstDepositAmount, 2)}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalSignupData.totalDepositAmount, 2)}</Cell>
        </Row>)

        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={window.innerWidth}
                autoWidth={true}
                autoHeight={false}
                bodyHeight={400}
                header={header}
                body={[...body, totalRow]}
                containerPadding={70}
            />
        </div>)
    }

    const _renderGroupSignupCell = (item, signupData) => {
        const isChild = !item.noGrouping && (!item.childs || !item.childs.length); 
        return <GroupCell displayText={item[SignupNRUGridColumns.url] || LangHelper.getSingleResource('None')}
        rowData={item}
        dataList={signupData}
        fieldKey={SignupNRUGridColumns.url}
        allowedDrillDown={!item.noGrouping && item.childs && item.childs.length > 0}
        isChild={isChild}
        onDrillDown={_onDrillDownSignupData}
        {...{ className: 'left-align' + (isChild ? '' : ' highlight-cell') }} />
    }

    return (
        <Widget title={LangHelper.getSingleResource('Summary')} isLoading={isLoading}>
            {summaryData && <div className="summary-container">
                {_renderTotalData()}
                {_renderSignupData()}
                {_renderBonusData()}
            </div>}
        </Widget>
    )
}

export default React.memo(NewlyRegisterUsersSummaryWidget);