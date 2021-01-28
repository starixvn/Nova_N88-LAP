namespace Fanex.Athena.Service.Core.Users
{
    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Core.Configuration;
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

            foreach (BrandElement brand in brands)
            {
                if (brand.Id == licenseeId ||
                    functions.Any(function => string.Equals(function.FunctionKey, brand.FunctionKey, StringComparison.OrdinalIgnoreCase)))
                {
                    var tpCurrencies = _tpService.GetListTpCurrency(brand.Id).ToList();
                    var (currencyList, currencyAgentList) = GetCurrencies(brand.Id);

                    brandList.Add(new Brand
                    {
                        Id = brand.Id,
                        Name = brand.Name,
                        FunctionKey = brand.FunctionKey,
                        TpCurrencyList = tpCurrencies.ToDictionary(_ => _.ID, _ => _.Name),
                        CurrencyList = currencyList,
                        CurrencyAgentList = currencyAgentList 
                    });
                }
            }

            return brandList;
        }

        private (IDictionary<int, string>, IDictionary<int, int[]>) GetCurrencies(int brandId)
        {
            var currencyUsers = _currencyDataAccess.GetCurrenciesByBrand(brandId);

            var currencyList = currencyUsers
                         .Where(x => x.IsActive)
                         .Select(x => new { x.CurrencyId, x.CurrencyName })
                         .ToDictionary(x => x.CurrencyId, x => x.CurrencyName);

            var currencyAgentList = currencyUsers
                .Where(x => x.IsActive)
                .Select(x => new { x.CurrencyId, x.AgentIdList })
                .ToDictionary(x => x.CurrencyId, x => x.AgentIdList.ToArray());

            return (currencyList, currencyAgentList);
        }
    }
}