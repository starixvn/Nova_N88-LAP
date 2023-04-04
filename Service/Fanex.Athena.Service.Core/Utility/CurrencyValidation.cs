using Fanex.Athena.Extension.Utility;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.Helper;
using Fanex.Athena.Service.Core.Users.Interfaces;
using Fanex.Athena.Service.Core.Utility.Interfaces;
using Fanex.Athena.Service.StatelessCore.Utility;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Fanex.Athena.Service.Core.Utility
{
    [CLSCompliant(false)]
    public class CurrencyValidation : ICurrencyValidation
    {
        private readonly ISessionService _sessionService;
        private readonly IAppSettings _appSettings;

        public CurrencyValidation(ISessionService sessionService, IAppSettings appSettings)
        {
            _sessionService = sessionService;
            _appSettings = appSettings;
        }

        public bool IsValidBaseCurrency(string baseCurrency, bool isAllowEmpty = true)
        {
            return MetaModelHelper.ValidateBaseCurrency(baseCurrency, isAllowEmpty);
        }

        public bool IsValidCurrency(string currencyIdList)
        {
            if (string.IsNullOrEmpty(currencyIdList))
            {
                return false;
            }

            var items = currencyIdList.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            var currencyList = AuthParameterHelper.GetCurrencyList(_sessionService.UserSession.BrandList);
            return !items.Any(x => !int.TryParse(x, out int n) || !currencyList.ContainsKey(n));
        }

        public bool IsValidCurrency(int currencyId)
        {
            var currencyList = AuthParameterHelper.GetCurrencyList(_sessionService.UserSession.BrandList);

            return ValidateCurrency(currencyId, currencyList);
        }

        private static bool ValidateCurrency(int currencyId, IDictionary<int, string> currencyList)
        {
            return (currencyId < 0 && currencyId >= SystemConstants.MinBaseCurrencyType)
               || currencyId == BaseCurrencyType.All || currencyList.ContainsKey(currencyId);
        }
    }
}