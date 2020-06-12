export default class GroupHelper {
    static getDislayedColumns(displayedColumns, groupBy) {
        const displayedAllowCols = displayedColumns.filter(col => {
            const allowGroups = col.allowGroups;
            if(!allowGroups) {
                return true;
            }
            return allowGroups.some(_groupBy => _groupBy === groupBy);
        });
        return displayedAllowCols;
    } 
}