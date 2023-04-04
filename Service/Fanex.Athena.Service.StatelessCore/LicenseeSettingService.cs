namespace Fanex.Athena.Service.StatelessCore
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Web.Hosting;

    using Extension.Utility.Interfaces;
    using Fanex.Athena.DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Core.DTO.Configuration;

    using Interfaces;

    using Newtonsoft.Json;

    public class LicenseeSettingService : ILicenseeSettingService
    {
        private const int OneDayInSecond = 86400;

        private readonly ICustomMemoryCacheService _cache;

        private readonly ILicenseeDataAccess _licenseeDataAccess;

        public LicenseeSettingService(ICustomMemoryCacheService cache, ILicenseeDataAccess licenseeDataAccess)
        {
            _cache = cache;
            _licenseeDataAccess = licenseeDataAccess;
        }

        public Licensee GetLicenseeInfo(string licenseeName)
        {
            var cacheKey = "Lrf_LicenseeSelBySiteName_" + licenseeName;
            var licenseeInfo = _cache.Get<Licensee>(cacheKey);
            if (licenseeInfo == null)
            {
                licenseeInfo = _licenseeDataAccess.GetLicenseeByName(licenseeName);
                if (licenseeInfo != null)
                {
                    _cache.Set(cacheKey, licenseeInfo, OneDayInSecond);
                }
            }

            return licenseeInfo;
        }
    }
}