import React from 'react';
import { HeaderRow, HeaderCell } from '@9softstudio/react-grid';
import { dataGridHeaders } from '../../constants/gridContants';

export default class GridHelper {
    static renderHeader(displayedColumns) {
        return (
            <HeaderRow style={{ height: 32 }}>
                {dataGridHeaders && dataGridHeaders.length > 0 &&
                    dataGridHeaders
                    .filter(_ => displayedColumns[_.key] && displayedColumns[_.key].isShow)
                    .map(_ => <HeaderCell key={_.key} colWidth={_.colWidth} sortBy={_.sortBy}>
                            {displayedColumns[_.key].name}
                    </HeaderCell>)
                }
            </HeaderRow>
        )
    }
}