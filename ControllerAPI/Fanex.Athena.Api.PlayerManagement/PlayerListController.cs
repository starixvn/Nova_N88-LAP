namespace Fanex.Athena.Api.PlayerManagement
{
    using System;
    using System.Linq;
    using System.Web.Http;
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.PlayerManagement.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.Athena.Web.ActionFilter;

    [FunctionAuthorization(PermissionKeys.PlayerAdmin)]
    public class PlayerListController : BaseApiController
    {
        private readonly IPlayerListService _playerListService;

        private readonly ILicenseeDataAccess _licenseeDataAccess;

        public PlayerListController(
            ILanguageService languageService,
            ILicenseeDataAccess licenseeDataAccess,
            IPlayerListService playerListService) : base(languageService)
        {
            _playerListService = playerListService;
            _licenseeDataAccess = licenseeDataAccess;
        }

        [HttpPost]
        [ApiAutoBindMetaModelAttribute(BindUserId = true, BindLicenseeName = true)]
        public PlayerListResultViewModel Search(PlayerSearchingMetaModel searchParam)
        {
            var currencySelected = searchParam.CurrencyIdList;
            var userSession = SessionService.UserSession;

            if (string.IsNullOrEmpty(currencySelected))
            {
                currencySelected = string.Join(",", userSession.CurrencyList.Keys);
            }

            var selectedCurrencyIdList = currencySelected.Trim()
               .Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
               .Select(x => Convert.ToInt32(x));

            searchParam.AgentListXml = AuthParameterHelper.GenerateAgentListXml(userSession.CurrencyAgentList, selectedCurrencyIdList);
            return _playerListService.Search(searchParam);
        }

        [HttpPost]
        [ApiAutoBindMetaModelAttribute(BindLicenseeName = true, BindAgent = true)]
        public PlayerListResultViewModel GetPlayerListById(PlayerListByIdMetaModel metaModel)
        {
            metaModel.PageIndex = 1;

            return _playerListService.GetPlayerListById(metaModel);
        }
    }
}