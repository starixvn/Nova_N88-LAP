import React from 'react';
import { HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import NumberFormat from '@jsroot/lib/numberFormat';
import { dataColumns, columnKeys, defaultDisplayedColumns } from '../../constants/gridContants';

export default class GridHelper {
    static renderHeader(displayedColumns) {
        const objectColumns = GridHelper.toObjectColumns(displayedColumns);
        let tempRowObject;
        return (
            <HeaderRow style={{ height: '32px' }}>
                {(tempRowObject = objectColumns[columnKeys.group]) && tempRowObject.show && <HeaderCell {...dataColumns[columnKeys.group]}>{tempRowObject.name}</HeaderCell>}
                {(tempRowObject = objectColumns[columnKeys.turnover]) && tempRowObject.show && <HeaderCell {...dataColumns[columnKeys.group]}>{tempRowObject.name}</HeaderCell>}
                {(tempRowObject = objectColumns[columnKeys.ggr]) && tempRowObject.show && <HeaderCell {...dataColumns[columnKeys.group]}>{tempRowObject.name}</HeaderCell>}
                {(tempRowObject = objectColumns[columnKeys.betCount]) && tempRowObject.show && <HeaderCell {...dataColumns[columnKeys.group]}>{tempRowObject.name}</HeaderCell>}
                {(tempRowObject = objectColumns[columnKeys.betAmount]) && tempRowObject.show && <HeaderCell {...dataColumns[columnKeys.group]}>{tempRowObject.name}</HeaderCell>}
                {(tempRowObject = objectColumns[columnKeys.uniquePlayers]) && tempRowObject.show && <HeaderCell {...dataColumns[columnKeys.group]}>{tempRowObject.name}</HeaderCell>}
                {(tempRowObject = objectColumns[columnKeys.margin]) && tempRowObject.show && <HeaderCell {...dataColumns[columnKeys.group]}>{tempRowObject.name}</HeaderCell>}
            </HeaderRow>
        )
    }

    static renderBody(listData, displayedColumns) {
        const objectColumns = GridHelper.toObjectColumns(displayedColumns);
        return listData.map(rowData => this.renderRow(rowData, objectColumns));
    }

    static renderRow(rowData, objectColumns) {
        return (
            <Row>
                {objectColumns[columnKeys.group].show && <Cell className={dataColumns[columnKeys.group].className}>
                    {rowData[columnKeys.group]}
                </Cell>}
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