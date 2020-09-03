import React from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import NumberHelper from '../../libs/helpers/numberHelper';

const HighlightBox = props => {
    const { title, description, value, rate, isNegativeMean, enableCompare, onViewDetail } = props;

    const _renderTitle = () => {
        return (<div className="sticky-box-title">
            {title}
        </div>)
    }

    const _renderDescription = () => {
        return (<div className="sticky-box-description">
            {description}
        </div>)
    }

    const _renderValue = () => {
        const isNumber = NumberFormat.isNumber(value);
        return (<div className="sticky-box-content">
            {isNumber ? NumberFormat.format(value) : value}
        </div>)
    }

    const _getArrowColor = rate => {
        return rate >= 0 ? 'border-top-green' : 'border-top-red';
    }

    const _renderCompareRate = () => {
        const roundedRate = NumberFormat.round(rate, 0);
        const rateDisplay = NumberHelper.displayRate(roundedRate);
        const _roundedRate = isNegativeMean ? -roundedRate : roundedRate;
        const color = NumberHelper.getColorRate(_roundedRate);
        const arrowColor = _getArrowColor(_roundedRate);
        const arrow = roundedRate >= 0 ? 'triangle-top-left' : 'triangle-bottom-left';
        return (
            <>
        <div className="sticky-box-compare-title">{LangHelper.getSingleResource('CompareDate')}</div>
        <div className="sticky-box-rate">
            {roundedRate !== 0 && <div className={`${arrow} ${arrowColor}`}></div>}
            <div className={`rate ${color}`}>{rateDisplay}</div>
        </div>
         </>)
    }

    return (<div className="sticky-box" style={{ cursor: onViewDetail ? 'pointer' : 'normal' }} onClick={() => onViewDetail && onViewDetail()}>
        {_renderTitle()}
        {_renderDescription()}
        {_renderValue()}
        {enableCompare !== false && _renderCompareRate()}
    </div>)
}

export default React.memo(HighlightBox);