import { fields, columnList, licenseeType } from '../constants';

export const buildDefaultColumnList = (hasOddsGroupPermission, hasSpecialLevelPermission) => {
    return columnList.filter(item => {
        if (item.key === fields.OddsGroup) {
            return hasOddsGroupPermission.isallowed;
        }
        if (item.key === fields.SpecialLevel) {
            return hasSpecialLevelPermission.isallowed;
        }
        else {
            return true;
        }
    }).map(item => ({...item }))
}

export const buildColumnList = (hasOddsGroupPermission, hasSpecialLevelPermission,) => {
    console.log(hasBaPermission, hasOddsGroupPermission, hasSpecialLevelPermission);
    return columnList.filter(item => {
        if (item.key === fields.OddsGroup) {
            return hasOddsGroupPermission.isallowed;
        }
        if (item.key === fields.SpecialLevel) {
            return hasSpecialLevelPermission.isallowed;
        }
        else {
            return true;
        }
    }).map(item => ({...item }))
};