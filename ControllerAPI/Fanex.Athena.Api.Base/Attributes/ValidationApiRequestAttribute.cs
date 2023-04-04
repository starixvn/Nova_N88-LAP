namespace Fanex.Athena.Api.Base.Attributes
{
    using Fanex.Athena.Api.StatelessBase.Attributes.Extensions;
    using Fanex.Athena.Model.Core.MetaModel;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.Core.Utility.Interfaces;
    using System;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http.Controllers;
    using System.Web.Http.Filters;

    [AttributeUsage(AttributeTargets.All, AllowMultiple = true)]
    public sealed class ValidationApiRequestAttribute : ActionFilterAttribute
    {
        public string ObjectName { get; set; }

        public bool IsValidCurrency { get; set; }

        public bool IsValidCurrencyList { get; set; }

        public bool IsIncludeKeanOcean { get; set; }

        public bool IsValidProductCodeList { get; set; }

        public string FunctionConfig { get; set; }

        public bool IsSingleWalletProduct { get; set; }

        public bool IsValidBrandIdList { get; set; }

        public bool IsValidBrandId { get; set; }

        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            base.OnActionExecuting(actionContext);
            ValidateRequest(actionContext);
        }

        private void ValidateRequest(HttpActionContext actionContext)
        {
            var root = !string.IsNullOrEmpty(ObjectName) ? actionContext.ActionArguments[ObjectName]
                 : actionContext.ActionArguments.Where(x => x.Value is IMetaModelValidation)
                      .Select(x => x.Value).FirstOrDefault();

            var scope = actionContext.Request.GetDependencyScope();

            var validationService = scope.Resolve<IValidationService>();

            if (!validationService.IsValid(root,
               new CurrencyValidationOption
               {
                   IsValidCurrency = IsValidCurrency,
                   IsValidCurrencyList = IsValidCurrencyList
               }, new ProductValidationOption
               {
                   IsValidProductCodeList = IsValidProductCodeList,
                   FunctionConfig = FunctionConfig,
                   IsSingleWallet = IsSingleWalletProduct
               }, new BrandValidationOption
               {
                   IsValidBrandId = IsValidBrandId,
                   IsValidBrandIdList = IsValidBrandIdList
               }))
            {
                actionContext.Response = new HttpResponseMessage
                {
                    StatusCode = HttpStatusCode.BadRequest,
                    Content = new StringContent(ViewResources.InvalidRequestMsg)
                };
            }
        }
    }
}