import { SET_SORT_OPTION } from './types'

export const setSortOption = (data) => {
    return {
        type: SET_SORT_OPTION,
        data
    }
}