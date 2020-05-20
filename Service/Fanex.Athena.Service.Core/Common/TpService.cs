using Fanex.Athena.DataAccess.Core.Common.Interfaces;
using Fanex.Athena.Extension.Utility.Interfaces;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Athena.Service.Core.Common.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace Fanex.Athena.Service.Core.Common
{
    public class TpService : ITpService
    {
        private const int ExpireTimeInSecond = 86400; //1 day
        private readonly ITpDataAccess _dataAccess;
        private readonly ICustomMemoryCacheService _cacheService;

        public TpService(ITpDataAccess dataAccess, ICustomMemoryCacheService cacheService)
        {
            _dataAccess = dataAccess;
            _cacheService = cacheService;
        }

        public IEnumerable<Currency> GetListTpCurrency(int licenseeId)
        {
            var cacheKey = string.Format(CacheKey.MemorycacheCommonTpCurrency, licenseeId);
            var currencyList = _cacheService.Get<IEnumerable<Currency>>(cacheKey);

            if (currencyList != null && currencyList.Any())
            {
                return currencyList;
            }

            currencyList = _dataAccess.GetListTpCurrency(licenseeId);
            _cacheService.Set(cacheKey, currencyList, ExpireTimeInSecond);

            return currencyList;
        }

        public IEnumerable<TpProduct> GetListTpProduct()
        {
            var cacheKey = CacheKey.MemorycacheCommonTpProduct;
            var productList = _cacheService.Get<IEnumerable<TpProduct>>(cacheKey);

            if (productList != null && productList.Any())
            {
                return productList;
            }

            productList = _dataAccess.GetListTpProduct();
            _cacheService.Set(cacheKey, productList, ExpireTimeInSecond);

            return productList;
        }
    }
}