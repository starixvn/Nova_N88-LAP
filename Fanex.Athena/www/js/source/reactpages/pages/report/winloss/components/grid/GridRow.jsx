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
    let objectColumn;
    return <Row>
        {objectColumns[columnKeys.group].show && <GroupCell rowData={rowData} className={highLight + groupChildClassName} />}
        {(objectColumn = objectColumns[columnKeys.sabaId])  && objectColumn.show && <Cell className={dataColumns[columnKeys.sabaId].className + highLight} >
            {rowData[columnKeys.sabaId]}
        </Cell>}
        {(objectColumn = objectColumns[columnKeys.sabaSystemId])  && objectColumn.show && <Cell className={dataColumns[columnKeys.sabaSystemId].className + highLight} >
            {rowData[columnKeys.sabaSystemId]}
        </Cell>}
        {objectColumns[columnKeys.turnover].show && <DecimalCell value={rowData[columnKeys.turnover]} className={dataColumns[columnKeys.turnover].className + highLight} />}
        {objectColumns[columnKeys.netTurnover].show && <DecimalCell value={rowData[columnKeys.netTurnover]} className={dataColumns[columnKeys.netTurnover].className + highLight} />}
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

export default React.memo(GridRow);

