using System;
using System.Collections.Generic;
using System.Linq;
using Fanex.Athena.Extension.Utility;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.Helper;
using Fanex.Athena.Service.Core.Users.Interfaces;
using Fanex.Athena.Service.Core.Utility.Interfaces;

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
            return MetaModelValidationHelper.ValidateBaseCurrency(baseCurrency, isAllowEmpty);
        }

        public bool IsValidCurrency(int currencyId, bool isIncludeKeanOcean = false)
        {
            var currencyList = _sessionService.UserSession.CurrencyList;
            if (isIncludeKeanOcean)
            {
                return ValidateCurrencyWithKeanOceanOption(currencyId, currencyList, _appSettings.LicenseeId);
            }

            return ValidateCurrency(currencyId, currencyList);
        }

        private static bool ValidateCurrency(int currencyId, IDictionary<int, string> currencyList)
        {
            return (currencyId < 0 && currencyId >= SystemConstants.MinBaseCurrencyType)
               || currencyId == BaseCurrencyType.All || currencyList.ContainsKey(currencyId);
        }

        private static bool VerifyKeanOceanCurrency(int currencyId, int licenseeId)
        {
            return licenseeId == LicenseeIdentity.KeenOcean && currencyId == CurrencyType.Cny;
        }

        private static bool ValidateCurrencyWithKeanOceanOption(int currencyId, IDictionary<int, string> currencyList, int licenseeId)
        {
            return ValidateCurrency(currencyId, currencyList) || VerifyKeanOceanCurrency(currencyId, licenseeId);
        }

        public bool IsValidCurrency(string currencyIdList)
        {
            if (string.IsNullOrEmpty(currencyIdList))
            {
                return false;
            }

            var items = currencyIdList.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            return !items.Any(x => !int.TryParse(x, out int n) || !_sessionService.UserSession.CurrencyList.ContainsKey(n));
        }
    }
}