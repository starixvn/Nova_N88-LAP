import * as types from './types'

export const setSelectedClaimStatus = (claimStatus) => {
    return {
        type: types.SET_SELECTED_CLAIM_STATUS,
        data: claimStatus
    }
}