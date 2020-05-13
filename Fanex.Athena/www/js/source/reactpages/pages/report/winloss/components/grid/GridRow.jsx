import React from 'react';
import { Row, Cell } from '@9softstudio/react-grid';
import { dataColumns, columnKeys } from '../../constants/gridContants';
import GroupCell from '../../components/grid/GroupCell';
import DecimalCell from '../../components/grid/DecimalCell';

const GridRow = props => {
    const { rowData, objectColumns } = props;
    const hasParent = rowData.parent ? true : false;
    const highLight = hasParent ? ' high-light' : '';
    const groupChildClassName = hasParent ? ' right-align' : '';
    return <Row>
        {objectColumns[columnKeys.group].show && <GroupCell rowData={rowData} className={highLight + groupChildClassName} />}
        {objectColumns[columnKeys.turnover].show && <DecimalCell value={rowData[columnKeys.turnover]} className={dataColumns[columnKeys.turnover].className + highLight} />}
        {objectColumns[columnKeys.ggr].show && <DecimalCell value={rowData[columnKeys.ggr]} className={dataColumns[columnKeys.ggr].className + highLight} />}
        {objectColumns[columnKeys.betCount].show && <DecimalCell value={rowData[columnKeys.betCount]} className={dataColumns[columnKeys.betCount].className + highLight} digits={0} />}
        {objectColumns[columnKeys.avgBetAmount].show && <DecimalCell value={rowData[columnKeys.avgBetAmount]} className={dataColumns[columnKeys.avgBetAmount].className + highLight} />}
        {objectColumns[columnKeys.uniquePlayers].show && <DecimalCell value={rowData[columnKeys.uniquePlayers]} className={dataColumns[columnKeys.uniquePlayers].className + highLight} digits={0} />}
        {objectColumns[columnKeys.margin].show && <DecimalCell value={rowData[columnKeys.margin]} className={dataColumns[columnKeys.margin].className + highLight}>
            {'%'}
            </DecimalCell>
            }
    </Row>
}

export default (React.memo(GridRow));

