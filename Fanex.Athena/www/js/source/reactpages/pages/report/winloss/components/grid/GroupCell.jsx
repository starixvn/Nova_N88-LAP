import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Cell } from '@9softstudio/react-grid';
import ActionCreators from '../../actions';
import { columnKeys } from '../../constants/gridContants';

export const GroupCell = props => {
    const { rowData, setGridData, gridData, ...rest } = props;
    const name = rowData[columnKeys.group];

    const _isAllowedDrillDown = rowData.drillDownData && rowData.drillDownData.length > 0;
    const _isDrillDown = rowData.isDrillDown || false; 

    const _handleDrillDown = () => {
        const rowIndex = gridData.findIndex(_ => _[columnKeys.group] === name);
        if (rowIndex === -1) {
            return;
        }

        const newGridData = [...gridData];
        if (_isDrillDown) {
            newGridData.splice(rowIndex + 1, rowData.drillDownData.length)
        } else {
            newGridData.splice(rowIndex + 1, 0, ...rowData.drillDownData);
        }

        newGridData[rowIndex] = {
            ...rowData, 
            ...{ isDrillDown: !_isDrillDown }
        }
         
        setGridData(newGridData);
    }

    return (<Cell key={'group-cell-' + name} {...rest}>
        {name}
        {_isAllowedDrillDown && <i className={`icon-arrow right ${_isDrillDown ? 'arrow-down' : 'arrow-right'}`} onClick={_handleDrillDown}></i>}
    </Cell>)
}

function mapDispatchToProps(dispatch) {
    const { setGridData } = ActionCreators;
    return bindActionCreators(Object.assign({}, { setGridData }), dispatch);
}

function mapStateToProps(state) {
    const { gridData } = state;
    return Object.assign({}, { gridData });
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GroupCell));