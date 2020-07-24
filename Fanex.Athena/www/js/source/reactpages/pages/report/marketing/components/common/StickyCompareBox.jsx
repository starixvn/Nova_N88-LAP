import React from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import NumberHelper from '../../libs/helpers/numberHelper';

const StickyCompareBox = props => {

    const { title, description, value, rate } = props;

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
        return (<div className="sticky-box-content">
            {NumberFormat.format(value)}
        </div>)
    }

    const _renderRate = () => {
        const rateDisplay = NumberHelper.displayRate(rate);
        const color = rate >= 0 ? 'green' : 'red';
        return (<div className="sticky-box-rate">
            <div className="triangle-top-left-green"></div>
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