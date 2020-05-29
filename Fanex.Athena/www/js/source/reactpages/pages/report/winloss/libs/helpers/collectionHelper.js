export default class CollectionHelper {
    static createDataSourceFrom(originDataSource, selectedItems) {
        const selectedItemList = selectedItems.split(',').filter(x => x !== '');
        const convertedList = originDataSource.map(item => {
            const { key, value } = item;
            return {
                key,
                value,
                status: selectedItemList.find(_ => _ == key) ? true : false
            }
        })

        return convertedList;
    }

    static sort(items, sortBy, sortType = 'asc') {
        if (!items || !items.length) {
            return [];
        }
        const comparer = this.buildComparer(sortBy, sortType);
        return items.sort(comparer);
    }

    static buildComparer = (property, sortType) => {
        const sortFactor = sortType === 'asc' ? 1 : -1;
        return (elment1, element2) => {
            let value;
            if (elment1[property] < element2[property]) {
                value = -1;
            } else if (elment1[property] > element2[property]) {
                value = 1;
            } else {
                value = 0;
            }
            return value * sortFactor;
        }
    }
}