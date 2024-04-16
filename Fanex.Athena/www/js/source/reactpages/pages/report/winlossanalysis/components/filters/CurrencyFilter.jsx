import React from 'react'
import MultipleSelect from '@legion-lib/react-multiselect'
import LangHelper from '@jsroot/lib/langHelper'
import CurrencyHelper from '@jsroot/lib/currencyHelper'
import AppData from '@jsroot/lib/AppData'
import PropTypes from 'prop-types';
import { memo, useCallback } from 'react';

export const CurrencyFilter = (props) => {
    const { onChange, isValid, selectedBrand } = props;

    const _renderCurrencySelectList = () => {
        const currencyList = useCallback(CurrencyHelper.getTpCurrencyList(selectedBrand, AppData.brands), [selectedBrand]);

        return currencyList && currencyList.length && (
            <MultipleSelect
                id="ddlCurrency"
                language={LangHelper.currentLanguage}
                dataSource={currencyList}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={onChange}
                isValid={isValid} />);
    }

    return (
        <div className="form-group">
            <label className="label-text">{LangHelper.getSingleResource("Currency")}</label>
            {_renderCurrencySelectList()}
        </div>)
}

const propTypes = {
    onChange: PropTypes.func,
    isValid: PropTypes.bool,
    selectedBrand: PropTypes.string,
};
const defaultProps = {
    isValid: true
};

CurrencyFilter.propTypes = propTypes;
CurrencyFilter.defaultProps = defaultProps;

export default memo(CurrencyFilter);