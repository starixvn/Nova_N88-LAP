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
                {(objectColumn = objectColumns[columnKeys.sabaId]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.sabaId]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.sabaSystemId]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.sabaSystemId]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.turnover]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.turnover]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.ggr]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.ggr]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.betCount]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.betCount]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.avgBetAmount]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.avgBetAmount]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.uniquePlayers]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.uniquePlayers]}>{objectColumn.name}</HeaderCell>}
                {(objectColumn = objectColumns[columnKeys.margin]) && objectColumn.show && <HeaderCell {...dataColumns[columnKeys.margin]}>{objectColumn.name}</HeaderCell>}
            </HeaderRow>
        )
    }

    static renderBody(dataList, objectColumns) {
        return dataList.map(rowData => <GridRow key={`row-${rowData[columnKeys.group]}-${rowData.parent || ''}`} rowData={rowData} objectColumns={objectColumns} />);
    }
    
    static renderFooter(totalData, objectColumns) {
        const totalColumns = this.getTotalColumns(objectColumns);
        let objectColumn;
        const row = (<Row className="fixed-table-grant-total" key="totalRow">
            {objectColumns[columnKeys.group].show && <Cell key="total" className="center-align" colSpan={totalColumns.length} >
                {LangHelper.getSingleResource("Total")}
            </Cell>}
            {(objectColumn = objectColumns[columnKeys.sabaId]) && !objectColumn.isTotalColumn && objectColumn.show && <Cell className={dataColumns[columnKeys.sabaId].className}  >
            </Cell>}
            {(objectColumn = objectColumns[columnKeys.sabaSystemId]) && !objectColumn.isTotalColumn && objectColumn.show  && <Cell className={dataColumns[columnKeys.sabaSystemId].className}  >
            </Cell>}
            {objectColumns[columnKeys.turnover].show && <DecimalCell value={totalData[columnKeys.turnover]} className={dataColumns[columnKeys.turnover].className} />}
            {objectColumns[columnKeys.ggr].show && <DecimalCell value={totalData[columnKeys.ggr]} className={dataColumns[columnKeys.ggr].className} />}
            {objectColumns[columnKeys.betCount].show && <DecimalCell value={totalData[columnKeys.betCount]} className={dataColumns[columnKeys.betCount].className} digits={0} />}
            {objectColumns[columnKeys.avgBetAmount].show && <DecimalCell value={totalData[columnKeys.avgBetAmount]} className={dataColumns[columnKeys.avgBetAmount].className} />}
            {objectColumns[columnKeys.uniquePlayers].show && <DecimalCell value={totalData[columnKeys.uniquePlayers]} className={dataColumns[columnKeys.uniquePlayers].className} digits={0} />}
            {objectColumns[columnKeys.margin].show && <DecimalCell value={totalData[columnKeys.margin]} className={dataColumns[columnKeys.turnover].className} >
                {'%'}
            </DecimalCell>
            }
        </Row>)

        return [row];
    }

    static getTotalColumns(objectColumns) {
        const totalColumns = Object.values(objectColumns).filter(_ => _.show && _.isTotalColumn);
        return totalColumns;
    }

    static resetGridDataList(dataList) {
        return dataList.filter(_ => {
            const noParent = !_.parent ? true : false;
            noParent && (_.isDrillDown = false);
            return noParent;
        });
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
