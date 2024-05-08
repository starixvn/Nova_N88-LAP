import * as types from './types'

export const setSelectedCurrency = (item) => {
    return {
        type: types.SET_SELECTED_CURRENCY,
        data: item
    }
}

export const setCurrencyList = (item) => {
    return {
        type: types.SET_CURRENCY_LIST,
        data: item
    }
}