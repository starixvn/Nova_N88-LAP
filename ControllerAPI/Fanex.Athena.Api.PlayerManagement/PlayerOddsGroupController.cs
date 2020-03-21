namespace Fanex.Athena.Api.PlayerManagement
{
    using System;
    using System.Web.Http;
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Api.PlayerManagement.Utilities;
    using Fanex.Athena.Extension.Helpers;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Model.Core.ViewModel;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.PlayerManagement.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.Logging;

    [FunctionAuthorization(Policy.Host, PermissionKeys.PlayerAdminUpdateOddsGroup)]
    public class PlayerOddsGroupController : BaseApiController
    {
        private readonly IPlayerOddsGroupService _playerOddsGroupService;
        private readonly ILicenseeSettingService _licenseeSettingService;
        private readonly ILogger _logger;

        public PlayerOddsGroupController(
            ILanguageService languageService,
            IPlayerOddsGroupService playerOddsGroupService,
            ILicenseeSettingService licenseeSettingService,
            ILogger logger) : base(languageService)
        {
            _playerOddsGroupService = playerOddsGroupService;
            _licenseeSettingService = licenseeSettingService;
            _logger = logger;
        }

        [HttpPost]
        [ApiAutoBindMetaModelAttribute(BindUserId = true, BindIp = true, BindLanguage = true, BindLicenseeName = true)]
        public ResultViewModel Update(OddsGroupUpdatingMetaModel metaModel)
        {
            try
            {
                return _playerOddsGroupService.Update(metaModel);
            }
            catch (Exception exception)
            {
                _logger.Error(LogMessageHelper.GenerateMessage(exception));
            }

            return new ResultViewModel
            {
                Success = false,
                ErrorMessage = ResourceKeyConstants.HttpErrDefault
            };
        }
    }
}