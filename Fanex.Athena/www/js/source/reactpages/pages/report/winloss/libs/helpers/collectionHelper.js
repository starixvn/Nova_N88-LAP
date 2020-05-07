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
        const sortFactor = sortType === 'asc' ? 1 : -1;
        const comparer = this.getComparer(sortBy, sortFactor);
        return items.sort(comparer);
    }

    static getComparer = (property, sortFactor) => (elment1, element2) => {
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