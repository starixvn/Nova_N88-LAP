namespace Fanex.Athena.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;
    using System.Web.Mvc;
    using System.Web.SessionState;
    using DataAccess.Core.Configuration.Interfaces;
    using Extension.Utility.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Model.Core.DataDomain;
    using Model.Core.DTO.Common;
    using ONEbook.UM.Filters;
    using Web.ActionFilter;

    [SessionState(SessionStateBehavior.ReadOnly)]
    [CheckUMFilter]
    public class UserGuideController : CultureBaseController
    {
        private readonly IProductService _productService;
        private readonly IFileSystem _fileSystem;
        private readonly IBalanceUpDataAccess _balanceUpDataAccess;

        public UserGuideController(
            IFileSystem fileSystem,
            IProductService productService,
            IBalanceUpDataAccess balanceUpDataAccess)
        {
            _productService = productService;
            _fileSystem = fileSystem;
            _balanceUpDataAccess = balanceUpDataAccess;
        }

        [AjaxRequest]
        public ActionResult Index(string resourceName)
        {
            var content = GetFileContent(resourceName);
            var products = _productService.GetProductList(
                SessionServiceInstance.LicenseeSession.LicenseeId,
                SessionServiceInstance.UserSession.Language);

            content = content.Replace("{rooturl}", Url.Content("~"));
            content = AddSpecialProducts(content, products);
            content = AddBalanceUpDate(content);

            return View("~/Views/UserGuide/Index.cshtml", null, content);
        }

        private static string AddCasinoProducts(string content, IEnumerable<Product> products)
        {
            var result = content;
            if (content.Contains("{casino-productlist-section}"))
            {
                var offerCasino = products.Any(_ => _.ProductID == ProductTypes.SabaCasino);
                if (offerCasino)
                {
                    result = result.Replace("{casino-productlist-section}", string.Empty);
                    result = result.Replace("{/casino-productlist-section}", string.Empty);
                }
                else
                {
                    result = new Regex(@"\{casino-productlist-section\}[\s\S]*{/casino-productlist-section\}").Replace(result, string.Empty);
                }
            }

            return result;
        }

        private static string AddSpecialProducts(string content, IEnumerable<Product> products)
        {
            var customcontent = AddCasinoProducts(content, products);
            return customcontent;
        }

        private string AddBalanceUpDate(string content)
        {
            const string PlaceHolder = "{balance-up-date}";
            if (content.Contains(PlaceHolder))
            {
                var date = _balanceUpDataAccess.GetBalanceUp().BalanceUpDay;
                return content.Replace(PlaceHolder, date.ToString("MM/dd/yyyy"));
            }

            return content;
        }

        private string GetDefaultFilePathIfNotExist(string language, string filePath)
        {
            if (!language.Equals(DefaultLanguage, System.StringComparison.OrdinalIgnoreCase) && !_fileSystem.Exists(filePath))
            {
                return filePath.Replace(language, DefaultLanguage);
            }

            return filePath;
        }

        private string GetFileContent(string resourceName)
        {
            var language = SessionServiceInstance.UserSession.Language;

            var filePath = Server.MapPath(string.Format(@"~/App_Data/UserGuide/{0}/{1}.htm", resourceName, language));
            filePath = GetDefaultFilePathIfNotExist(language, filePath);

            return _fileSystem.ReadFile(filePath);
        }
    }
}