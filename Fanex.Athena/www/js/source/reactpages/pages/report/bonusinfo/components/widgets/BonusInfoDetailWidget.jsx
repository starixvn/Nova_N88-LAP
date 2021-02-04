import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import ActionCreators from '../../actions';
import Widget from '../common/Widget';
import DataService from '../../libs/services/dataService';
import QueryService from '../../libs/services/queryService';
import { BonusInfoDetailGridColumns, BonusInfoDetailGridConfig, DefaultPagingOption, StyleRow, DigitsAmount } from '../../constants/gridConst';
import { DefaultDetailSortInfo } from '../../constants/gridConst';
import { Table, Pager, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import { DatePicker } from '@9softstudio/react-datepicker';
import NumberFormat from '@jsroot/lib/numberFormat';
import Select from 'react-select';
import { GroupByOptionIds } from '../../constants/filterConsts';
import Site from '@jsroot/lib/site';

export const BonusInfoDetailWidget = props => {
    const { detailFilter, bonusInfoSummaryData, bonusInfoDetailData, fetchBonusInfoDetailData, bonusCodeList, selectedBonusCode, setBonusCodeList, setSelectedBonusCode, selectedSummaryDate, setSelectedSummaryDate} = props;   
    const [isLoading, setLoading] = useState(false);
    const [pagingOption, setPagingOption] = useState(DefaultPagingOption);
    const [sortInfo, onSort] = useState(DefaultDetailSortInfo);

    useEffect(() => {
        if (!detailFilter || !selectedBonusCode || detailFilter.groupBy === GroupByOptionIds.bonusCodeAndDate && !selectedSummaryDate) {
            return;
        }

        _fetchData(null, null);
    }, [detailFilter, selectedBonusCode, selectedSummaryDate]);

    const _title = React.useMemo(() => LangHelper.getSingleResource('Details'), []);

    const _handleExportExcel = () => {
        const date = detailFilter.groupBy === GroupByOptionIds.bonusCodeAndDate ? Site.convertDateToString(selectedSummaryDate) : null;

        const dateRange = {
            fromDate: date ? date:  detailFilter.fromDate,
            toDate: date ? date: detailFilter.toDate
        }

        const exportParams = DataService.getBonusInfoDetailExportAPIParams(detailFilter, sortInfo, dateRange, selectedBonusCode);
        QueryService.exportBonusInfoDetailData(exportParams);
    }

    const _fetchData = (pageIndex, pageSize, sort) => {

        const date = detailFilter.groupBy === GroupByOptionIds.bonusCodeAndDate ? Site.convertDateToString(selectedSummaryDate) : null;

        const dateRange = {
            fromDate: date ? date:  detailFilter.fromDate,
            toDate: date ? date: detailFilter.toDate
        }

        const apiParams = DataService.getBonusInfoDetailAPIParams(
            detailFilter, 
            { PageIndex: pageIndex || pagingOption.PageIndex, PageSize: pageSize || pagingOption.PageSize}, 
            sort || sortInfo,
            dateRange, 
            selectedBonusCode);

        setLoading(true);

        fetchBonusInfoDetailData(apiParams, (data, isSuccess) => {
            setLoading(false);
            if(isSuccess && data)
            {
                const newPagingOption = getNewPagingOption(pageIndex, pageSize, data.totalRows);
                setPagingOption(newPagingOption);
            }
        })
    }

    const _handleSort = (sortBy, sortType) => {
        const newSort = {
            sortbyId: sortBy,
            isSortAsc: sortType === 'asc'
        }
        _fetchData(null, null, newSort);
        onSort && onSort(newSort);
    }

    const _handlePaging = (pageIndex, pageSize) => {
        _fetchData(pageIndex, pageSize);
    }

    const getNewPagingOption = (pageIndex, pageSize, totalRows) => {
        return {
            ...pagingOption,
            ...sortInfo,
            ...{
                PageIndex: pageIndex || pagingOption.PageIndex,
                PageSize: pageSize || pagingOption.PageSize,
                TotalItem: totalRows
            }
        }
    }

    const _renderHeader = () => {
        const claimDateAtributes = {
            colWidth: 60, 
            className: "center-align" 
        };

        if (detailFilter.groupBy === GroupByOptionIds.bonusCode) {
            claimDateAtributes.sortBy = 2; 
        }
        
        return (
            <HeaderRow style={StyleRow} key={detailFilter.groupBy}>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.userName].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.userName].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusCode].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusCode].name}</HeaderCell>
                <HeaderCell {...claimDateAtributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.claimDate].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusAmountClaimed].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusAmountClaimed].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalDeposit].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalDeposit].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalWithdrawal].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalWithdrawal].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.status].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.status].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.completion].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.completion].name}</HeaderCell>
            </HeaderRow>);
    }

    const _renderBody = () => {
        const data =  [...bonusInfoDetailData.dataList];
        return data.map(item => <Row style={StyleRow} key={item[BonusInfoDetailGridColumns.userName] + item[BonusInfoDetailGridColumns.bonusCode] + item[BonusInfoDetailGridColumns.claimDate]}>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.userName].attributes}>{item[BonusInfoDetailGridColumns.userName]}</Cell>          
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusCode].attributes} >{item[BonusInfoDetailGridColumns.bonusCode]}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.claimDate].attributes} >{item[BonusInfoDetailGridColumns.claimDate]}</Cell>            
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusAmountClaimed].attributes}>{NumberFormat.format(item[BonusInfoDetailGridColumns.bonusAmountClaimed], DigitsAmount)}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalDeposit].attributes}>{NumberFormat.format(item[BonusInfoDetailGridColumns.totalDeposit], DigitsAmount)}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalWithdrawal].attributes}>{NumberFormat.format(item[BonusInfoDetailGridColumns.totalWithdrawal], DigitsAmount)}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.status].attributes}>{item[BonusInfoDetailGridColumns.status]}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.completion].attributes}>
            <div className='progress'>
                <div className='progress-bar'
                    role='progressbar'
                    aria-valuenow={item[BonusInfoDetailGridColumns.completion]}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{width: `${item[BonusInfoDetailGridColumns.completion]*100}%`}}>
                    {NumberFormat.format(item[BonusInfoDetailGridColumns.completion]*100, DigitsAmount)}%
                </div>
            </div>      
            </Cell>
        </Row>);
    }

    const _bonusOnChange = (item) => {
        setSelectedBonusCode(item.value);
        setPagingOption(DefaultPagingOption);
        onSort(DefaultDetailSortInfo);
    }


    const _renderBonusSelectList = () => {
        const listValue = bonusCodeList.map(function(item) {
            return {
                value: item,
                label: item
            };
        })
        return (
            <Select  key={selectedSummaryDate} instanceId="bonusCodeList"
                value={selectedBonusCode}
                options={listValue}k
                onChange={_bonusOnChange} />
        );
    }

    const _onChangeDateRange = (date) => {
        const dateStr = date.format("DD-MMM-yyy");

        const bonusCodeList = bonusInfoSummaryData.dataList.filter(item => {
            if(item.dateString === dateStr)
            {
                return item;
            }
        }).map(item => {
            return item.bonusCode;
        });

        const uniqueBonusCodeList = bonusCodeList.filter((v, i, a) => a.indexOf(v) === i);

        setBonusCodeList(uniqueBonusCodeList);

        uniqueBonusCodeList?.length === 1 ? setSelectedBonusCode(uniqueBonusCodeList[0]) :   setSelectedBonusCode(null);

        setSelectedSummaryDate(date);
    }

    const _renderDateFilter = () => {
        const iconElement = (<i class="icon icon-calendar"></i>);

        return (
            <DatePicker  key={selectedSummaryDate} onChange={_onChangeDateRange} iconElement={iconElement} date={selectedSummaryDate} isEnable={true} />
        )
    }

    const hasData = bonusInfoDetailData && bonusInfoDetailData.dataList.length  > 0

    return (<Widget title={_title} isLoading={isLoading} handleExportExcel={_handleExportExcel} hasData={true}>
        <div className="row bonus-filter">
            {
                detailFilter.groupBy === GroupByOptionIds.bonusCodeAndDate && 
                <div className="col-12 col-md-6 col-sm-6 col-lg-2 col-xl-1">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Date")}</label>
                        {_renderDateFilter()}
                    </div>                    
                </div>
            }
            {bonusCodeList && bonusCodeList.length > 1 &&
            <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Bonus")}</label>
                        {_renderBonusSelectList()}
                    </div>
            </div>}   
        </div>         
        {hasData &&
        <>         
        <div className="sticky-box-container" >         
            <div style={{maxWidth: document.body.clientWidth*0.85}}>
                <Table minWidth={650}
                    autoWidth={true}
                    maxWidth={document.body.clientWidth*0.85}
                    autoHeight={false}
                    bodyHeight={400}
                    header={_renderHeader()}
                    body={_renderBody()}
                    onSort={_handleSort}
                    containerPadding={60}
                    shouldResetScrollPosition={isLoading}
                />
                <Pager pageOption={pagingOption} onPaging={_handlePaging} />
            </div>
            
            </div>            
        </>}
    </Widget>)
}

function mapStateToProps(state) {
    const { detailFilter, dateRange, bonusInfoSummaryData, bonusInfoDetailData, bonusCodeList, selectedBonusCode, selectedSummaryDate } = state;
    return Object.assign({}, { detailFilter, dateRange, bonusInfoSummaryData, bonusInfoDetailData, bonusCodeList, selectedBonusCode, selectedSummaryDate });
}

function mapDispatchToProps(dispatch) {
    const { fetchBonusInfoDetailData, setDetailFilter, setBonusCodeList, setSelectedBonusCode, setSelectedSummaryDate } = ActionCreators;
    return bindActionCreators({ fetchBonusInfoDetailData, setDetailFilter, setBonusCodeList, setSelectedBonusCode, setSelectedSummaryDate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BonusInfoDetailWidget));