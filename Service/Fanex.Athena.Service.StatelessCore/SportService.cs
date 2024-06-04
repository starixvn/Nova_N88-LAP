using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

namespace Fanex.Athena.Service.StatelessCore
{
    public class SportService : ISportService
    {
        private readonly ISportTypeDataAccess _sportTypeDataAccess;
        private readonly ICacheRefAdapter _cacheRefAdapter;
        private readonly ICustomMemoryCacheService _cache;

        public SportService(
            ISportTypeDataAccess sportTypeDataAccess,
            ICacheRefAdapter cacheRefAdapter,
            ICustomMemoryCacheService cache)
        {
            _sportTypeDataAccess = sportTypeDataAccess;
            _cacheRefAdapter = cacheRefAdapter;
            _cache = cache;
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

#pragma warning disable S1541 // Methods and properties should not be too complex

        private string GetSportNameForTreeView(int sportType)
        {
            var prefixText = ViewResources.Saba;

            if (sportType > 0)
            {
                return _cacheRefAdapter.GetSportName(sportType);
            }
            if (sportType == HardCodeSportType.Parlay)
            {
                return ViewResources.Parlay;
            }
            var sportName = string.Empty;
            switch (sportType)
            {
                case HardCodeSportType.SabaBasketball:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.BasketBall);
                    break;

                case HardCodeSportType.SabaSoccer:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Soccer);
                    break;

                case HardCodeSportType.SabaCricket:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Cricket);
                    break;

                case HardCodeSportType.SabaSoccerPinGoal:
                    sportName = ViewResources.SoccerPinGoal;
                    break;

                case HardCodeSportType.SabaBasketballPinGoal:
                    sportName = ViewResources.BasketballPinGoal;
                    break;

                case HardCodeSportType.SabaESportPinGoal:
                    sportName = ViewResources.ESportsPinGoal;
                    break;

                case HardCodeSportType.SabaFutsal:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Futsal);
                    break;

                case HardCodeSportType.SabaTennis:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Tennis);
                    break;

                case HardCodeSportType.SabaIceHockey:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.IceHockey);
                    break;

                case HardCodeSportType.SabaKabaddi:
                    sportName = _cacheRefAdapter.GetSportName((int)SportType.Kabaddi);
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