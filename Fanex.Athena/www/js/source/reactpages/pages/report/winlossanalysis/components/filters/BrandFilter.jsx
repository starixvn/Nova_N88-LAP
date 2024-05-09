import React from 'react'
import LangHelper from '@jsroot/lib/langHelper'
import MultipleSelect from '@legion-lib/react-multiselect'
import AppData from '@jsroot/lib/AppData'
import PropTypes from 'prop-types';
import { memo } from 'react';

export const BrandFilter = (props) => {
    const { onChange, isValid } = props;
    const _renderBrandSelectList = () => {
        return AppData.brandOptions?.length && (
            <MultipleSelect id="BrandList"
                language={LangHelper.currentLanguage}
                dataSource={AppData.brandOptions}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={onChange}
                isValid={isValid}
            />
        );
    }

    return (
        <div className="form-group">
            <label className="label-text">{LangHelper.getSingleResource("Brand")}</label>
            {_renderBrandSelectList()}
        </div>)
}

const propTypes = {
    onChange: PropTypes.func,
    isValid: PropTypes.bool,
};

const defaultProps = {
    isValid: true
};

BrandFilter.propTypes = propTypes;
BrandFilter.defaultProps = defaultProps;


export default memo(BrandFilter);