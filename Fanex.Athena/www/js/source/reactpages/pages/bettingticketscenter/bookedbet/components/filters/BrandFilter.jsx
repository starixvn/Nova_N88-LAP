
import React, { memo } from 'react'
import AppData from '@jsroot/lib/AppData'
import Select from 'react-select'
import LangHelper from '@jsroot/lib/langHelper'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreators } from '../../actions/index.js'
import CurrencyHelper from '@jsroot/lib/currencyHelper'


export const BrandFilter = (props) => {
    const selectedBrand = useSelector(state => state.selectedBrand);
    const dispatch = useDispatch();
    const {setSelectedBrand, setSelectedCurrency, setCurrencyList} = ActionCreators;
    const changeBrand = (brand) => {
        dispatch(setSelectedBrand(brand));
        const currencyList = CurrencyHelper.getAgentCurrencyList(brand, AppData.brands);
        const selectedCurrency = currencyList.map(_ => _.key).join(',');
        dispatch(setCurrencyList(currencyList));
        dispatch(setSelectedCurrency(selectedCurrency));
    }

    props.disabled && changeBrand(AppData.defaultSelectedBrand);

    return( 
    <div className="form-group">
        <label className="label-text">{LangHelper.getSingleResource("Brand")}</label>
        <Select 
            key={`brandList${props.disabled}`}
            instanceId="brandList"
            value={selectedBrand}
            options={AppData.brandOptions}
            onChange={item => changeBrand(item.value)}
            {...props}/>
    </div>)
}
export default memo(BrandFilter);
