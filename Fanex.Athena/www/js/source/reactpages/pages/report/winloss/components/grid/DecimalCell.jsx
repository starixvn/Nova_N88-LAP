import React from 'react';
import { Cell } from '@9softstudio/react-grid';
import NumberFormat from '@jsroot/lib/numberFormat';

const DecimalCell = props => {
    const { value, className } = props;
    return (<Cell className={className + (value < 0 ? ' negative' : '')}>
        {NumberFormat.format(value, 2)}
    </Cell>)
}

export default React.memo(DecimalCell);