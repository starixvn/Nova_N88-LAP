namespace Fanex.Athena.Controllers
{
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Net.Mime;
    using System.Text.RegularExpressions;
    using System.Web.Mvc;
    using System.Web.SessionState;
    using DataAccess.Core.Configuration.Interfaces;
    using Extension.Utility.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
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
            customcontent = RemoveProductSection(customcontent, products, ProductTypes.VirtualSports, "VS");
            customcontent = RemoveProductSection(customcontent, products, ProductTypes.VirtualSports2, "VS2");
            customcontent = RemoveProductSection(customcontent, products, ProductTypes.VS3, "VS3");
            return customcontent;
        }

        private static string RemoveProductSection(string content, IEnumerable<Product> products, int productId, string productCode)
        {
            var openingTag = "{" + productCode + "-productlist-section}";

            var customContent = content;
            if (customContent.Contains(openingTag))
            {
                if (products.Any(x => x.ProductID == productId))
                {
                    var closingTag = "{/" + productCode + "-productlist-section}";
                    customContent = customContent.Replace(openingTag, string.Empty);
                    customContent = customContent.Replace(closingTag, string.Empty);
                }
                else
                {
                    var pattern = @"\{" + productCode + @"-productlist-section\}[\s\S]*{/" + productCode + @"-productlist-section\}";
                    customContent = new Regex(pattern).Replace(customContent, string.Empty);
                }
            }

            return customContent;
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