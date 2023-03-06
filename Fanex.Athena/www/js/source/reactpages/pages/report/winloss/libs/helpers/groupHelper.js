import AppData from '@jsroot/lib/AppData'

export default class GroupHelper {
    static getDislayedColumns(displayedColumns, groupBy) {
        const displayedAllowCols = displayedColumns.filter(col => {
            const allowColumn = AppData.specialReportDataPermission[col.key];
            if(allowColumn !== undefined && !allowColumn) {
                return false;
            }

            const allowGroups = col.allowGroups;
            if(!allowGroups) {
                return true;
            }
            return allowGroups.some(_groupBy => _groupBy === groupBy);
        });
        return displayedAllowCols;
    } 
}