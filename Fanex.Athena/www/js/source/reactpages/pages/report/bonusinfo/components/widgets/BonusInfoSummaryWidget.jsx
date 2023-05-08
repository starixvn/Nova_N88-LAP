import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import ActionCreators from '../../actions';
import Widget from '../common/Widget';
import DataService from '../../libs/services/dataService';
import QueryService from '../../libs/services/queryService';
import { BonusInfoSummaryGridColumns, BonusInfoSummaryGridConfig, StyleRow, DigitsAmount } from '../../constants/gridConst';
import { Table, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import NumberFormat from '@jsroot/lib/numberFormat';
import { GroupByOptionIds } from '../../constants/filterConsts';
import AppData from '@jsroot/lib/AppData';
import moment from 'moment';

let countRender = 0;

export const BonusInfoSummaryWidget = props => {
    const { globalFilter, bonusInfoSummaryData, fetchBonusInfoSummaryData, selectedSummarySortInfo, setSummarySortInfo, setDetailFilter, setBonusCodeList, setBonusCodeDetailList, setSelectedBonusCode, 
        summaryGridHeight, setSummaryGridHeight, setSelectedSummaryDateRange, setBonusInfoDetailData } = props;   
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!globalFilter) {
            return;
        }

        countRender++;
        _fetchData(null);        
    }, [globalFilter]);

    const _title = React.useMemo(() => LangHelper.getSingleResource('Summary'), []);

    const _handleExportExcel = () => {
        const exportParams = DataService.getBonusInfoSummaryExportAPIParams(globalFilter, selectedSummarySortInfo);
        QueryService.exportBonusInfoSummaryData(exportParams);
    }

    const _fetchData = (sort) => {
        const apiParams = DataService.getBonusInfoSummaryAPIParams(globalFilter,  sort || selectedSummarySortInfo);

        setLoading(true);
        fetchBonusInfoSummaryData(apiParams, sort !== null, (data, isSuccess) => 
        {
            if(isSuccess && data.bonusCodeList && data.bonusCodeInfoDetailList)
            {
                setBonusCodeList(data.bonusCodeList);
                setBonusCodeDetailList(data.bonusCodeInfoDetailList);
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
        setSummarySortInfo(sortInfo);
    }

    const _bonusCodeClick = (e, bonusCode) => {
        e.preventDefault();
 
        const detailFilter = { 
            ...globalFilter
        };        

        setDetailFilter(detailFilter);
        setSelectedBonusCode(bonusCode);
        setSummaryGridHeight(200);
    }

    const _dateClick = (e, date, bonusCode) => {
        e.preventDefault();

        const dateRangeValue = { 
            startDate: moment(date).format('MM/DD/YYYY'),
            endDate: moment(date).format('MM/DD/YYYY')
        };

        const detailFilter = { 
            ...globalFilter
        };  

        const bonusCodeList = bonusInfoSummaryData.dataList.filter(item => {
            if(item.date === date && item.bonusCode)
            {
                return item;
            }
        }).map(item => {
            return item.bonusCode;
        });

        const uniqueBonusCodeList = bonusCodeList.filter((v, i, a) => a.indexOf(v) === i);

        setSelectedBonusCode(bonusCode);
        setBonusCodeList(uniqueBonusCodeList);      
        setBonusInfoDetailData(null);
        setDetailFilter(detailFilter);
        setSelectedSummaryDateRange({...dateRangeValue});
        setSummaryGridHeight(200);
    }

    const _monthClick = (e, date, bonusCode) => {
        e.preventDefault();
      
        const dateRangeValue = { 
            startDate: moment.max(moment(date).startOf('month'), moment(globalFilter.fromDate)).format('MM/DD/YYYY'),
            endDate: moment.min(moment(date).endOf('month'), moment(globalFilter.toDate)).format('MM/DD/YYYY'),
        };

        const detailFilter = {
            ...globalFilter
        };

        const bonusCodeList = bonusInfoSummaryData.dataList.filter(item => {
            if(item.date === date && item.bonusCode)
            {
                return item;
            }
        }).map(item => {
            return item.bonusCode;
        });

        const uniqueBonusCodeList = bonusCodeList.filter((v, i, a) => a.indexOf(v) === i);

        setSelectedBonusCode(bonusCode);
        setBonusCodeList(uniqueBonusCodeList);
        setBonusInfoDetailData(null);
        setDetailFilter(detailFilter);
        setSelectedSummaryDateRange({...dateRangeValue});
        setSummaryGridHeight(200);
    }

    const _renderHeader = () => {
        const claimStatusNumber = globalFilter.claimStatus.split(",").length;
        const claimStatusAtributes = {
            colWidth: 50*claimStatusNumber,
            colSpan: claimStatusNumber,
            className: "center-align"
        };
        const dataPermission = AppData.specialReportDataPermission;

        const gridHeader = [
            <HeaderRow style={StyleRow} key='header1'>
                {globalFilter.groupBy === GroupByOptionIds.bonusCodeAndDate &&
                    <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.date].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.date].name}</HeaderCell>
                }
                {globalFilter.groupBy === GroupByOptionIds.bonusCodeAndMonth &&
                    <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.month].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.month].name}</HeaderCell>
                }
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusName].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusName].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusCode].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusCode].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusType].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusType].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.startDate].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.startDate].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.endDate].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.endDate].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusStatus].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusStatus].name}</HeaderCell>
                <HeaderCell {...claimStatusAtributes}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.claimStatus].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimants].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimants].name}</HeaderCell>
                <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimedAmount].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimedAmount].name}</HeaderCell>
                {dataPermission.ggr && <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.gGR].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.gGR].name}</HeaderCell>}
                {dataPermission.totalDeposit && <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalDeposit].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalDeposit].name}</HeaderCell>}
                {dataPermission.totalWithdrawal && <HeaderCell {...{...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalWithdrawal].attributes, rowSpan: 2}}>{BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalWithdrawal].name}</HeaderCell>}
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
        const dataPermission = AppData.specialReportDataPermission;
        
        return data.map((item, index) => <Row style={StyleRow} key={item[BonusInfoSummaryGridColumns.bonusCode] + item[BonusInfoSummaryGridColumns.bonusType] + item[BonusInfoSummaryGridColumns.date] + index}>           
            {globalFilter.groupBy === GroupByOptionIds.bonusCodeAndDate &&
                <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.date].attributes}>                        
                    <a href="#" onClick={(e)=> _dateClick(e, item.date, item.bonusCode)}>
                        {item[BonusInfoSummaryGridColumns.date]}
                    </a>
                </Cell>
            }
            {globalFilter.groupBy === GroupByOptionIds.bonusCodeAndMonth &&
                <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.month].attributes}>                        
                    <a href="#" onClick={(e)=> _monthClick(e, item.date, item.bonusCode)}>
                        {item[BonusInfoSummaryGridColumns.month]}
                    </a>
                </Cell>
            }
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusName].attributes} >{item[BonusInfoSummaryGridColumns.bonusName]}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.bonusCode].attributes}>
                {globalFilter.groupBy === GroupByOptionIds.bonusCode ? 
                    <a href="#" onClick={(e)=> _bonusCodeClick(e, item.bonusCode)}>
                        {item[BonusInfoSummaryGridColumns.bonusCode]}
                    </a>
                    : item[BonusInfoSummaryGridColumns.bonusCode]
                }               
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
            {dataPermission.ggr && <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.gGR].attributes}>{NumberFormat.format(item[BonusInfoSummaryGridColumns.gGR], DigitsAmount)}</Cell>}    
            {dataPermission.totalDeposit && <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalDeposit].attributes}>{NumberFormat.format(item[BonusInfoSummaryGridColumns.totalDeposit], DigitsAmount)}</Cell>}
            {dataPermission.totalWithdrawal && <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalWithdrawal].attributes}>{NumberFormat.format(item[BonusInfoSummaryGridColumns.totalWithdrawal], DigitsAmount)}</Cell>}
        </Row>)
    }

    const _renderFooter = () => {
        const {totalData} =  bonusInfoSummaryData;
        const dataPermission = AppData.specialReportDataPermission;

        const totalAtributes = {
            colSpan: globalFilter.groupBy === GroupByOptionIds.bonusCode ? 6 : 7, 
            className: "left-align"
        };

        return (<Row className="fixed-table-grant-total" key="totalRow">
            <Cell {...totalAtributes}>{LangHelper.getSingleResource("Total")}</Cell>
            {
                globalFilter.claimStatus.split(",").map((statusId, i) => {
                    return (
                        <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns[`claimStatus${statusId}`]].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns[`claimStatus${statusId}`]], 0)}</Cell>
                    )
                })
            }
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimants].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.totalClaimants], 0)}</Cell>
            <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalClaimedAmount].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.totalClaimedAmount], DigitsAmount)}</Cell>
            {dataPermission.ggr && <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.gGR].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.gGR], DigitsAmount)}</Cell>}
            {dataPermission.totalDeposit && <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalDeposit].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.totalDeposit], DigitsAmount)}</Cell>}
            {dataPermission.totalWithdrawal && <Cell {...BonusInfoSummaryGridConfig[BonusInfoSummaryGridColumns.totalWithdrawal].attributes}>{NumberFormat.format(totalData[BonusInfoSummaryGridColumns.totalWithdrawal], DigitsAmount)}</Cell>}
        </Row>)
    }

    const hasData = bonusInfoSummaryData && bonusInfoSummaryData.dataList.length > 0

    return (<Widget title={_title} isLoading={isLoading} handleExportExcel={_handleExportExcel} hasData={hasData}>
        {hasData > 0 && <div className="sticky-box-container">                    
            <Table
                key={'BonusInfo_Summary' + summaryGridHeight + countRender}
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
    const { globalFilter, bonusInfoSummaryData, summaryGridHeight, selectedSummarySortInfo, selectedSummaryDateRange} = state;
    return Object.assign({}, { globalFilter, bonusInfoSummaryData, summaryGridHeight,  selectedSummarySortInfo, selectedSummaryDateRange });
}

function mapDispatchToProps(dispatch) {
    const { fetchBonusInfoSummaryData, setDetailFilter, setBonusCodeList, setBonusCodeDetailList, setSelectedBonusCode, setSummaryGridHeight, setSelectedSummaryDateRange, setSummarySortInfo, setBonusInfoDetailData } = ActionCreators;
    return bindActionCreators({ fetchBonusInfoSummaryData, setDetailFilter, setBonusCodeList, setBonusCodeDetailList, setSelectedBonusCode, setSummaryGridHeight, setSelectedSummaryDateRange, setSummarySortInfo, setBonusInfoDetailData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BonusInfoSummaryWidget));