using System;
using System.Linq;
using System.Text;
using System.Web.Http;
using Fanex.Athena.Api.Base;
using Fanex.Athena.Api.StatelessBase.Attributes;
using Fanex.Athena.DataAccess.Core.Users.Interfaces;
using Fanex.Athena.Model.Auth;
using Fanex.Athena.Module.PlayerAdmin.Api.MetaModel;
using Fanex.Athena.Module.PlayerAdmin.Api.Services.Interfaces;
using Fanex.Athena.Module.PlayerAdmin.Api.ViewModels;
using Fanex.Athena.Service.Core.Common.Interfaces;

namespace Fanex.Athena.Module.PlayerAdmin.Api.Controllers
{
    public class PlayerListController : BaseApiController
    {
        private readonly IPlayerListService _playerListService;

        private readonly ILicenseeDataAccess _licenseeDataAccess;

        public PlayerListController(ILanguageService languageService, ILicenseeDataAccess licenseeDataAccess, IPlayerListService playerListService) : base(languageService)
        {
            _playerListService = playerListService;
            _licenseeDataAccess = licenseeDataAccess;
        }

        [HttpPost]
        [StatelessApiAutoBindMetaModel(BindSiteName = true, BindAgent = true)]
        public PlayerListResultViewModel Search(PlayerSearchingMetaModel searchParam)
        {
            AssignMetaModelData(searchParam);
            return _playerListService.Search(searchParam);
        }

        [HttpPost]
        [StatelessApiAutoBindMetaModel(BindSiteName = true, BindAgent = true)]
        public PlayerListResultViewModel GetPlayerListById(PlayerListByIdMetaModel metaModel)
        {
            metaModel.PageIndex = 1;

            return _playerListService.GetPlayerListById(metaModel);
        }

        private void AssignMetaModelData(PlayerSearchingMetaModel metaModel)
        {
            var licensee = SessionService.LicenseeSession;

            metaModel.SiteName = licensee.LicenseeName;
            metaModel.AgentListXml = GetAgentListXml(
                SessionService.UserSession,
                metaModel);
        }

        private string GetAgentListXml(UserAuthInfo user, PlayerSearchingMetaModel metaModel)
        {
            if (user.CurrencyAgentList == null)
            {
                return string.Empty;
            }

            var currencySelected = metaModel.CurrencyIdList;
            if (string.IsNullOrEmpty(currencySelected))
            {
                currencySelected = string.Join(",", user.CurrencyList.Keys);
            }

            var selectedCurrencyIdList = currencySelected.Trim()
               .Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
               .Select(x => Convert.ToInt32(x));

            var actualCurrencyAgentList = user.CurrencyAgentList.Where(x => selectedCurrencyIdList.Contains(x.Key));

            var builder = new StringBuilder("<ROOT>");
            foreach (var currencyItem in actualCurrencyAgentList)
            {
                foreach (var curency in currencyItem.Value)
                {
                    var xmlItemList = ($"<Agent AgentId=\"{curency}\" Currency=\"{currencyItem.Key}\"/>");
                    builder.Append(string.Join("", xmlItemList));
                }
            }

            builder.Append("</ROOT>");

            return builder.ToString();
        }
    }
}