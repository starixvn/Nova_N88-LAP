import * as types from './types'

export const setSelectedBrand = brandIds => {
    return {
        type: types.SET_SELECTED_BRAND,
        data: brandIds
    };
}