import React from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import NumberHelper from '../../libs/helpers/numberHelper';

const StickyCompareBox = props => {
    const { title, description, value, rate, showGrowthRateSympol } = props;

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

    const _renderRate = () => {
        const roundedRate = NumberFormat.round(rate, 0);
        const rateDisplay = NumberHelper.displayRate(roundedRate);
        const color = roundedRate >= 0 ? 'green' : 'red';
        return (<div className="sticky-box-rate">
            {showGrowthRateSympol !== false && <div className="triangle-top-left-green"></div>}
            <div className={`rate ${color}`}>{rateDisplay}</div>
        </div>)
    }

    return (<div className="sticky-box">
        {_renderTitle()}
        {_renderDescription()}
        {_renderValue()}
        <div className="sticky-box-compare-title">{LangHelper.getSingleResource('CompareDate')}</div>
        {_renderRate()}
    </div>)
}

export default React.memo(StickyCompareBox);