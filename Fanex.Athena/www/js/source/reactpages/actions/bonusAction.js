import * as types from './types'

export const setSelectedBonusType = bonusType => {
    return {
        type: types.SET_SELECTED_BONUS_TYPE,
        data: bonusType
    }
}

export const setSelectedBonusStatus = bonusStatus => {
    return {
        type: types.SET_SELECTED_BONUS_STATUS,
        data: bonusStatus
    }
}

export const setSelectedBonusName = bonusName => {
    return {
        type: types.SET_BONUS_NAME,
        data: bonusName
    }
}

export const setBonusCodeList = bonusCodeList => {
    return {
        type: types.SET_BONUS_CODE_LIST,
        data: bonusCodeList
    }
}

export const setSelectedBonusCode = bonusCode => {
    return {
        type: types.SET_SELECTED_BONUS_CODE,
        data: bonusCode
    }
}