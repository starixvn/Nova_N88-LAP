export default class CurrencyHelper {
    static getTpCurrencyList(brandIds, brands) {
        return this._getCurrencyList(brandIds, brands, 'tpCurrencies');
    }

    static getAgentCurrencyList(brandIds, brands) {
        return this._getCurrencyList(brandIds, brands, 'currencies');
    }

    static _getCurrencyList(brandIds, brands, currencyProperty) {
        const brandIdList = (brandIds + '').split(',');
        const existKeys = {};
        const currencyList = brandIdList.reduce((result, brandId) => {
            const currencyListByBrand = this._getCurrencyListByBrandId(brandId, brands, existKeys, currencyProperty);
            return [...result, ...currencyListByBrand]
        }, []);

        return currencyList;
    }

    static _getCurrencyListByBrandId(brandId, brands, existKeys, currencyProperty) {
        var brandInfo = brands.find(_ => _.id === parseInt(brandId));
        if (brandInfo) {
            return brandInfo[currencyProperty].reduce((result, currentValue) => {
                if (!existKeys[currentValue.key]) {
                    existKeys[currentValue.key] = true;
                    return [...result, { ...currentValue, status: true }]
                }
                return result;
            }, [])
        }
        return [];
    }
}

