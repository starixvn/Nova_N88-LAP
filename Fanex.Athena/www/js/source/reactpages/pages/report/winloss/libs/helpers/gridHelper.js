import React from 'react';
import { HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import LangHelper from '@jsroot/lib/langHelper';
import { dataColumns, columnKeys, defaultDisplayedColumns } from '../../constants/gridContants';
import DecimalCell from '../../components/grid/DecimalCell';
import GridRow from '../../components/grid/GridRow';

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
        return dataList.map(rowData => <GridRow key={`row-${rowData[columnKeys.group]}-${rowData.parent}`} rowData={rowData} objectColumns={objectColumns} />);
    }

    static renderFooter(totalData, objectColumns) {
        const row = (<Row className="fixed-table-grant-total" key="totalRow">
            {objectColumns[columnKeys.group].show && <Cell className="center-align">
                {LangHelper.getSingleResource("Total")}
            </Cell>}
            {objectColumns[columnKeys.turnover].show && <DecimalCell value={totalData[columnKeys.turnover]} className={dataColumns[columnKeys.turnover].className} />}
            {objectColumns[columnKeys.ggr].show && <DecimalCell value={totalData[columnKeys.ggr]} className={dataColumns[columnKeys.ggr].className} />}
            {objectColumns[columnKeys.betCount].show && <Cell className={dataColumns[columnKeys.betCount].className}>
                {totalData[columnKeys.betCount]}
            </Cell>}
            {objectColumns[columnKeys.betAmount].show && <DecimalCell value={totalData[columnKeys.betAmount]} className={dataColumns[columnKeys.betAmount].className} />}
            {objectColumns[columnKeys.uniquePlayers].show && <Cell className={dataColumns[columnKeys.uniquePlayers].className}>
                {totalData[columnKeys.uniquePlayers]}
            </Cell>}
            {objectColumns[columnKeys.margin].show && <DecimalCell value={totalData[columnKeys.margin]} className={dataColumns[columnKeys.turnover].className} />}
        </Row>)

        return [row];
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
