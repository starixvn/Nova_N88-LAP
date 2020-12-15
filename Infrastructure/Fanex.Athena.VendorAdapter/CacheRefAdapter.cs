using System;
using System.Globalization;
using System.Threading;

using Fanex.Athena.Model.Core;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Resources;
using Fanex.Athena.VendorAdapter.Interfaces;
using Fanex.RemotingRef;

namespace Fanex.Athena.VendorAdapter
{
    public class CacheRefAdapter : ICacheRefAdapter
    {
        private readonly IRemotingRefService _remotingRefService;

        public CacheRefAdapter(IRemotingRefService remotingRefService = null)
        {
            this._remotingRefService = remotingRefService ?? new RemotingRefService();
        }

        public string GetBettype(object bettypeId)
        {
            if (!IsValidId(bettypeId))
            {
                return string.Empty;
            }

            return _remotingRefService.GetBetTypeName(bettypeId.ToString(), GetCurrentIBCLanguageCode());
        }

        public string GetSportName(object sportId, string languageCode = null)
        {
            if (!IsValidId(sportId))
            {
                return string.Empty;
            }

            return _remotingRefService.GetSportName(sportId.ToString(), GetCurrentIBCLanguageCode(languageCode), string.Empty);
        }

        public string GetTeamName(object teamId)
        {
            if (!IsValidId(teamId))
            {
                return string.Empty;
            }

            return _remotingRefService.GetTeamName(teamId.ToString(), GetCurrentIBCLanguageCode(), string.Empty);
        }

        public string GetLeagueName(object leagueId)
        {
            if (!IsValidId(leagueId))
            {
                return string.Empty;
            }

            return _remotingRefService.GetLeagueName(leagueId.ToString(), GetCurrentIBCLanguageCode(), string.Empty);
        }

        public string GetBettype(int betType, bool liveIndicator)
        {
            const int SBMinOfMaxBettype = 120;
            if (betType == 0)
            {
                return string.Empty;
            }

            var betTypeName = _remotingRefService.GetBetTypeName(betType.ToString(CultureInfo.InvariantCulture), GetCurrentIBCLanguageCode());

            if (betType == (int)BetType.NgNumberGroup)
            {
                betTypeName += liveIndicator ? " (" + ViewResources.LiveGame + ")" : " (" + ViewResources.PreGame + ")";
                return betTypeName;
            }

            if (betType >= (int)BetType.NG1StBallOU && betType < SBMinOfMaxBettype)
            {
                return GetNumberGameBettypeName(betType, liveIndicator, betTypeName);
            }

            return betTypeName;
        }

        public string GetBettypeWithProductName(int betType, bool liveIndicator = false)
        {
            var betTypeName = GetBettype(betType, liveIndicator);

            if (BetTypeHelper.IsVirtualSports2(betType))
            {
                return betTypeName + " (" + ViewResources.ProductVS2 + ")";
            }

            return betTypeName;
        }

        public string[] GetCombinationTypeCombo(string betTeam, string betCheck, decimal handicap1, decimal handicap2)
        {
            return _remotingRefService.GetCombinationTypeCombo(betTeam, betCheck, Convert.ToInt32(handicap1), Convert.ToInt32(handicap2), GetCurrentIBCLanguageCode());
        }

        private static string GetNumberGameBettypeName(int betType, bool liveIndicator, string betTypeName)
        {
            if ((betType == (int)BetType.NgOuFt || betType == (int)BetType.NgOeFt) && liveIndicator)
            {
                return ViewResources.Next + " " + betTypeName;
            }

            if (betType == (int)BetType.NgOeFt)
            {
                return ViewResources.FT + " " + betTypeName;
            }

            return betTypeName;
        }

        private static bool IsValidId(object id)
        {
            return id != null && id.ToString() != string.Empty && id.ToString() != "0";
        }

        private static string GetCurrentIBCLanguageCode(string languageCode = null)
        {
            return string.IsNullOrEmpty(languageCode) ? Thread.CurrentThread.CurrentUICulture.IetfLanguageTag : languageCode;
        }
    }
}