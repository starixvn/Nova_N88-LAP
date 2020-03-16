import { fields, columnList, licenseeType } from '../constants';

export const buildDefaultColumnList = (licType) => {
    return columnList.filter(item => {
        return item.key !== fields.BaStatus;
    }).map(item => ({...item }))
}

export const buildColumnList = (licType, isAllowedBA) => {
    return columnList.filter(item => {
        if (item.key === fields.BaStatus) {
            return isAllowedBA;
        } else {
            return true;
        }
    }).map(item => ({...item }))
};