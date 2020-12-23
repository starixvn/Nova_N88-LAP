import React from 'react';
import { Cell } from '@9softstudio/react-grid';

const GroupCell = props => {
    const { rowData, dataList, fieldKey, allowedDrillDown, isChild, onDrillDown, displayText, ...rest } = props;
    const _isDrillDown = rowData.isDrillDown || false; 

    const _handleDrillDown = () => {
        const rowIndex = dataList.findIndex(_ => _[fieldKey] === rowData[fieldKey]);
        if (rowIndex === -1) {
            return;
        }
        if (_isDrillDown) {
            dataList.splice(rowIndex + 1, rowData.childs.length)
        } else {
            dataList.splice(rowIndex + 1, 0, ...rowData.childs);
        }

        dataList[rowIndex] = {
            ...rowData, 
            ...{ isDrillDown: !_isDrillDown }
        }

        onDrillDown && onDrillDown(dataList);
    }

    return (<Cell key={`group-cell-${rowData[fieldKey]}`} {...rest}>
        {allowedDrillDown && <i className='icon-arrow' style={{ transform: _isDrillDown ? 'rotate(0)' : null }} onClick={_handleDrillDown}></i>}
        <span style={{ marginLeft: isChild ? '20px' : '0' }}>{displayText}</span>
    </Cell>)
}

export default React.memo(GroupCell)