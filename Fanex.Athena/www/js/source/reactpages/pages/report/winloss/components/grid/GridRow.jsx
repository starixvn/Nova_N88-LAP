import React from 'react';
import { Row, Cell } from '@9softstudio/react-grid';
import { dataColumns, columnKeys } from '../../constants/gridContants';
import GroupCell from '../../components/grid/GroupCell';
import DecimalCell from '../../components/grid/DecimalCell';

const GridRow = props => {
    const { rowData, objectColumns } = props;
    const hasParent = rowData.hasParent;
    const highLight = hasParent ? ' high-light' : '';
    const groupChildClassName = hasParent ? ' right-align' : '';
    return <Row>
        {objectColumns[columnKeys.group].show && <GroupCell rowData={rowData} className={highLight + groupChildClassName} />}
        {objectColumns[columnKeys.turnover].show && <DecimalCell value={rowData[columnKeys.turnover]} className={dataColumns[columnKeys.turnover].className + highLight} />}
        {objectColumns[columnKeys.ggr].show && <DecimalCell value={rowData[columnKeys.ggr]} className={dataColumns[columnKeys.ggr].className + highLight} />}
        {objectColumns[columnKeys.betCount].show && <Cell className={dataColumns[columnKeys.betCount].className + highLight}>
            {rowData[columnKeys.betCount]}
        </Cell>}
        {objectColumns[columnKeys.avgBetAmount].show && <DecimalCell value={rowData[columnKeys.avgBetAmount]} className={dataColumns[columnKeys.avgBetAmount].className + highLight} />}
        {objectColumns[columnKeys.uniquePlayers].show && <Cell className={dataColumns[columnKeys.uniquePlayers].className + highLight}>
            {rowData[columnKeys.uniquePlayers]}
        </Cell>}
        {objectColumns[columnKeys.margin].show && <DecimalCell value={rowData[columnKeys.margin]} className={dataColumns[columnKeys.margin].className + highLight} />}
    </Row>
}

export default (React.memo(GridRow));

