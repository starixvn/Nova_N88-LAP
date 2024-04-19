import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Cell } from '@9softstudio/react-grid';
import LangHelper from '@jsroot/lib/langHelper';
import ActionCreators from '../../actions';
import { columnKeys } from '../../constants/gridContants';
import { GroupByOptionIds, DefaultDataViewFull } from '../../constants/filterConsts';
import QueryService from '../../libs/queryService';
import AppData from '@jsroot/lib/AppData'

export const GroupCell = props => {
    const { rowData, gridData, requestParam, setGridData, setBetListParam, toggleLoader, selectedDataView, ...rest } = props;
    const key = rowData.key;
    const _isAllowedDrillDown = (rowData.drillDownData && rowData.drillDownData.length > 0)
        || (requestParam.groupBy === GroupByOptionIds.player && !!rowData.parent);

    const _isDrillDown = !!rowData.isDrillDown;

    const _handleDrillDown = async () => {

        const dataList = gridData.dataList;
        const rowIndex = dataList.findIndex(_ => _.key === key);
        if (rowIndex === -1) {
            return;
        }

        if (!rowData.drillDownData) {
            await _fetchDrillDownData();
        }

        const newDataList = [...dataList];

        if (_isDrillDown) {
            _removeDrillDownData(newDataList, rowIndex);
        } else {
            newDataList.splice(rowIndex + 1, 0, ...rowData.drillDownData);
        }

        newDataList[rowIndex] = {
            ...rowData,
            ...{ isDrillDown: !_isDrillDown }
        }

        const newGridData = {
            ...gridData,
            ...{ dataList: newDataList }
        }

        setGridData(newGridData);
    }

    const _fetchDrillDownData = async () => {
        const { displayedColumns: omitted, ...restRequestParam } = requestParam;
        const params = { ...restRequestParam, custId: rowData.custId, usernameParent: rowData.parentName, originalCurrency: rowData.group };
        toggleLoader(true);
        const response = await QueryService.getPlayerDetailData(params);
        toggleLoader(false);
        if (!response.isSuccess) {
            alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
            return;
        }
        rowData.drillDownData = response.data;
    }

    const _removeDrillDownData = (dataList, rowIndex) => {
        const currentRowData = dataList[rowIndex];
        const drillDownData = currentRowData.drillDownData;
        if (!drillDownData) {
            return;
        }

        for (let index = drillDownData.length - 1; index >= 0; index--) {
            const drillDownDataRowIndex = dataList.findIndex(_ => _.key === drillDownData[index].key);
            drillDownDataRowIndex !== -1 && _removeDrillDownData(dataList, drillDownDataRowIndex);
        }

        currentRowData.isDrillDown && dataList.splice(rowIndex + 1, drillDownData.length);
        currentRowData.isDrillDown && (currentRowData.isDrillDown = false);
    }

    const _onViewBetList = event => {
        event.preventDefault();
        setBetListParam(rowData);
    }

    return (<Cell key={`group-cell-${key}`} {...rest} {...(_isAllowedDrillDown && { onClick: _handleDrillDown, style: { cursor: 'pointer' } })}>
        {rowData.custId && rowData.productId && AppData.isAllowedReportBetlist
            ? <a href="#" onClick={_onViewBetList} className={`right right-align ${(!AppData.dataView || requestParam.dataView === DefaultDataViewFull) ? "" : "disabled-link"}`}>
                {rowData[columnKeys.group]}
            </a> : rowData[columnKeys.group]}
        {_isAllowedDrillDown && <i className={`icon-arrow right ${_isDrillDown ? 'arrow-down' : 'arrow-right'}`} ></i>}
    </Cell>)
}

function mapDispatchToProps(dispatch) {
    const { setGridData, setBetListParam, toggleLoader } = ActionCreators;
    return bindActionCreators(Object.assign({}, { setGridData, setBetListParam, toggleLoader }), dispatch);
}

function mapStateToProps(state) {
    const { gridData, requestParam } = state;
    return Object.assign({}, { gridData, requestParam });
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GroupCell));