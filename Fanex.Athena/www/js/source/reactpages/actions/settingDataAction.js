import * as types from './types'

export const setSettingData = data => {
    return {
        type: types.SET_SETTING_DATA,
        data
    };
}