namespace Fanex.Athena.Service.PlayerManagement
{
    using System;
    using System.Collections.Generic;
    using Fanex.Athena.Extension.Utility.Interfaces;
    using Fanex.Athena.Model.PlayerManagement.DTO;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Service.PlayerManagement.Interfaces;
    using Fanex.Data;

    public class PlayerListService : IPlayerListService
    {
        private readonly IDbFactory _dbFactory;

        public PlayerListService(IDbFactory dbFactory)
        {
            _dbFactory = dbFactory;
        }

        public PlayerListResultViewModel Search(PlayerSearchingMetaModel metaModel)
        {
            const string SpKey = "N88_CustomerSelByUsername";
            var result = new PlayerListResultViewModel();

            using (var objectDb = _dbFactory.GetObjectDb(SpKey))
            {
                AssignCommonParam(objectDb, metaModel);
                AssignParamByUserName(objectDb, metaModel);

                result.DataList = ReadPlayerList(objectDb);
                result.TotalItem = GetTotalItem(objectDb);
            }

            return result;
        }

        public PlayerListResultViewModel GetPlayerListById(PlayerListByIdMetaModel metaModel)
        {
            const string SpKey = "Lrf_CustomerSelByCustid";
            var result = new PlayerListResultViewModel();

            using (var objectDb = _dbFactory.GetObjectDb(SpKey))
            {
                AssignCommonParam(objectDb, metaModel);
                AssignParamByCustId(objectDb, metaModel);

                result.DataList = ReadPlayerList(objectDb);
                result.TotalItem = GetTotalItem(objectDb);
            }

            return result;
        }

        private static void AssignCommonParam(IObjectDb objectDb, PlayerListBaseMetaModel metaModel)
        {
            objectDb.SetParameterValue("LicenseeName", metaModel.SiteName);
            objectDb.SetParameterValue("AgentList", metaModel.AgentListXml);
        }

        private static void AssignParamByUserName(IObjectDb objectDb, PlayerSearchingMetaModel metaModel)
        {
            objectDb.SetParameterValue("UserName", metaModel.SystemId);
            objectDb.SetParameterValue("UserName2", metaModel.UserName);
            objectDb.SetParameterValue("SearchOption", metaModel.SearchOption);
            objectDb.SetParameterValue("SpecialLevel", metaModel.SpecialLevel);
            objectDb.SetParameterValue("OddsGroups", metaModel.OddsGroup);
            objectDb.SetParameterValue("PageSize", metaModel.PageSize);
            objectDb.SetParameterValue("PageIndex", metaModel.PageIndex);

            objectDb.SetParameterValue("TotalRows", 0);
        }

        private static void AssignParamByCustId(IObjectDb objectDb, PlayerListByIdMetaModel metaModel)
        {
            objectDb.SetParameterValue("CustIds", metaModel.IdList);
            objectDb.SetParameterValue("SpecialLevel", metaModel.SpecialLevel);
            objectDb.SetParameterValue("OddsGroups", metaModel.OddsGroup);
            objectDb.SetParameterValue("PageSize", metaModel.PageSize);
            objectDb.SetParameterValue("PageIndex", metaModel.PageIndex);

            objectDb.SetParameterValue("TotalRows", 0);
        }

        private static IEnumerable<Player> ReadPlayerList(IObjectDb objectDb)
        {
            var playerList = new List<Player>();

            using (var reader = objectDb.ExecuteReader())
            {
                while (reader.Read())
                {
                    playerList.Add(new Player
                    {
                        IbcCustId = Convert.ToInt32(reader["CustId"]),
                        CurrencyId = Convert.ToByte(reader["ExchangeId"]),
                        Currency = reader["Currency"].ToString(),
                        SystemId = reader["UserName"].ToString(),
                        UserName = reader["NickName"].ToString(),
                        SpecialLevel = Convert.ToInt32(reader["SpecialLevel"]),
                        OddsGroup = reader["OddsGroup"].ToString(),
                        CurrentBalance = Convert.ToDecimal(reader["TotalBalance"]),
                        OutstandingBalance = Convert.ToDecimal(reader["Outstanding"])
                    });
                }
            }

            return playerList;
        }

        private static int GetTotalItem(IObjectDb objectDb)
        {
            return Convert.ToInt32(objectDb.GetParameterValue("TotalRows"));
        }
    }
}