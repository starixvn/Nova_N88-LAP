import React from 'react';
import { Row } from '@9softstudio/react-grid';
import { defaultDisplayedColumns, componentCells } from '../../constants/gridContants';

const GridRow = props => {
    const { rowData, displayedColumns } = props;
    const hasParent = rowData.parent ? true : false;
    const highLight = hasParent ? ' high-light' : '';
    const groupChildClassName = hasParent ? ' right-align' : '';
    return <Row>
        {[...defaultDisplayedColumns, ...displayedColumns].map(
            col => col.show && componentCells[col.key] && componentCells[col.key](rowData, highLight, groupChildClassName))}
    </Row>
}

export default React.memo(GridRow);

