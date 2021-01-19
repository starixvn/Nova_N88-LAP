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
import NumberFormat from '@jsroot/lib/numberFormat';
import Select from 'react-select'

export const BonusInfoDetailWidget = props => {
    const { detailFilter, bonusInfoDetailData, fetchBonusInfoDetailData, bonusCodeList, selectedBonusCode, setSelectedBonusCode} = props;   
    const [isLoading, setLoading] = useState(false);
    const [pagingOption, setPagingOption] = useState(DefaultPagingOption);
    const [sortInfo, onSort] = useState(DefaultDetailSortInfo);

    useEffect(() => {
        if (!detailFilter) {
            return;
        }
        _fetchData(null, null);
    }, [detailFilter, selectedBonusCode]);

    const _title = React.useMemo(() => LangHelper.getSingleResource('Details'), []);

    const _handleExportExcel = () => {
        const exportParams = DataService.getBonusInfoDetailExportAPIParams(detailFilter, sortInfo, selectedBonusCode);
        QueryService.exportBonusInfoDetailData(exportParams);
    }

    const _fetchData = (pageIndex, pageSize, sort) => {
        const apiParams = DataService.getBonusInfoDetailAPIParams(
            detailFilter, 
            { PageIndex: pageIndex || pagingOption.PageIndex, PageSize: pageSize || pagingOption.PageSize}, 
            sort || sortInfo, 
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
        return (<HeaderRow style={StyleRow}>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.userName].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.userName].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusCode].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusCode].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.claimDate].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.claimDate].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusAmountClaimed].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.bonusAmountClaimed].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalDeposit].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalDeposit].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalWithdrawal].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.totalWithdrawal].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.status].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.status].name}</HeaderCell>
                <HeaderCell {...BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.completion].attributes}>{BonusInfoDetailGridConfig[BonusInfoDetailGridColumns.completion].name}</HeaderCell>
            </HeaderRow>);
    }

    const _renderBody = () => {
        const data =  [...bonusInfoDetailData.dataList];
        return data.map((item, index) => <Row style={StyleRow} key={item[BonusInfoDetailGridColumns.userName] + item[BonusInfoDetailGridColumns.bonusCode] + item[BonusInfoDetailGridColumns.claimDate]}>
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
            <Select instanceId="bonusCodeList"
                value={selectedBonusCode}
                options={listValue}k
                onChange={_bonusOnChange} />
        );
    }

    const hasData = bonusInfoDetailData && bonusInfoDetailData.dataList.length  > 0

    return (<Widget title={_title} isLoading={isLoading} handleExportExcel={_handleExportExcel} hasData={hasData}>
        {bonusCodeList && bonusCodeList.length > 1 && <div className="row bonus-filter">
        <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                <div className="form-group">
                    <label className="label-text">{LangHelper.getSingleResource("Bonus")}</label>
                    {_renderBonusSelectList()}
                </div>
            </div>
        </div>}    
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
    const { detailFilter, bonusInfoDetailData, bonusCodeList, selectedBonusCode } = state;
    return Object.assign({}, { detailFilter, bonusInfoDetailData, bonusCodeList, selectedBonusCode });
}

function mapDispatchToProps(dispatch) {
    const { fetchBonusInfoDetailData, setSelectedBonusCode } = ActionCreators;
    return bindActionCreators({ fetchBonusInfoDetailData, setSelectedBonusCode }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BonusInfoDetailWidget));