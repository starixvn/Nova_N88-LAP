import React from 'react';
import { HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import NumberFormat from '@jsroot/lib/numberFormat';
import { dataColumns, columnKeys, defaultDisplayedColumns } from '../../constants/gridContants';
import GroupCell from '../../components/grid/GroupCell';

export default class GridHelper {
    static renderHeader(displayedColumns) {
        const objectColumns = this.toObjectColumns(displayedColumns);
        let objectColumn;
        return (
            <HeaderRow style={{ height: '32px' }}>
                {(objectColumn = objectColumns[columnKeys.group]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.group]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.turnover]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.group]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.ggr]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.group]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.betCount]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.group]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.betAmount]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.group]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.uniquePlayers]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.group]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.margin]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.group]}>{objectColumn.name}</HeaderCell>}
            </HeaderRow>
        )
    }

    static renderBody(listData, displayedColumns) {
        const objectColumns = this.toObjectColumns(displayedColumns);
        return listData.map((rowData, index) => this.renderRow(rowData, index, objectColumns));
    }
      
    static renderRow(rowData, index, objectColumns) {
        return (
            <Row key={'row-' + index}>
                {objectColumns[columnKeys.group].show && <GroupCell rowData={rowData} className={dataColumns[columnKeys.group].className} />}
                {objectColumns[columnKeys.turnover].show && <Cell className={dataColumns[columnKeys.turnover].className}>
                    {NumberFormat.format(rowData[columnKeys.turnover], 2)}
                </Cell>}
                {objectColumns[columnKeys.ggr].show && <Cell className={dataColumns[columnKeys.ggr].className}>
                    {NumberFormat.format(rowData[columnKeys.ggr], 2)}
                </Cell>}
                {objectColumns[columnKeys.betCount].show && <Cell className={dataColumns[columnKeys.betCount].className}>
                    {NumberFormat.format(rowData[columnKeys.betCount], 2)}
                </Cell>}
                {objectColumns[columnKeys.betAmount].show && <Cell className={dataColumns[columnKeys.betAmount].className}>
                    {NumberFormat.format(rowData[columnKeys.betAmount], 2)}
                </Cell>}
                {objectColumns[columnKeys.uniquePlayers].show && <Cell className={dataColumns[columnKeys.uniquePlayers].className}>
                    {rowData[columnKeys.uniquePlayers]}
                </Cell>}
                {objectColumns[columnKeys.margin].show && <Cell className={dataColumns[columnKeys.margin].className}>
                    {NumberFormat.format(rowData[columnKeys.margin], 2) + '%'}
                </Cell>}
            </Row>
        )
    }

    static toObjectColumns(displayedColumns) {
        displayedColumns = [...displayedColumns, ...defaultDisplayedColumns];
        return displayedColumns.reduce((accumulator, currentValue) => (
            {
                ...accumulator,
                ...{ [currentValue.key]: currentValue }
            }),
            {}
        )
    }
}