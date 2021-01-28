"use strict";
define(["lib/linq"], function () {
    function sort(arrayData, sortByFunc, sortOrder, sortThenByFunc, sortThenOrder) {
        if (!sortByFunc || arrayData.length <= 1) {
            return arrayData;
        }

        var sortType = sortOrder === "asc" ? "OrderBy" : "OrderByDescending";

        if (!sortThenByFunc) {
            return Enumerable.From(arrayData)[sortType](sortByFunc).ToArray();
        }

        var sortThenType = sortThenOrder === "asc" ? "ThenBy" : "ThenByDescending";

        return Enumerable.From(arrayData)[sortType](sortByFunc)[sortThenType](sortThenByFunc).ToArray();
    }

    function getCurrencyListByBrands(brands, brandIds) {
        const existKeys = {};
        const currencyList = brandIds.reduce((result, brandId) => {
            const currencyListByBrand = _getCurrencyListByBrandId(brandId, brands, existKeys, 'currencies');
            return result.concat(currencyListByBrand);
        }, []);

        return currencyList;
    }

    function _getCurrencyListByBrandId(brandId, brands, existKeys, currencyProperty) {
        var brandInfo = brands.find(function(_) { return _.id === parseInt(brandId)});
        if (brandInfo) {
            return brandInfo[currencyProperty].reduce(function(result, currentValue) {
                if (!existKeys[currentValue.key]) {
                    existKeys[currentValue.key] = true;
                    result.push({ key: currentValue.key, value: currentValue.value });
                    return result;
                }
                return result;
            }, [])
        }
        return [];
    }

    return {
        sort: sort,
        getCurrencyListByBrands: getCurrencyListByBrands
    };
});