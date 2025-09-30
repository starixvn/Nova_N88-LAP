using Fanex.Athena.DataAccess.Core.Configuration;
using Fanex.Athena.Extension.Helper;
using Fanex.Athena.Model.Core.Helper;
using Fanex.Athena.Service.Core.Users;
using Fanex.Athena.Service.Core.Users.Interfaces;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Athena.Service.StatelessCore.Utility;
using Fanex.NVC.Authentication.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Fanex.Athena.Api.Base.Attributes
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public sealed class ApiAutoBindMetaModelAttribute : ActionFilterAttribute
    {
        public bool BindAgent { get; set; }

        public bool BindUserId { get; set; }

        public bool BindLicenseeName { get; set; }

        public bool BindLanguage { get; set; }

        public bool BindIp { get; set; }

        public bool BindBalanceUpAndMoveBet { get; set; }

        public bool BindShowingBetFromIP { get; set; }

        public bool BindProductCodeList { get; set; }

        public bool BindProductOptions { get; set; }

        public IProductService ProductService { get; set; }

        private static readonly ISessionStorage _sessionStorage = new SessionStorage();

        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            var userSession = _sessionStorage.User;
            var licenseeSession = _sessionStorage.Licensee;
            var actionArgument = actionContext.ActionArguments;

            if (BindAgent)
            {
                MapAgent(actionArgument, userSession);
            }

            if (BindUserId)
            {
                AutoBindMetaModelService.MapUserId(actionArgument, userSession.UserId);
            }

            if (BindLicenseeName)
            {
                AutoBindMetaModelService.MapSiteName(actionArgument, licenseeSession.LicenseeName);
            }

            if (BindLanguage)
            {
                AutoBindMetaModelService.MapLanguage(actionArgument);
            }

            if (BindIp)
            {
                AutoBindMetaModelService.MapIp(actionArgument,
                    ClientHelper.GetClientIp(actionContext.Request));
            }

            if (BindBalanceUpAndMoveBet)
            {
                var balanceUpDataAccess = new BalanceUpDataAccess(null, null);
                AutoBindMetaModelService.MapBalanceUpAndMoveBet(actionArgument, balanceUpDataAccess);
            }

            if (BindShowingBetFromIP)
            {
                AutoBindMetaModelService.MapShowingBetFromIP(actionArgument, userSession.IsShowIpvn);
            }

            if (BindProductCodeList)
            {
                AutoBindMetaModelService.MapProductCodeList(actionArgument, licenseeSession.OfferedSubProductList, ProductService);
            }

            if (BindProductOptions)
            {
                AutoBindMetaModelService.MapProductOptions(actionArgument, licenseeSession.OfferedSubProductList, ProductService);
            }

            base.OnActionExecuting(actionContext);
        }

        private static void MapAgent(IDictionary<string, object> actionArgument, NVCUserAuthInfo userSession)
        {
            int[] brandIds;
            if (MetaModelHelper.IsMetaModel(actionArgument, out IBrandIdMetaModel brandIdMetaModel))
            {
                brandIds = brandIdMetaModel.BrandId == default ? userSession.BrandList.Select(_ => _.Id).ToArray() : new[] { brandIdMetaModel.BrandId };
            }
            else if (MetaModelHelper.IsMetaModel(actionArgument, out IBrandIdListMetaModel brandIdListMetaModel))
            {
                brandIds = string.IsNullOrWhiteSpace(brandIdListMetaModel.BrandIds) ?
                    userSession.BrandList.Select(_ => _.Id).ToArray() : AuthParameterHelper.ParseIdList(brandIdListMetaModel.BrandIds).ToArray();
            }
            else
            {
                brandIds = null;
            }

            var currencyAgentList = brandIds != null && brandIds.Any() ?
                AuthParameterHelper.GetAgentList(userSession.BrandList, brandIds) : userSession.CurrencyAgentList;
            AutoBindMetaModelService.MapAgentXml(actionArgument, currencyAgentList);
        }
    }
}