using Fanex.Athena.DataAccess.Core.Common.Interfaces;
using Fanex.Athena.Extension.Helper;
using Fanex.Athena.Extension.Utility.Interfaces;
using Fanex.Athena.Model.Core.Constants;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Athena.Resources;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Athena.VendorAdapter.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Service.StatelessCore
{
    public class SportService : ISportService
    {
        private readonly ISportTypeDataAccess _sportTypeDataAccess;
        private readonly ICacheRefAdapter _cacheRefAdapter;
        private readonly ICustomMemoryCacheService _cache;

        private static readonly IEnumerable<(int Id, int SportTypeId, IEnumerable<int> LeagueGroupIds)> SabaVirtualSports = new List<(int, int, IEnumerable<int>)>
        {
            ((int)SportType.SabaSoccer, (int)SportType.Soccer, new [] { 42, 74 }),
            ((int)SportType.SabaBasketball, (int)SportType.BasketBall, new [] { 42 }),
            ((int)SportType.SabaCricket, (int)SportType.Cricket, new [] { 42 }),
            ((int)SportType.SabaFutsal, (int)SportType.Soccer, new [] { 108 }),
            ((int)SportType.SabaTennis, (int)SportType.Tennis, new [] { 42 }),
            ((int)SportType.SabaIceHockey, (int)SportType.IceHockey, new [] { 42 }),
            ((int)SportType.SabaKabaddi, (int)SportType.Kabaddi, new [] { 42 }),
            ((int)SportType.SabaSoccerPingoal, (int)SportType.Soccer, new [] { 113 }),
            ((int)SportType.SabaSoccerMarble, (int)SportType.Soccer, new [] { 252 }),
            ((int)SportType.SabaBasketballPinGoal, (int)SportType.BasketBall, new [] { 122 }),
            ((int)SportType.SabaESportsPinGoal, (int)SportType.Esports, new [] { 151 })
        };

        public SportService(
            ISportTypeDataAccess sportTypeDataAccess,
            ICacheRefAdapter cacheRefAdapter,
            ICustomMemoryCacheService cache)
        {
            _sportTypeDataAccess = sportTypeDataAccess;
            _cacheRefAdapter = cacheRefAdapter;
            _cache = cache;
        }

        public IEnumerable<SportProductItem> GetSabaSport(List<SportProductItem> sports)
        {
            foreach (var sabaSport in SabaVirtualSports)
            {
                sports.Add(new SportProductItem
                {
                    Checked = true,
                    ID = sabaSport.Id,
                    Name = GetSportNameForTreeView(sabaSport.Id),
                    ParentId = ProductTypes.Sportsbook
                });
            }

            return sports;
        }

        public Task<IDictionary<int, string>> GetAllSports() => _sportTypeDataAccess.GetAllSports();

        public Task<IEnumerable<SportProductItem>> GetSportsAndProducts(int licenseeId, string languageCode, string productCodes = "")
        => _sportTypeDataAccess.GetSportsAndProducts(licenseeId, languageCode, productCodes);

        public async Task<IEnumerable<CheckedItem>> GetSportsForTreeView(int licenseeId, string languageCode, string productCodes = "")
        {
            var cacheKey = CacheKey.MemorycacheSportListForTreeView + licenseeId + languageCode + productCodes;
            var sportList = _cache.Get<IEnumerable<CheckedItem>>(cacheKey);

            if (sportList != null)
            {
                return sportList;
            }

            var sportItems = await _sportTypeDataAccess.GetSportsForTreeView(licenseeId, productCodes);
            return BuildSportList(sportItems);
        }

        private ICollection<CheckedItem> BuildSportList(IEnumerable<SportForTreeViewItem> sportItems)
        {
            var sportList = sportItems.GroupBy(_ => (_.ProductId, _.ProductCode),
                _ => BuildSportCheckItem(_),
                (key, elems) => new CheckedItem
                {
                    ID = key.ProductId,
                    Checked = true,
                    Children = elems,
                    Name = DataHelper.GetProductName(key.ProductCode),
                    Value = key.ProductCode
                }).ToList();

            return sportList;
        }

        private CheckedItem BuildSportCheckItem(SportForTreeViewItem sport)
           => new CheckedItem
           {
               Checked = true,
               Children = null,
               ID = sport.SportType,
               Name = GetSportNameForTreeView(sport.SportType),
               Value = sport.SportType.ToString()
           };

        public static string BuildSportTypeXML(string sportIds)
        {
            const int Parlay = -1;

            if (string.IsNullOrEmpty(sportIds) || string.Equals(sportIds, "All", StringComparison.OrdinalIgnoreCase))
            {
                return sportIds;
            }

            var result = new StringBuilder("<ROOT>");

            foreach (var sport in sportIds.Split(','))
            {
                Int32.TryParse(sport, out int sportId);
                var leagueGroupIds = "0";

                if (sportId == Parlay)
                {
                    sportId = (int)SportType.Parlay;
                }

                if (SabaVirtualSports.Any(_ => _.Id == sportId))
                {
                    var (Id, SportTypeId, LeagueGroupIds) = SabaVirtualSports.FirstOrDefault(_ => _.Id == sportId);
                    leagueGroupIds = string.Join(",", LeagueGroupIds);
                    sportId = SportTypeId;
                }

                result.AppendFormat("<Sport SportType=\"{0}\" LeagueGroupIds=\"{1}\"/>", sportId, leagueGroupIds);
            }

            result.Append("</ROOT>");
            return result.ToString();
        }

#pragma warning disable S1541 // Methods and properties should not be too complex

        private string GetSportNameForTreeView(int sportType)
        {
            var prefixText = ViewResources.Saba;

            if (sportType > 0)
            {
                return _cacheRefAdapter.GetSportName(sportType);
            }
            if (sportType == (int)SportType.ParlayTreeView)
            {
                return ViewResources.Parlay;
            }
            var sportName = string.Empty;
            switch (sportType)
            {
                case (int)SportType.SabaBasketball:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.BasketBall);
                    break;

                case (int)SportType.SabaSoccer:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Soccer);
                    break;

                case (int)SportType.SabaCricket:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Cricket);
                    break;

                case (int)SportType.SabaSoccerPingoal:
                    sportName = ViewResources.SoccerPinGoal;
                    break;

                case (int)SportType.SabaBasketballPinGoal:
                    sportName = ViewResources.BasketballPinGoal;
                    break;

                case (int)SportType.SabaESportsPinGoal:
                    sportName = ViewResources.ESportsPinGoal;
                    break;

                case (int)SportType.SabaFutsal:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Futsal);
                    break;

                case (int)SportType.SabaTennis:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Tennis);
                    break;

                case (int)SportType.SabaIceHockey:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.IceHockey);
                    break;

                case (int)SportType.SabaKabaddi:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Kabaddi);
                    break;

                case (int)SportType.SabaSoccerMarble:
                    sportName = ViewResources.SoccerMarble;
                    break;

                default:
                    _cacheRefAdapter.GetSportName(sportType);
                    break;
            }
            return $"{prefixText}{sportName}";
        }

#pragma warning restore S1541 // Methods and properties should not be too complex
    }
}