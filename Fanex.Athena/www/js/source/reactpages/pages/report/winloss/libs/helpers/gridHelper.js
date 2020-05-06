import React from 'react';
import { HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import NumberFormat from '@jsroot/lib/numberFormat';
import LangHelper from '@jsroot/lib/langHelper';
import { dataColumns, columnKeys, defaultDisplayedColumns } from '../../constants/gridContants';
import GroupCell from '../../components/grid/GroupCell';

export default class GridHelper {
    static renderHeader(objectColumns) {
        let objectColumn;
        return (
            <HeaderRow style={{ height: '32px' }}>
                {(objectColumn = objectColumns[columnKeys.group]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.group]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.turnover]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.turnover]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.ggr]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.ggr]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.betCount]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.betCount]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.betAmount]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.betAmount]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.uniquePlayers]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.uniquePlayers]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.margin]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.margin]}>{objectColumn.name}</HeaderCell>}
            </HeaderRow>
        )
    }

    static renderBody(dataList, objectColumns) {
        return dataList.map((rowData, index) => this.renderRow(rowData, index, objectColumns));
    }

    static renderFooter(totalData, objectColumns) {
        const row = (<Row className="fixed-table-grant-total" key="totalRow">
                {objectColumns[columnKeys.group].show && <Cell className={dataColumns[columnKeys.group].className}>
                    {LangHelper.getSingleResource("Total")}
                </Cell>}
                {objectColumns[columnKeys.turnover].show && <Cell className={dataColumns[columnKeys.turnover].className}>
                    {NumberFormat.format(totalData[columnKeys.turnover], 2)}
                </Cell>}
                {objectColumns[columnKeys.ggr].show && <Cell className={dataColumns[columnKeys.ggr].className}>
                    {NumberFormat.format(totalData[columnKeys.ggr], 2)}
                </Cell>}
                {objectColumns[columnKeys.betCount].show && <Cell className={dataColumns[columnKeys.betCount].className}>
                    {NumberFormat.format(totalData[columnKeys.betCount], 2)}
                </Cell>}
                {objectColumns[columnKeys.betAmount].show && <Cell className={dataColumns[columnKeys.betAmount].className}>
                    {NumberFormat.format(totalData[columnKeys.betAmount], 2)}
                </Cell>}
                {objectColumns[columnKeys.uniquePlayers].show && <Cell className={dataColumns[columnKeys.uniquePlayers].className}>
                    {totalData[columnKeys.uniquePlayers]}
                </Cell>}
                {objectColumns[columnKeys.margin].show && <Cell className={dataColumns[columnKeys.margin].className}>
                    {NumberFormat.format(totalData[columnKeys.margin], 2) + '%'}
                </Cell>}
        </Row>)

        return [row];
    }

    static renderRow(rowData, index, objectColumns) {
        const highLight = rowData.parent > -1 ? ' high-light' : '';
        return (
            <Row key={'row-' + index}>
                {objectColumns[columnKeys.group].show && <GroupCell rowData={rowData} className={dataColumns[columnKeys.group].className + highLight} />}
                {objectColumns[columnKeys.turnover].show && <Cell className={dataColumns[columnKeys.turnover].className + highLight}>
                    {NumberFormat.format(rowData[columnKeys.turnover], 2)}
                </Cell>}
                {objectColumns[columnKeys.ggr].show && <Cell className={dataColumns[columnKeys.ggr].className + highLight}>
                    {NumberFormat.format(rowData[columnKeys.ggr], 2)}
                </Cell>}
                {objectColumns[columnKeys.betCount].show && <Cell className={dataColumns[columnKeys.betCount].className + highLight}>
                    {NumberFormat.format(rowData[columnKeys.betCount], 2)}
                </Cell>}
                {objectColumns[columnKeys.betAmount].show && <Cell className={dataColumns[columnKeys.betAmount].className + highLight}>
                    {NumberFormat.format(rowData[columnKeys.betAmount], 2)}
                </Cell>}
                {objectColumns[columnKeys.uniquePlayers].show && <Cell className={dataColumns[columnKeys.uniquePlayers].className + highLight}>
                    {rowData[columnKeys.uniquePlayers]}
                </Cell>}
                {objectColumns[columnKeys.margin].show && <Cell className={dataColumns[columnKeys.margin].className + highLight}>
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