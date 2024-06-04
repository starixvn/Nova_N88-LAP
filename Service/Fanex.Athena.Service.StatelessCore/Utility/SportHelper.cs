using System.Collections.Generic;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Resources;

namespace Fanex.Athena.Service.StatelessCore.Utility
{
    public static class SportHelper
    {
        private static readonly Dictionary<int, string> SabaVirtualSports = new Dictionary<int, string>
        {
            { (int)SportType.SabaSoccer, ViewResources.Soccer } ,
            { (int)SportType.SabaBasketball, ViewResources.Basketball },
            { (int)SportType.SabaCricket, ViewResources.Cricket },
            { (int)SportType.SabaFutsal, ViewResources.Futsal },
            { (int)SportType.SabaTennis, ViewResources.Tennis },
            { (int)SportType.SabaIceHockey, ViewResources.IceHockey },
            { (int)SportType.SabaKabaddi, ViewResources.Kabaddi },
            { (int)SportType.SabaSoccerPingoal, ViewResources.SoccerPinGoal },
            { (int)SportType.SabaBasketballPinGoal, ViewResources.BasketballPinGoal },
            { (int)SportType.SabaESportsPinGoal, ViewResources.ESportsPinGoal }
        };

        public static IEnumerable<SportProductItem> GetSabaSport(List<SportProductItem> sports)
        {
            foreach (var sabaSport in SabaVirtualSports)
            {
                sports.Add(new SportProductItem
                {
                    Checked = true,
                    ID = sabaSport.Key,
                    Name = $"{ViewResources.Saba} {sabaSport.Value}",
                    ParentId = ProductTypes.Sportsbook
                });
            }

            return sports;
        }
    }
}