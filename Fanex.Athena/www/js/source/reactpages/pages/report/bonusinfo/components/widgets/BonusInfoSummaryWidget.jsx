import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import ActionCreators from '../../actions';
import Widget from '../common/Widget';
import DataService from '../../libs/services/dataService';
import QueryService from '../../libs/services/queryService';
import { BonusInfoSummaryGridColumns, BonusInfoSummaryGridConfig, StyleRow, DigitsAmount } from '../../constants/gridConst';
import { DefaultSummarySortInfo } from '../../constants/gridConst';
import { Table, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import NumberFormat from '@jsroot/lib/numberFormat';

export const BonusInfoSummaryWidget = props => {
    const { globalFilter, bonusInfoSummaryData, fetchBonusInfoSummaryData, setDetailFilter, setBonusCodeList, setSelectedBonusCode, summaryGridHeight, setSummaryGridHeight} = props;   
    const [isLoading, setLoading] = useState(false);
    const [sortInfo, onSort] = useState(DefaultSummarySortInfo);   

    useEffect(() => {
        if (!globalFilter) {
            return;
        }

        _fetchData(null, null);        
    }, [globalFilter]);

    const _title = React.useMemo(() => LangHelper.getSingleResource('Summary'), []);

    const _handleExportExcel = () => {
        const exportParams = DataService.getBonusInfoSummaryExportAPIParams(globalFilter, sortInfo);
        QueryService.exportBonusInfoSummaryData(exportParams);
    }

    const _fetchData = (sort) => {
        const apiParams = DataService.getBonusInfoSummaryAPIParams(globalFilter,  sort || sortInfo);

        setLoading(true);
        fetchBonusInfoSummaryData(apiParams, (data, isSuccess) => 
        {
            if(isSuccess && data.bonusCodeList)
            {
                setBonusCodeList(data.bonusCodeList);
            }            
            setLoading(false);
        })
    }

    const _handleSort = (sortBy, sortType) => {
        const sortInfo = {
            sortBy,
            sortType
        }
        _fetchData(sortInfo);
        onSort && onSort(sortInfo);
    }

    const _bonusCodeClick = (e, bonusCode) => {
        e.preventDefault();
 
        const detailFilter = { 
            ...globalFilter,
            bonusCode
        };        

        setDetailFilter(detailFilter);
        setSelectedBonusCode(bonusCode);
        setSummaryGridHeight(200);
    }

    const _renderHeader = () => {
        const claimStatusNumber = globalFilter.claimStatus.split(",").length;
        const claimStatusAtributes = {
            colWidth: 50*claimStatusNumber,
            colSpan: claimStatusNumber,
            className: "center-align"
        };

        const gridHeader = [
            <HeaderRow style={StyleRow} key='header1'>                
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusName].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusName].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusCode].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusCode].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusType].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusType].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.startDate].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.startDate].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.endDate].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.endDate].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusStatus].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusStatus].name}</HeaderCell>
                <HeaderCell {...claimStatusAtributes}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.claimStatus].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimants].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimants].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimedAmount].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimedAmount].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalDeposit].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalDeposit].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalWithdrawal].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalWithdrawal].name}</HeaderCell>
            </HeaderRow>,
            <HeaderRow style={StyleRow} key='header2' className='row2'>
            {
                globalFilter.claimStatus.split(",").map((statusId, i) => {
                    return (
                        <HeaderCell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns[`claimStatus${statusId}`]].attributes}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns[`claimStatus${statusId}`]].name}</HeaderCell>
                    )
                })
            }
            </HeaderRow>
        ]

        return gridHeader;
    }

    const _renderBody = () => {
        const data =  [...bonusInfoSummaryData.dataList];
        return data.map((item, index) => <Row style={StyleRow} key={item[BonusInfoSummaryGridColumns.bonusName] + item[BonusInfoSummaryGridColumns.bonusCode] + item[BonusInfoSummaryGridColumns.bonusType]}>           
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusName].attributes} >{item[BonusInfoSummaryGridColumns.bonusName]}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusCode].attributes}>
                <a href="#" onClick={(e)=> _bonusCodeClick(e, item[BonusInfoSummaryGridColumns.bonusCode])}>
                    {item[BonusInfoSummaryGridColumns.bonusCode]}
                </a>                
            </Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusType].attributes}>{item[BonusInfoSummaryGridColumns.bonusType]}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.startDate].attributes}>{item[BonusInfoSummaryGridColumns.startDate]}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.endDate].attributes}>{item[BonusInfoSummaryGridColumns.endDate]}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusStatus].attributes}>{item[BonusInfoSummaryGridColumns.bonusStatus]}</Cell>
            {
                globalFilter.claimStatus.split(",").map((statusId, i) => {
                    return (
                        <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns[`claimStatus${statusId}`]].attributes}>{NumberFormat.format(item[BonusInfoSummaryGridColumns[`claimStatus${statusId}`]],0)}</Cell>
                    )
                })
            }
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimants].attributes}>{NumberFormat.format(item[BonusInfoSummaryGridColumns.totalClaimants], 0)}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimedAmount].attributes}>{NumberFormat.format(item[BonusInfoSummaryGridColumns.totalClaimedAmount], DigitsAmount)}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalDeposit].attributes}>{NumberFormat.format(item[BonusInfoSummaryGridColumns.totalDeposit], DigitsAmount)}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalWithdrawal].attributes}>{NumberFormat.format(item[BonusInfoSummaryGridColumns.totalWithdrawal], DigitsAmount)}</Cell>
        </Row>)
    }

    const _renderFooter = () => {
        const {totalData} =  bonusInfoSummaryData;
        return (<Row className="fixed-table-grant-total" key="totalRow">
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.total].attributes}>{LangHelper.getSingleResource("Total")}</Cell>
            {
                globalFilter.claimStatus.split(",").map((statusId, i) => {
                    return (
                        <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns[`claimStatus${statusId}`]].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns[`claimStatus${statusId}`]], 0)}</Cell>
                    )
                })
            }
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimants].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.totalClaimants], 0)}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimedAmount].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.totalClaimedAmount], DigitsAmount)}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalDeposit].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.totalDeposit], DigitsAmount)}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalWithdrawal].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.totalWithdrawal], DigitsAmount)}</Cell>
        </Row>)
    }

    const hasData = bonusInfoSummaryData && bonusInfoSummaryData.dataList.length > 0

    return (<Widget title={_title} isLoading={isLoading} handleExportExcel={_handleExportExcel} hasData={hasData}>
        {hasData > 0 && <div className="sticky-box-container">                    
                    <Table
                        key={'BonusInfo_Summary' + summaryGridHeight}
                        minWidth={650}
                        autoWidth={true}
                        autoHeight={false}
                        bodyHeight={summaryGridHeight}
                        header={_renderHeader()}
                        body={_renderBody()}
                        footer={_renderFooter()}
                        onSort={_handleSort}
                        containerPadding={65}
                        shouldResetScrollPosition={isLoading}
                    />
        </div>}
    </Widget>)
}

function mapStateToProps(state) {
    const { globalFilter, bonusInfoSummaryData, summaryGridHeight} = state;
    return Object.assign({}, { globalFilter, bonusInfoSummaryData, summaryGridHeight });
}

function mapDispatchToProps(dispatch) {
    const { fetchBonusInfoSummaryData, setDetailFilter, setBonusCodeList, setSelectedBonusCode, setSummaryGridHeight } = ActionCreators;
    return bindActionCreators({ fetchBonusInfoSummaryData, setDetailFilter, setBonusCodeList ,setSelectedBonusCode, setSummaryGridHeight }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BonusInfoSummaryWidget));