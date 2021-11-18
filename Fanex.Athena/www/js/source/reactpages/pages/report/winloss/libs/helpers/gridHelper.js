import React from 'react';
import { HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import LangHelper from '@jsroot/lib/langHelper';
import { dataColumns, defaultDisplayedColumns, componentCells } from '../../constants/gridContants';
import GridRow from '../../components/grid/GridRow';

export default class GridHelper {
    static renderHeader(displayedColumns, onDrop) {
        return (
            <HeaderRow style={{ height: '32px' }}>
                {[...defaultDisplayedColumns, ...displayedColumns].map(col =>
                    col.show && (<HeaderCell key={`header-cell-${col.key}`} {...dataColumns[col.key]}
                        onDrop={event => {
                            event.preventDefault();

                            const headerKey = event.dataTransfer.getData("headerKey");
                            const headerX = parseInt(event.dataTransfer.getData("headerX"));
                            const headerDestIndex = displayedColumns.findIndex(_ => _.key === col.key);
                            const headerSourceIndex = displayedColumns.findIndex(_ => _.key === headerKey);

                            const newDisplayedColumns = [...displayedColumns];
                            const targetX = event.target.getBoundingClientRect().x;
                            const dragElementX = event.clientX - headerX;

                            if(headerSourceIndex === headerDestIndex) {
                                return;
                            }
                            else if(headerSourceIndex < headerDestIndex) {
                                this._orderColumnsLeftToRight(newDisplayedColumns, headerSourceIndex, headerDestIndex, dragElementX, targetX);
                            }
                            else {
                                this._orderColumnsRightToLeft(newDisplayedColumns, headerSourceIndex, headerDestIndex, dragElementX, targetX);
                            }

                            onDrop && onDrop(newDisplayedColumns);
                        }}
                    >{col.name}
                    </HeaderCell>))}
            </HeaderRow>
        )
    }

    static renderBody(dataList, displayedColumns) {
        return dataList.map(rowData => <GridRow key={`row-${rowData.key}`} rowData={rowData} displayedColumns={displayedColumns} />);
    }

    static renderFooter(totalData, displayedColumns) {
        const cells = displayedColumns.map(col => {
            if (!col.show) {
                return null;
            }

            if (col.hasTotal) {
                return componentCells[col.key](totalData, '', '')
            } else {
                return <Cell />
            }
        })
        const row = (<Row className="fixed-table-grant-total" key="totalRow">
            {[<Cell key="total" className="center-align" >
                {LangHelper.getSingleResource("Total")}
            </Cell>, ...cells]}
        </Row>)

        return [row];
    }

    static resetGridDataList(dataList) {
        return dataList.filter(_ => {
            const noParent = !_.parent ? true : false;
            noParent && (_.isDrillDown = false);
            return noParent;
        });
    }

    static getOrderCols = (displayedColumns, excludedCols) => {
        return displayedColumns
            .filter(_ => _.show && (!excludedCols || excludedCols.every(col => col !== _.key)))
            .map(_ => _.key);
    }
    
    static _orderColumnsLeftToRight(columns, sourceIndex, destIndex, dragElementX, targetX) {
        if(dragElementX >= targetX) {
            destIndex++
        }
        const tempSource = columns[sourceIndex]; 
        for(let colIndex = sourceIndex; colIndex < destIndex - 1; colIndex++) {
            columns[colIndex] = columns[colIndex + 1];
        } 
        columns[destIndex - 1] = tempSource
    }

    static _orderColumnsRightToLeft(columns, sourceIndex, destIndex, dragElementX, targetX) {
        if(dragElementX <= targetX) {
            destIndex--
        }
        const tempSource = columns[sourceIndex]; 
        for(let colIndex = sourceIndex; colIndex > destIndex + 1; colIndex--) {
            columns[colIndex] = columns[colIndex - 1];
        } 
        columns[destIndex + 1] = tempSource;
    }
}
