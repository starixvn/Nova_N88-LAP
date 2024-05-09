using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fanex.Athena.Extension.Helpers;
using Fanex.Athena.Extension.Utility;
using Fanex.Athena.Extension.Utility.Interfaces;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Athena.Model.Customer.DTO;
using Fanex.Athena.Resources;
using Fanex.Athena.Service.Customer.Interfaces;
using Fanex.Logging;
using Newtonsoft.Json;

namespace Fanex.Athena.Service.Customer
{
    public class CustomerClassService : ICustomerClassService
    {
        private readonly IWebClientService _webClientService;
        private readonly IAppSettings _appSettings;
        private readonly ICustomMemoryCacheService _cache;
        private readonly ILogger _logger;

        public CustomerClassService(IWebClientService webClientService, IAppSettings appSettings, ICustomMemoryCacheService cache, ILogger logger)
        {
            _webClientService = webClientService;
            _appSettings = appSettings;
            _cache = cache;
            _logger = logger;
        }

        public async Task<IEnumerable<RiskLevel>> GetAllRiskLevel()
        {
            var customerClassCategories = await GetCustomerClassCategories();

            customerClassCategories.Add(
                new CustomerClassCategoryModel
                {
                    CustomerClass = 0,
                    CustomerClassName = RiskLevel.Uncategorized,
                    SabaRiskLevel = RiskLevel.Uncategorized
                }
            );

            var riskLevelList = customerClassCategories.GroupBy(_ => _.SabaRiskLevel).Select((_, index) => new RiskLevel
            {
                Id = index.ToString(),
                Key = _.Key,
                Name = ViewResources.ResourceManager.GetString(_.Key) ?? _.Key,
                CustomerClassList = _.OrderBy(cc => cc.CustomerClass).Select(cc => cc.CustomerClass.ToString()).Distinct()
            }).OrderBy(_ => _, new RiskLevelComparer());

            return riskLevelList;
        }

        private async Task<List<CustomerClassCategoryModel>> GetCustomerClassCategories()
        {
            try
            {
                var customerClassCategory = _cache.Get<List<CustomerClassCategoryModel>>(CacheKey.MemorycacheCustomerClassCategories);

                if (customerClassCategory != null)
                {
                    return customerClassCategory;
                }

                var uri = new Uri(_appSettings.GetValue("CustomerClassCategoryApi"));
                var apiResult = await _webClientService.DownloadStringAsync(uri);
                var result = JsonConvert.DeserializeObject<List<CustomerClassCategoryModel>>(apiResult);

                if (result.Any())
                {
                    _cache.Set(CacheKey.MemorycacheCustomerClassCategories, result);
                    _cache.SetWithoutExpired(CacheKey.MemorycacheCustomerClassCategories + "_backup", result);
                    return result;
                }

                customerClassCategory = _cache.Get<List<CustomerClassCategoryModel>>(CacheKey.MemorycacheCustomerClassCategories + "_backup");

                return customerClassCategory ?? new List<CustomerClassCategoryModel>();
            }
            catch (Exception exception)
            {
                _logger.Error(LogMessageHelper.GenerateMessage(exception));
            }

            return new List<CustomerClassCategoryModel>();
        }
    }
}