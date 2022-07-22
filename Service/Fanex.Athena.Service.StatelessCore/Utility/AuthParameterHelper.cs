using Fanex.Athena.Model.Core.DataDomain;
using Fanex.NVC.Authentication.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Fanex.Athena.Service.StatelessCore.Utility
{
    [CLSCompliant(false)]
    public static class AuthParameterHelper
    {
        public static IDictionary<int, string> GetCurrencyList(IEnumerable<Brand> brands)
        {
            return brands.SelectMany(_ => _.CurrencyList)
                .GroupBy(_ => _.Key)
                .ToDictionary(x => x.Key, y => y.First().Value);
        }

        public static IDictionary<int, int[]> GetAgentList(IEnumerable<Brand> brands, int[] brandIds)
        {
            var combinedAgentList = new Dictionary<int, int[]>();
            foreach (var brandId in brandIds)
            {
                var brand = brands.FirstOrDefault(_ => _.Id == brandId);
                if (brand != null)
                {
                    CombineAgentList(combinedAgentList, brand.CurrencyAgentList);
                }
            }

            return combinedAgentList;
        }

        public static IDictionary<int, int[]> GetAgentList(IEnumerable<Brand> brands, string brandIdsString)
        {
            var brandIds = brandIdsString
                .Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(x => int.Parse(x)).ToArray();

            return GetAgentList(brands, brandIds);
        }

        public static string GenerateAgentListXml(IDictionary<int, int[]> currencyAgentList,
            int currencyId = 0, bool isExcludeTestData = false)
        {
            return GenerateAgentListXml(currencyAgentList, new[] { currencyId < 0 ? 0 : currencyId }, isExcludeTestData);
        }

        public static string GenerateAgentListXml(IDictionary<int, int[]> currencyAgentList,
            IEnumerable<int> currencyIdList, bool isExcludeTestData = false)
        {
            const int AllCurrencyId = 0;
            var result = new StringBuilder("<ROOT>");
            if (isExcludeTestData && currencyAgentList.ContainsKey(CurrencyType.Uus))
            {
                currencyAgentList = currencyAgentList.Where(x => x.Key != CurrencyType.Uus).ToDictionary(x => x.Key, x => x.Value);
            }

            if (currencyIdList.Contains(AllCurrencyId))
            {
                foreach (var currency in currencyAgentList)
                {
                    result.Append(GenerateAgentXmlBody(currency.Key, currency.Value));
                }
            }
            else
            {
                foreach (var currencyId in currencyIdList)
                {
                    if (currencyAgentList.ContainsKey(currencyId))
                    {
                        var agentList = currencyAgentList.Single(x => x.Key == currencyId).Value;
                        result.Append(GenerateAgentXmlBody(currencyId, agentList));
                    }
                }
            }

            result.Append("</ROOT>");
            return result.ToString();
        }

        public static IEnumerable<int> ParseIdList(string currencyIdList)
        {
            var selectedCurrencyIdList = currencyIdList.Trim()
                .Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
                .Select(x => Convert.ToInt32(x));

            return selectedCurrencyIdList;
        }

        private static StringBuilder GenerateAgentXmlBody(int currencyId, IEnumerable<int> agentList)
        {
            var result = new StringBuilder();
            foreach (var agentId in agentList)
            {
                result.AppendFormat("<Agent AgentId=\"{0}\" Currency=\"{1}\"/>", agentId, currencyId);
            }

            return result;
        }

        private static void CombineAgentList(IDictionary<int, int[]> targetAgentList, IDictionary<int, int[]> sourceAgentList)
        {
            foreach (var currencyAgent in sourceAgentList)
            {
                targetAgentList[currencyAgent.Key] = targetAgentList.ContainsKey(currencyAgent.Key) ?
                    targetAgentList[currencyAgent.Key].Union(currencyAgent.Value).ToArray() : currencyAgent.Value;
            }
        }
    }
}