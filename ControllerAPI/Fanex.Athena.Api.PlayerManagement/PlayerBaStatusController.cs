namespace Fanex.Athena.Api.PlayerManagement
{
    using System.Web.Http;
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Model.Core.ViewModel;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.PlayerManagement.Interfaces;

    public class PlayerBaStatusController : BaseApiController
    {
        private readonly IPlayerBaStatusService _playerBaStatusService;

        public PlayerBaStatusController(ILanguageService languageService, IPlayerBaStatusService playerBaStatusService) : base(languageService)
        {
            _playerBaStatusService = playerBaStatusService;
        }

        [HttpPost]
        [ApiAutoBindMetaModelAttribute(BindLicenseeName = true, BindUserId = true, BindLanguage = true, BindIp = true)]
        public ResultViewModel Update(BaStatusUpdatingMetaModel metaModel)
        {
            return _playerBaStatusService.Update(metaModel);
        }
    }
}