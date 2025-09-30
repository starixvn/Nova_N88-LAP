namespace Fanex.Athena.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;
    using System.Web.Mvc;
    using System.Web.SessionState;
    using DataAccess.Core.Configuration.Interfaces;
    using Extension.Utility.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Model.Core.DataDomain;
    using Model.Core.DTO.Common;
    using ONEbook.UM.AspNetMVC.Filters;
    using Web.ActionFilter;

    [SessionState(SessionStateBehavior.ReadOnly)]
    [CheckUMFilter]
    public class UserGuideController : CultureBaseController
    {
        private readonly IProductService _productService;
        private readonly IFileSystem _fileSystem;
        private readonly IBalanceUpDataAccess _balanceUpDataAccess;

        private const string LICENSEE_SUFFIX_SECTION = "licensee-section";

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
            content = AddLicenseeSection(content, SessionServiceInstance.LicenseeSession.LicenseeName);
            content = AddSabaCoinsSection(content);

            return View("~/Views/UserGuide/Index.cshtml", null, content);
        }

        private string AddSabaCoinsSection(string content)
        {
            var result = content;

            if (content.Contains("{refno-saba-coins-section}"))
            {
                var IsAllowSabaCoins = SessionServiceInstance.UserSession.FunctionList
                    .Any(x => x.FunctionKey == PermissionKeys.BetHistory_RefNo_SabaCoinsView);

                if (IsAllowSabaCoins)
                {
                    result = result.Replace("{refno-saba-coins-section}", string.Empty);
                    result = result.Replace("{/refno-saba-coins-section}", string.Empty);
                }
                else
                {
                    result = new Regex(@"\{refno-saba-coins-section\}[\s\S]*{/refno-saba-coins-section\}").Replace(result, string.Empty);
                }
            }

            return result;
        }

        private static string AddLicenseeSection(string content, string licenseeName)
        {
            var openingTag = $"{{{licenseeName}-{LICENSEE_SUFFIX_SECTION}}}";
            var closingTag = $"{{/{licenseeName}-{LICENSEE_SUFFIX_SECTION}}}";
            var customContent = content;
            if (content.Contains(openingTag))
            {
                customContent = Replace(customContent, openingTag, closingTag, true);
            }
            return RemoveUnShowLicenseeSection(customContent);
        }

        private static string RemoveUnShowLicenseeSection(string content)
        {
            var customContent = content;
            var linceseeTagPattern = $"{{[\\w\\d]+-{LICENSEE_SUFFIX_SECTION}}}";
            var matchItems = new Regex(linceseeTagPattern).Matches(customContent)
                .OfType<System.Text.RegularExpressions.Match>()
                .Select(_ => _.Value);
            foreach (var matchItem in matchItems)
            {
                var removeLicenseeNameSection = matchItem.Replace($"-{LICENSEE_SUFFIX_SECTION}}}", string.Empty)
                    .Replace("{", string.Empty);
                var openingTag = $"{{{removeLicenseeNameSection}-{LICENSEE_SUFFIX_SECTION}}}";
                var closingTag = $"{{\\/{removeLicenseeNameSection}-{LICENSEE_SUFFIX_SECTION}}}";
                var removePattern = $"{openingTag}([\\s\\S]*?){closingTag}";
                customContent = new Regex(removePattern).Replace(customContent, string.Empty);
            }
            return customContent;
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
            customcontent = RemoveProductSection(customcontent, products, ProductTypes.CashOut, Product.CO);
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
                    var pattern = @"\{" + productCode + @"-productlist-section\}([\s\S]*?){/" + productCode + @"-productlist-section\}";
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

        private static string Replace(string content, string openingSectionTag, string closingSectionTag, bool shouldKeepSection)
        {
            var result = content;
            if (content.Contains(openingSectionTag))
            {
                if (shouldKeepSection)
                {
                    result = result.Replace(openingSectionTag, string.Empty);
                    result = result.Replace(closingSectionTag, string.Empty);
                }
                else
                {
                    result = new Regex($@"{openingSectionTag}([\s\S]*?){closingSectionTag}").Replace(result, string.Empty);
                }
            }

            return result;
        }
    }
}