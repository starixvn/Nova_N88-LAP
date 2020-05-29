import React from 'react';
import { Cell } from '@9softstudio/react-grid';
import NumberFormat from '@jsroot/lib/numberFormat';

const DecimalCell = props => {
    const { value, className, children, digits } = props;
    return (<Cell className={className + (value < 0 ? ' negative' : '')}>
        {NumberFormat.format(value, digits)}
        {children}
    </Cell>)
}

DecimalCell.defaultProps = {
    digits: 2
}

export default React.memo(DecimalCell);