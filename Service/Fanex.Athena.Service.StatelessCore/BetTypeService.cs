namespace Fanex.Athena.Service.StatelessCore
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Extension.Helper;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.VendorAdapter.Interfaces;

    public class BetTypeService : IBetTypeService
    {
        private readonly IBetTypeDataAccess _betTypeDataAccess;
        private readonly ICacheRefAdapter _cacheRefAdapter;

        public BetTypeService(IBetTypeDataAccess betTypeDataAccess, ICacheRefAdapter cacheRefAdapter)
        {
            _betTypeDataAccess = betTypeDataAccess;
            _cacheRefAdapter = cacheRefAdapter;
        }

        /// <summary>
        /// Get bet type.
        /// </summary>
        /// <param name="licenseeId">The licensee id.</param>
        /// <param name="sports">The sports.</param>
        /// <param name="languageCode">The language code.</param>
        /// <returns>The bet type list.</returns>
        public async Task<IList<CheckedItem>> GetBettypes(int licenseeId, IList<SportProductItem> sports, string languageCode)
        {
            const string SportXMLItemPattern = "<product ID=\"{0}\" Sport=\"{1}\"> </product>";
            var sportItemXML = new StringBuilder();

            if (sports != null && sports.Count > 0 && licenseeId > 0)
            {
                var products = sports.Where(i => i.ParentId == -1);

                foreach (var product in products)
                {
                    var childSports = sports.Where(i => i.ParentId == product.ID && i.ParentId > -1)
                        .Select(i => i.ID).ToArray();
                    if (childSports.Length == 0)
                    {
                        childSports = new[] { product.ID };
                    }

                    sportItemXML.Append(string.Format(SportXMLItemPattern, product.ID, string.Join(",", childSports)));
                }

                var sportsParameters = "<products>" + sportItemXML + "</products>";
                return await _betTypeDataAccess.GetBettypes(licenseeId, sportsParameters, languageCode).ConfigureAwait(false);
            }

            return new List<CheckedItem>();
        }

        public async Task<IList<CheckedItem>> GetBettypesByProduct(int licenseeId, string productCode, string languageCode)
        {
            return await _betTypeDataAccess.GetBettypesByProduct(licenseeId, productCode, languageCode).ConfigureAwait(false);
        }

        public async Task<IEnumerable<CheckedItem>> GetBetTypeForProducts(int licenseeId, string lang, string productCodes)
        {
            var betTypes = await _betTypeDataAccess.GetBetTypeForProducts(licenseeId, productCodes);
            var result = betTypes.GroupBy(_ => _.ProductCode,
                _ => new CheckedItem
                {
                    Checked = true,
                    Children = null,
                    ID = _.BetType,
                    Name = GetBetTypeName(_.BetType, lang),
                    Value = $"{_.BetType}_{MapBAProductCode(_.ProductCode)}",
                },
                (key, items) => new CheckedItem
                {
                    Checked = true,
                    Children = items,
                    Name = DataHelper.GetProductName(key),
                    Value = key
                });
            return result;
        }

        private string GetBetTypeName(int betType, string languageCode)
        {
            string suffix = GetBettypeNameSuffix(betType);
            return _cacheRefAdapter.GetBetTypeName(Convert.ToInt32(betType), languageCode) + suffix;
        }

        private static string MapBAProductCode(string productCode) => (productCode == Product.BA || productCode == $"{Product.SB},{Product.BA}") ? Product.SB : productCode;

        private string GetBettypeNameSuffix(int betType)
        {
            if (betType == (int)BetType.NumberGameHappy5OddEven)
            {
                return " (" + _cacheRefAdapter.GetSportName((int)SportType.NumberGameHappy5) + ")";
            }

            if (betType >= (int)BetType.VirtualBasketballOverUnder && betType <= (int)BetType.VirtualBasketballFirstHalfHandicap)
            {
                return " (" + _cacheRefAdapter.GetSportName((int)SportType.VirtualBasketball) + ")";
            }

            if (betType == (int)BetType.VirtualSportCorrectScoreTennis)
            {
                return " (" + _cacheRefAdapter.GetSportName((int)SportType.Tennis) + ")";
            }

            return string.Empty;
        }
    }
}