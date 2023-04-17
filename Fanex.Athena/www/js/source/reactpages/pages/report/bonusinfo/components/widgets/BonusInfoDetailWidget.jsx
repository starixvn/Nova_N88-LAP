import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import Site from '@jsroot/lib/site';
import ActionCreators from '../../actions';
import Widget from '../common/Widget';
import DataService from '../../libs/services/dataService';
import QueryService from '../../libs/services/queryService';
import { BonusInfoDetailGridColumns, BonusInfoDetailGridConfig, DefaultPagingOption, StyleRow, DigitsAmount } from '../../constants/gridConst';
import { DefaultDetailSortInfo } from '../../constants/gridConst';
import { Table, Pager, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import { DateRange } from '@jsroot/components/date-range';
import NumberFormat from '@jsroot/lib/numberFormat';
import MultipleSelect from '@9softstudio/react-multiselect';
import { GroupByOptionIds } from '../../constants/filterConsts';
import AppData from '@jsroot/lib/AppData';
import moment from 'moment';

export const BonusInfoDetailWidget = props => {
    const { detailFilter, dateRange, bonusInfoSummaryData, bonusCodeDetailList, bonusInfoDetailData, fetchBonusInfoDetailData, bonusCodeList, selectedBonusCode, 
        setBonusCodeList, setSelectedBonusCode, selectedSummaryDateRange, setSelectedSummaryDateRange, setBonusInfoDetailData} = props;   
    const [isLoading, setLoading] = useState(false);
    const [selectedBonusCodeList, setSelectedBonusCodeList] = useState(selectedBonusCode);
    const [pagingOption, setPagingOption] = useState(DefaultPagingOption);
    const [sortInfo, onSort] = useState(DefaultDetailSortInfo);
    const [selectedDateRange, setSelectedDateRange] = useState(selectedSummaryDateRange);
    const dateRangeLimit = useMemo(() => dateRange, []);
    const isDisabledSubmit = useMemo(() => { return selectedBonusCodeList ? false : true; }, [selectedBonusCodeList]);

    useEffect(() => {
        setSelectedBonusCodeList(selectedBonusCode);
        setSelectedDateRange(selectedSummaryDateRange);

        if (!detailFilter || !selectedBonusCode || detailFilter.groupBy !== GroupByOptionIds.bonusCode && !selectedSummaryDateRange) {
            return;
        }
        _fetchData(DefaultPagingOption.PageIndex, DefaultPagingOption.PageSize);
    }, [detailFilter, selectedBonusCode, selectedSummaryDateRange]);

    const _title = React.useMemo(() => LangHelper.getSingleResource('Details'), []);

    const _getBonusTypeId =  React.useCallback((bonusCode) => {
        const bonusType = bonusInfoSummaryData.dataList.find(bonus => bonus.bonusCode === bonusCode);
        return bonusType ? bonusType.bonusTypeId : 0;
    }, [bonusInfoSummaryData])

    const _handleExportExcel = () => {
        if(!selectedBonusCode) {
            return;
        }

        const date = detailFilter.groupBy === GroupByOptionIds.bonusCode ? null: selectedSummaryDateRange;

        const dateRangeParams = {
            fromDate: Site.convertDateToString(date ? date.startDate:  detailFilter.fromDate),
            toDate: Site.convertDateToString(date ? date.endDate: detailFilter.toDate)
        }

        var rows =  selectedBonusCode.split(',').reduce((info, curentValue) => {
            return info + `<r bonuscode="${curentValue}" bonustypeid="${_getBonusTypeId(curentValue)}"/>`;
        },'');

        var bonusInfo = `<root> ${rows} </root>`;

        const exportParams = DataService.getBonusInfoDetailExportAPIParams(detailFilter, sortInfo, dateRangeParams, bonusInfo, selectedBonusCode.split(',').join(', '));
        QueryService.exportBonusInfoDetailData(exportParams);
    }

    const _fetchData = (pageIndex, pageSize, sort) => {

        const date = detailFilter.groupBy === GroupByOptionIds.bonusCode ? null : selectedSummaryDateRange;

        const dateRangeParams = {
            fromDate: Site.convertDateToString(date ? date.startDate: detailFilter.fromDate),
            toDate: Site.convertDateToString(date ? date.endDate: detailFilter.toDate)
        };

        var rows =  selectedBonusCode.split(',').reduce((info, curentValue) => {
            return info + `<r bonuscode="${curentValue}" bonustypeid="${_getBonusTypeId(curentValue)}"/>`;
        },'');

        var bonusInfo = `<root> ${rows} </root>`;

        const apiParams = DataService.getBonusInfoDetailAPIParams(
            detailFilter, 
            { PageIndex: pageIndex || pagingOption.PageIndex, PageSize: pageSize || pagingOption.PageSize}, 
            sort || sortInfo,
            dateRangeParams,
            bonusInfo,
            selectedBonusCode.split(',').join(', '));

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
        const dataPermission = AppData.specialReportDataPermission;
        return (
            <HeaderRow style={StyleRow} key={detailFilter.groupBy}>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.userName].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.userName].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.sabaId].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.sabaId].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.currency].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.currency].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusCode].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusCode].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusType].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusType].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusName].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusName].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.claimDate].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.claimDate].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusAmountClaimed].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusAmountClaimed].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.transactionType].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.transactionType].name}</HeaderCell>
                {dataPermission.totalDeposit && <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalDeposit].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalDeposit].name}</HeaderCell>}
                {dataPermission.totalWithdrawal && <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalWithdrawal].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalWithdrawal].name}</HeaderCell>}
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.status].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.status].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.completion].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.completion].name}</HeaderCell>
            </HeaderRow>);
    }

    const _renderBody = () => {
        const data =  [...bonusInfoDetailData.dataList];
        const dataPermission = AppData.specialReportDataPermission;
        return data.map((item, index) => <Row style={StyleRow} key={item[BonusInfoDetailGridColumns.userName] + item[BonusInfoDetailGridColumns.bonusCode] + item[BonusInfoDetailGridColumns.claimDate] + index}>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.userName].attributes}>{item[BonusInfoDetailGridColumns.userName]}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.sabaId].attributes}>{item[BonusInfoDetailGridColumns.sabaId]}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.currency].attributes}>{item[BonusInfoDetailGridColumns.currency]}</Cell>          
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusCode].attributes} >{item[BonusInfoDetailGridColumns.bonusCode]}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusType].attributes} >{item[BonusInfoDetailGridColumns.bonusType]}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusName].attributes} >{item[BonusInfoDetailGridColumns.bonusName]}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.claimDate].attributes} >{item[BonusInfoDetailGridColumns.claimDate]}</Cell>            
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusAmountClaimed].attributes}>{NumberFormat.format(item[BonusInfoDetailGridColumns.bonusAmountClaimed], DigitsAmount)}</Cell>
            <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.transactionType].attributes}>{item[BonusInfoDetailGridColumns.transactionType]}</Cell>
            {dataPermission.totalDeposit && <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalDeposit].attributes}>{NumberFormat.format(item[BonusInfoDetailGridColumns.totalDeposit], DigitsAmount)}</Cell>}
            {dataPermission.totalWithdrawal && <Cell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalWithdrawal].attributes}>{NumberFormat.format(item[BonusInfoDetailGridColumns.totalWithdrawal], DigitsAmount)}</Cell>}
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

    const _onSubmit = () => {
        setSelectedBonusCode(selectedBonusCodeList);
        setSelectedSummaryDateRange({...selectedDateRange});
        setBonusInfoDetailData(null);
    };

    const _bonusOnChange = (item, dataSource) => {
        var bonusCodes = dataSource.reduce((arr, e) => {
            if (item.split(',').includes(e.key + '')) {
                arr.push(e.value)
            }
            return arr;
        },[]);

        setSelectedBonusCodeList(bonusCodes.join(','));
        setPagingOption(DefaultPagingOption);
        onSort(DefaultDetailSortInfo);
    }

    const _onChangeDateRange = (range) => {
        const { startDate, endDate } = range;
        const bonusCodeListData = bonusCodeDetailList.filter( 
            item => moment(item.date).isBetween(startDate, endDate, 'day', []) && item.bonusCode
        ).map(item => item.bonusCode);
        
        const uniqueBonusCodeList = bonusCodeListData.filter((code, index, list) => list.indexOf(code) === index);

        setBonusCodeList(uniqueBonusCodeList);
        setSelectedBonusCodeList("");
        setSelectedDateRange(range);
    }

    const _renderDateFilter = () => {
        return (
            <DateRange
                key={selectedDateRange.startDate + selectedDateRange.endDate}
                startDate={selectedDateRange.startDate}
                endDate={selectedDateRange.endDate}
                minDate={dateRangeLimit.fromDate}
                maxDate={dateRangeLimit.toDate}
                today={selectedDateRange.endDate}
                onChange={_onChangeDateRange}
            />
        )
    }

    const _renderBonusSelectList = () => {
        const bonusCodeDataSource = bonusCodeList.map(function(item, index) {
            return {
                key: index,
                value: item,
                status: selectedBonusCodeList.split(',').includes(item) ? true : false,
            };
        });

        return bonusCodeDataSource && (
            <MultipleSelect id="bonusCodeList"
                language={LangHelper.currentLanguage}
                dataSource={bonusCodeDataSource}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(_, selectedItemsKey) => _bonusOnChange(selectedItemsKey, bonusCodeDataSource)}
            />
        );
    }

    const hasData = bonusInfoDetailData && bonusInfoDetailData.dataList.length  > 0

    return (<Widget title={_title} isLoading={isLoading} handleExportExcel={_handleExportExcel} hasData={true}>
        <div className="row bonus-filter">
            {
                detailFilter.groupBy !== GroupByOptionIds.bonusCode && 
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Date")}</label>
                        {_renderDateFilter()}
                    </div>                    
                </div>
            }

            <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                <div className="form-group">
                    <label className="label-text">{LangHelper.getSingleResource("Bonus")}</label>
                    {_renderBonusSelectList()}
                </div>
            </div>

            <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                <div className="form-group">
                    <div className="button-group">
                        <button type="button" className="btn btn-submit" disabled={isDisabledSubmit} onClick={_onSubmit}>{LangHelper.getSingleResource("Submit")}</button>
                    </div>
                </div> 
            </div>
        </div>         
        {hasData &&
        <>         
            <div className="sticky-box-container" >         
                <Table 
                    minWidth={650}
                    autoWidth={true}
                    autoHeight={false}
                    bodyHeight={400}
                    header={_renderHeader()}
                    body={_renderBody()}
                    onSort={_handleSort}
                    isPaging={true}
                    pageOption={pagingOption}
                    onPaging={_handlePaging}
                    containerPadding={60}
                    shouldResetScrollPosition={isLoading}
                />
            </div>            
        </>}
    </Widget>)
}

function mapStateToProps(state) {
    const { detailFilter, dateRange, bonusInfoSummaryData, bonusCodeDetailList, bonusInfoDetailData, bonusCodeList, selectedBonusCode, selectedSummaryDateRange } = state;
    return Object.assign({}, { detailFilter, dateRange, bonusInfoSummaryData, bonusCodeDetailList, bonusInfoDetailData, bonusCodeList, selectedBonusCode, selectedSummaryDateRange });
}

function mapDispatchToProps(dispatch) {
    const { fetchBonusInfoDetailData, setDetailFilter, setBonusCodeList, setSelectedBonusCode, setSelectedSummaryDateRange, setBonusInfoDetailData } = ActionCreators;
    return bindActionCreators({ fetchBonusInfoDetailData, setDetailFilter, setBonusCodeList, setSelectedBonusCode, setSelectedSummaryDateRange, setBonusInfoDetailData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BonusInfoDetailWidget));