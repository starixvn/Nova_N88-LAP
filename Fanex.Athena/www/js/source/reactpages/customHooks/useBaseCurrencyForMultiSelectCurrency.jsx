import { useEffect, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import AppData from '@jsroot/lib/AppData';
import CurrencyHelper from '@jsroot/lib/currencyHelper'
import { useIsFirstRender } from "usehooks-ts";

export const useBaseCurrencyForMultiSelectCurrency = (initSelectedBaseCurrency, selectedBrand) => {
    const [originalBaseCurrencyList, originalCurrencyList] = [AppData.baseCurrencyList, CurrencyHelper.getTpCurrencyList(selectedBrand, AppData.brands)];
    const defaultBaseCurrencyRef = useRef(initSelectedBaseCurrency);
    const isFirstRender = useIsFirstRender();
    const [selectedCurrency, selectedBaseCurrency] = useSelector(state => [state.selectedCurrency, state.selectedBaseCurrency], shallowEqual);
    const [currentBaseCurrencyList, setCurrentBaseCurrencyList] = useState(originalBaseCurrencyList);
    const [currentBaseCurrency, setCurrenctBaseCurrency] = useState(selectedBaseCurrency);

    useEffect(() => {
        if (currentBaseCurrency != selectedBaseCurrency) {
            setCurrenctBaseCurrency(selectedBaseCurrency);
        }
    }, [selectedBaseCurrency])


    useEffect(() => {
        const defaultBaseCurrency = defaultBaseCurrencyRef.current;

        let newBaseCurrency = '';
        let newBaseCurrencyList = currentBaseCurrencyList;
        const _isSingleSelectedCurrency = () => selectedCurrency && selectedCurrency.indexOf(',') < 0

        if (_isSingleSelectedCurrency()) {
            const currencyName = originalCurrencyList.find(x => x.key == selectedCurrency).value;
            if (!currentBaseCurrencyList.find(x => x.label === currencyName)) {
                newBaseCurrency = '';
                newBaseCurrencyList = originalBaseCurrencyList.slice(0);
                newBaseCurrencyList.push({ value: newBaseCurrency, label: currencyName });
            }
            else {
                newBaseCurrency = currencyName;
                newBaseCurrencyList = currentBaseCurrencyList;
            }
        }
        else {
            newBaseCurrencyList = originalBaseCurrencyList;
            newBaseCurrency = newBaseCurrencyList.find(x => x.label === selectedBaseCurrency) ?
                selectedBaseCurrency :
                defaultBaseCurrency;
        }

        if (newBaseCurrencyList != currentBaseCurrencyList) {
            setCurrentBaseCurrencyList(newBaseCurrencyList);
        }
        if (newBaseCurrency != currentBaseCurrency) {
            setCurrenctBaseCurrency(newBaseCurrency);
        }
    }, [selectedCurrency])

    if (isFirstRender && !initSelectedBaseCurrency) {
        defaultBaseCurrencyRef.current = selectedBaseCurrency;
    }

    return { baseCurrencyList: currentBaseCurrencyList, selectedBaseCurrency: currentBaseCurrency };
}

export default useBaseCurrencyForMultiSelectCurrency;