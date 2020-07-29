export default class DataService {
    static filterDataWithSelectedProducts = (avgRevenueData, products) => {
        const selectedProducts = products.split(',');
        const dicSelectedProducts= selectedProducts.reduce((prevValue, currentValue) => ({ ...prevValue, [currentValue]: true }), {});
        const newData = avgRevenueData.filter(_ => dicSelectedProducts[_.productId]);
        return newData;
    }
}