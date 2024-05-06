import React, { memo } from 'react'
import AppData from '@jsroot/lib/AppData'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import MultipleSelect from '@legion-lib/react-multiselect'
import { ActionCreators } from '../../actions/index.js'
import LangHelper from '@jsroot/lib/langHelper'


export const CurrecyFilter = (props) => {
    const [selectedCurrencyList, selectedBaseCurrency] = useSelector(state => [state.selectedCurrencyList, state.selectedBaseCurrency], shallowEqual);

    const dispatch = useDispatch();
    const {setSelectedCurrency, setSelectedBaseCurrency} = ActionCreators;

    const  _onChangeCurrency = (currencyIdList) => {
        let baseCurrency = "";
        let baseCurrencyList = AppData.baseCurrencyList;

        if (!currencyIdList) {
            baseCurrency = AppData.defaultBaseCurrency;
        }
        else if (!!currencyIdList && currencyIdList.indexOf(',') > 0) {
            baseCurrency = baseCurrencyList.find(x => x.label === selectedBaseCurrency) ? selectedBaseCurrency : AppData.defaultBaseCurrency;
        }
        else {
            const currencyName = selectedCurrencyList.find(x => x.key == currencyIdList).value;
            baseCurrency = currencyName;

            if (!baseCurrencyList.find(x => x.label === currencyName)) {
                baseCurrency = '';
                baseCurrencyList = AppData.baseCurrencyList.slice(0);
                baseCurrencyList.push({ value: baseCurrency, label: currencyName });    
            }
        }

        dispatch(setSelectedCurrency(currencyIdList));
        dispatch(setSelectedBaseCurrency(baseCurrency));
        props.setBaseCurrencyList(baseCurrencyList);
    }


    const _renderCurrencySelectList = () => {
        return selectedCurrencyList && selectedCurrencyList.length && (
            <MultipleSelect id="ddlCurrency"
                language={LangHelper.currentLanguage}
                dataSource={selectedCurrencyList}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(currentItem, selectedItemsKey) => _onChangeCurrency(selectedItemsKey)} 
                {...props}/>);
    }

    return (
    <div className="form-group">
        <label className="label-text">{LangHelper.getSingleResource("Currency")}</label>
        {_renderCurrencySelectList()}
    </div>)
}

export default memo(CurrecyFilter);