namespace Fanex.Athena.Service.Core.Users
{
    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Core.Configuration;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [CLSCompliant(false)]
    public class BrandService : IBrandService
    {
        private readonly ITpService _tpService;
        private readonly ICurrencyDataAccess _currencyDataAccess;

        public BrandService(ITpService tpService, ICurrencyDataAccess currencyDataAccess)
        {
            _tpService = tpService;
            _currencyDataAccess = currencyDataAccess;
        }

        public IEnumerable<Brand> GetAllowedBrands(int licenseeId, IEnumerable<NVCFunctionAuthInfo> functions, BrandCollection brands)
        {
            var brandList = new List<Brand>();
            var allowedCurrencyIds = GetAllowedCurrencies(functions);

            foreach (BrandElement brand in brands)
            {
                if (brand.Id == licenseeId || functions.Any(function => string.Equals(function.FunctionKey, brand.FunctionKey, StringComparison.OrdinalIgnoreCase)))
                {
                    var allowedTpCurrencies = GetAllowedTpCurrencies(brand.Id, allowedCurrencyIds);
                    var (allowedCurrencyList, allowedCurrencyAgentList) = GetAllowedAgentCurrencies(brand.Id, allowedTpCurrencies);

                    brandList.Add(new Brand
                    {
                        Id = brand.Id,
                        Name = brand.Name,
                        FunctionKey = brand.FunctionKey,
                        TpCurrencyList = allowedTpCurrencies.ToDictionary(_ => _.ID, _ => _.Name),
                        CurrencyList = allowedCurrencyList,
                        CurrencyAgentList = allowedCurrencyAgentList
                    });
                }
            }

            return brandList;
        }

        private IEnumerable<Currency> GetAllowedTpCurrencies(int brandId, IEnumerable<int> allowedCurrencyIds)
        {
            var tpCurrencies = _tpService.GetListTpCurrency(brandId).ToList();
            var allowedTpCurrencies = tpCurrencies.Where(_ => allowedCurrencyIds.Contains(_.ID));
            return allowedTpCurrencies;
        }

        private (IDictionary<int, string>, IDictionary<int, int[]>) GetAllowedAgentCurrencies(int brandId, IEnumerable<Currency> allowedTpCurrencies)
        {
            var currencyUsers = _currencyDataAccess.GetCurrenciesByBrand(brandId);

            var allowedCurrencyList = currencyUsers
                         .Where(x => x.IsActive && allowedTpCurrencies.Any(tpCurr => tpCurr.ID == x.CurrencyId))
                         .Select(x => new { x.CurrencyId, x.CurrencyName })
                         .ToDictionary(x => x.CurrencyId, x => x.CurrencyName);

            var allowedCurrencyAgentList = currencyUsers
                .Where(x => x.IsActive && allowedTpCurrencies.Any(tpCurr => tpCurr.ID == x.CurrencyId))
                .Select(x => new { x.CurrencyId, x.AgentIdList })
                .ToDictionary(x => x.CurrencyId, x => x.AgentIdList.ToArray());

            return (allowedCurrencyList, allowedCurrencyAgentList);
        }

        private static IEnumerable<int> GetAllowedCurrencies(IEnumerable<NVCFunctionAuthInfo> functions)
        {
            const string ParentKey = "currency";
            var parentPermission = functions.FirstOrDefault(function => string.Equals(function.FunctionKey, ParentKey, StringComparison.OrdinalIgnoreCase));
            var currencyPermissions = parentPermission != null ?
                functions.Where(function => function.ParentId == parentPermission.FunctionId) : Enumerable.Empty<NVCFunctionAuthInfo>();
            var allowedCurrencyIds = currencyPermissions
                .Select(currencyPer => int.TryParse(
                    currencyPer.FunctionKey.Split('_').LastOrDefault(),
                    out int result) ? result : -1)
                .Where(currencyId => currencyId > 0);
            return allowedCurrencyIds;
        }
    }
}