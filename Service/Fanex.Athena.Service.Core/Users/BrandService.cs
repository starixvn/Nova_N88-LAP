namespace Fanex.Athena.Service.Core.Users
{
    using Fanex.Athena.Model.Core.Configuration;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.NVC.Authentication.Infrastructure;
    using System.Collections.Generic;
    using System.Linq;

    public class BrandService : IBrandService
    {
        private readonly ITpService _tpService;

        public BrandService(ITpService tpService)
        {
            _tpService = tpService;
        }

        public IEnumerable<Brand> GetAllowedBrands(int licenseeId, IEnumerable<NVCFunctionAuthInfo> functions, BrandCollection brands)
        {
            var brandList = new List<Brand>();

            foreach (BrandElement brand in brands)
            {
                if (brand.Id == licenseeId ||
                    functions.Any(function => string.Equals(function.FunctionKey, brand.FunctionKey, System.StringComparison.OrdinalIgnoreCase)))
                {
                    var tpCurrencies = _tpService.GetListTpCurrency(brand.Id).ToList();
                    brandList.Add(new Brand
                    {
                        Id = brand.Id,
                        Name = brand.Name,
                        FunctionKey = brand.FunctionKey,
                        TpCurrencyList = tpCurrencies.ToDictionary(_ => _.ID, _ => _.Name)
                    });
                }
            }

            return brandList;
        }
    }
}