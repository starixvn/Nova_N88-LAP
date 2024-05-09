import { shallowEqual, useSelector } from 'react-redux'

export const useValidParam = () => {
    const [selectedProduct, selectedStatus, selectedPlatform, selectedLiveStatus, selectedCurrency, selectedCustomerClass, selectedOddsGroup, selectedBettype, selectedSport, selectedBrand]
        = useSelector(state =>
            [
                state.selectedProduct,
                state.selectedStatus,
                state.selectedPlatform,
                state.selectedLiveStatus,
                state.selectedCurrency,
                state.selectedCustomerClass,
                state.selectedOddsGroup,
                state.selectedBettype,
                state.selectedSport,
                state.selectedBrand,
            ]
            , shallowEqual)

    return !!selectedProduct
        && !!selectedStatus
        && !!selectedLiveStatus
        && !!selectedCurrency
        && !!selectedBettype
        && !!selectedSport
        && !!selectedPlatform
        && !!selectedCustomerClass
        && !!selectedOddsGroup
        && !!selectedBrand
}