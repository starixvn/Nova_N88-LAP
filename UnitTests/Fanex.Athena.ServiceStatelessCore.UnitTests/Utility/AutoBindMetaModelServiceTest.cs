using System;
using System.Collections.Generic;
using System.Linq;
using Fanex.Athena.DataAccess.Core.Configuration.Interfaces;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Athena.Model.Core.MetaModel;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Athena.Service.StatelessCore.Utility;
using NSubstitute;
using NUnit.Framework;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests.Utility
{
    [TestFixture]
    public class AutoBindMetaModelServiceTest
    {
        [Test]
        public void MapAgentXml_WithMetaModelAgent_SetsAgentListXml()
        {
            // Arrange
            var mockAgent = Substitute.For<IMetaModelAgent>();
            mockAgent.IsExcludedTestData.Returns(false);

            var actionArguments = new Dictionary<string, object>
            {
                { "agent", mockAgent }
            };

            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100, 101 } }
            };

            // Act
            AutoBindMetaModelService.MapAgentXml(actionArguments, currencyAgentList);

            // Assert
            mockAgent.Received(1).AgentListXml = Arg.Any<string>();
        }

        [Test]
        public void MapAgentXml_WithMetaModelCurrency_UsesCurrencyId()
        {
            // Arrange
            var mockAgent = Substitute.For<IMetaModelAgent, IMetaModelCurrency>();
            ((IMetaModelCurrency)mockAgent).CurrencyId.Returns(1);
            mockAgent.IsExcludedTestData.Returns(false);

            var actionArguments = new Dictionary<string, object>
            {
                { "agent", mockAgent }
            };

            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100, 101 } }
            };

            // Act
            AutoBindMetaModelService.MapAgentXml(actionArguments, currencyAgentList);

            // Assert
            mockAgent.Received(1).AgentListXml = Arg.Is<string>(xml => xml.Contains("Currency=\"1\""));
        }

        [Test]
        public void MapAgentXml_WithNegativeCurrencyId_UsesZero()
        {
            // Arrange
            var mockAgent = Substitute.For<IMetaModelAgent, IMetaModelCurrency>();
            ((IMetaModelCurrency)mockAgent).CurrencyId.Returns(-1);
            mockAgent.IsExcludedTestData.Returns(false);

            var actionArguments = new Dictionary<string, object>
            {
                { "agent", mockAgent }
            };

            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100 } },
                { 2, new[] { 200 } }
            };

            // Act
            AutoBindMetaModelService.MapAgentXml(actionArguments, currencyAgentList);

            // Assert
            mockAgent.Received(1).AgentListXml = Arg.Is<string>(xml =>
                xml.Contains("Currency=\"1\"") && xml.Contains("Currency=\"2\""));
        }

        [Test]
        public void MapAgentXml_WithMetaModelCurrencyIdList_ParsesCurrencyIds()
        {
            // Arrange
            var mockAgent = Substitute.For<IMetaModelAgent, IMetaModelCurrencyIdList>();
            ((IMetaModelCurrencyIdList)mockAgent).CurrencyIdList.Returns("1,2");
            mockAgent.IsExcludedTestData.Returns(false);

            var actionArguments = new Dictionary<string, object>
            {
                { "agent", mockAgent }
            };

            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100 } },
                { 2, new[] { 200 } },
                { 3, new[] { 300 } }
            };

            // Act
            AutoBindMetaModelService.MapAgentXml(actionArguments, currencyAgentList);

            // Assert
            mockAgent.Received(1).AgentListXml = Arg.Is<string>(xml =>
                xml.Contains("Currency=\"1\"") && xml.Contains("Currency=\"2\"") && !xml.Contains("Currency=\"3\""));
        }

        [Test]
        public void MapAgentXml_WithEmptyCurrencyIdList_UsesDefaultCurrency()
        {
            // Arrange
            var mockAgent = Substitute.For<IMetaModelAgent, IMetaModelCurrencyIdList>();
            ((IMetaModelCurrencyIdList)mockAgent).CurrencyIdList.Returns("");
            mockAgent.IsExcludedTestData.Returns(false);

            var actionArguments = new Dictionary<string, object>
            {
                { "agent", mockAgent }
            };

            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100 } },
                { 2, new[] { 200 } }
            };

            // Act
            AutoBindMetaModelService.MapAgentXml(actionArguments, currencyAgentList);

            // Assert
            mockAgent.Received(1).AgentListXml = Arg.Is<string>(xml =>
                xml.Contains("Currency=\"1\"") && xml.Contains("Currency=\"2\""));
        }

        [Test]
        public void MapAgentXml_NoMetaModelAgent_DoesNothing()
        {
            // Arrange
            var actionArguments = new Dictionary<string, object>
            {
                { "other", "not an agent" }
            };

            var currencyAgentList = new Dictionary<int, int[]>();

            // Act & Assert
            Assert.DoesNotThrow(() => AutoBindMetaModelService.MapAgentXml(actionArguments, currencyAgentList));
        }

        [Test]
        public void MapCurrencyList_WithMetaModelCurrencyList_SetsCurrencyList()
        {
            // Arrange
            var mockCurrencyList = Substitute.For<IMetaModelCurrencyList>();
            var actionArguments = new Dictionary<string, object>
            {
                { "currencyList", mockCurrencyList }
            };

            var currencyList = new Dictionary<int, string>
            {
                { 1, "USD" },
                { 2, "EUR" }
            };

            // Act
            AutoBindMetaModelService.MapCurrencyList(actionArguments, currencyList);

            // Assert
            mockCurrencyList.Received(1).CurrencyList = Arg.Is<List<Currency>>(list =>
                list.Count == 2 && list.Any(c => c.ID == 1 && c.Name == "USD"));
        }

        [Test]
        public void MapCurrencyList_WithMetaModelCurrencyIdList_FiltersSelectedCurrencies()
        {
            // Arrange
            var mockCurrencyList = Substitute.For<IMetaModelCurrencyList, IMetaModelCurrencyIdList>();
            ((IMetaModelCurrencyIdList)mockCurrencyList).CurrencyIdList.Returns("1,3");

            var actionArguments = new Dictionary<string, object>
            {
                { "currencyList", mockCurrencyList }
            };

            var currencyList = new Dictionary<int, string>
            {
                { 1, "USD" },
                { 2, "EUR" },
                { 3, "GBP" }
            };

            // Act
            AutoBindMetaModelService.MapCurrencyList(actionArguments, currencyList);

            // Assert
            mockCurrencyList.Received(1).CurrencyList = Arg.Is<List<Currency>>(list =>
                list.Count == 2 &&
                list.Any(c => c.ID == 1 && c.Name == "USD") &&
                list.Any(c => c.ID == 3 && c.Name == "GBP") &&
                !list.Any(c => c.ID == 2));
        }

        [Test]
        public void MapUserId_WithMetaModelUserId_SetsUserId()
        {
            // Arrange
            var mockUserIdModel = Substitute.For<IMetaModelUserId>();
            var actionArguments = new Dictionary<string, object>
            {
                { "userModel", mockUserIdModel }
            };

            const int userId = 123;

            // Act
            AutoBindMetaModelService.MapUserId(actionArguments, userId);

            // Assert
            mockUserIdModel.Received(1).UserId = userId;
        }

        [Test]
        public void MapUserId_WithUserIdInArguments_SetsUserIdFromArguments()
        {
            // Arrange
            var mockUserIdModel = Substitute.For<IMetaModelUserId>();
            var actionArguments = new Dictionary<string, object>
            {
                { "userModel", mockUserIdModel },
                { "userid", 456 }
            };

            // Act
            AutoBindMetaModelService.MapUserId(actionArguments);

            // Assert
            mockUserIdModel.Received(1).UserId = 456;
        }

        [Test]
        public void MapSiteName_WithMetaModelSiteName_SetsSiteName()
        {
            // Arrange
            var mockSiteNameModel = Substitute.For<IMetaModelSiteName>();
            var actionArguments = new Dictionary<string, object>
            {
                { "siteModel", mockSiteNameModel }
            };

            const string siteName = "TestSite";

            // Act
            AutoBindMetaModelService.MapSiteName(actionArguments, siteName);

            // Assert
            mockSiteNameModel.Received(1).SiteName = siteName;
        }

        [Test]
        public void MapSiteName_WithSiteNameInArguments_SetsSiteNameFromArguments()
        {
            // Arrange
            var mockSiteNameModel = Substitute.For<IMetaModelSiteName>();
            var actionArguments = new Dictionary<string, object>
            {
                { "siteModel", mockSiteNameModel },
                { "sitename", "ArgumentSite" }
            };

            // Act
            AutoBindMetaModelService.MapSiteName(actionArguments);

            // Assert
            mockSiteNameModel.Received(1).SiteName = "ArgumentSite";
        }

        [Test]
        public void MapLanguage_WithLanguageInArguments_MapsLanguageCode()
        {
            // Arrange
            var mockLanguageModel = Substitute.For<IMetaModelLanguage>();
            var actionArguments = new Dictionary<string, object>
            {
                { "languageModel", mockLanguageModel },
                { "language", "en" }
            };

            // Act
            AutoBindMetaModelService.MapLanguage(actionArguments);

            // Assert
            mockLanguageModel.Received(1).Language = "en-US";
        }

        [Test]
        public void MapIp_WithMetaModelIp_SetsIp()
        {
            // Arrange
            var mockIpModel = Substitute.For<IMetaModelIp>();
            var actionArguments = new Dictionary<string, object>
            {
                { "ipModel", mockIpModel }
            };

            const string ip = "192.168.1.1";

            // Act
            AutoBindMetaModelService.MapIp(actionArguments, ip);

            // Assert
            mockIpModel.Received(1).Ip = ip;
        }

        [Test]
        public void MapBalanceUpAndMoveBet_WithMetaModel_SetsBalanceUpData()
        {
            // Arrange
            var mockBalanceUpModel = Substitute.For<IMetaModelBalanceUpAndMoveBet>();
            var mockBalanceUpDataAccess = Substitute.For<IBalanceUpDataAccess>();
            var balanceUpData = new BalanceUp { BalanceUpDay = new DateTime(2023, 5, 15), MoveBetsDay = new DateTime(2023, 5, 20) };

            mockBalanceUpDataAccess.GetBalanceUp().Returns(balanceUpData);

            var actionArguments = new Dictionary<string, object>
            {
                { "balanceModel", mockBalanceUpModel }
            };

            // Act
            AutoBindMetaModelService.MapBalanceUpAndMoveBet(actionArguments, mockBalanceUpDataAccess);

            // Assert
            Assert.Multiple(() =>
            {
                mockBalanceUpModel.Received(1).BalanceUpDay = new DateTime(2023, 5, 15);
                mockBalanceUpModel.Received(1).MoveBetsDay = new DateTime(2023, 5, 20);
            });
        }

        [Test]
        public void MapShowingBetFromIP_WithMetaModelShowIPVN_SetsIsShowIpvn()
        {
            // Arrange
            var mockShowIpModel = Substitute.For<IMetaModelShowIPVN>();
            var actionArguments = new Dictionary<string, object>
            {
                { "showIpModel", mockShowIpModel }
            };

            // Act
            AutoBindMetaModelService.MapShowingBetFromIP(actionArguments, true);

            // Assert
            mockShowIpModel.Received(1).IsShowIpvn = true;
        }

        [Test]
        public void MapProductCodeList_WithValidMetaModel_BindsProductCodeList()
        {
            // Arrange
            var mockProductCodeListModel = Substitute.For<IMetaModelProductCodeList>();
            mockProductCodeListModel.ProductCodeList.Returns("SB,C1");

            var mockProductService = Substitute.For<IProductService>();
            mockProductService.GetAllowedSubProductCodeList(Arg.Any<IEnumerable<string>>(), Arg.Any<string>())
                .Returns("SB");

            var actionArguments = new Dictionary<string, object>
            {
                { "productModel", mockProductCodeListModel }
            };

            var offeredSubProducts = new[] { "SB" };

            // Act
            AutoBindMetaModelService.MapProductCodeList(actionArguments, offeredSubProducts, mockProductService);

            // Assert
            Assert.Multiple(() =>
            {
                mockProductCodeListModel.Received(1).OriginalProductCodeList = "SB,C1";
                mockProductCodeListModel.Received(1).ProductCodeList = "SB";
            });
        }

        [Test]
        public void BindProductCodeList_SetsOriginalAndFilteredProductCodeList()
        {
            // Arrange
            var mockMetaModel = Substitute.For<IMetaModelProductCodeList>();
            mockMetaModel.ProductCodeList.Returns("SB,C1,C2");

            var mockProductService = Substitute.For<IProductService>();
            mockProductService.GetAllowedSubProductCodeList(Arg.Any<IEnumerable<string>>(), "SB,C1,C2")
                .Returns("SB,C1");

            var offeredSubProducts = new[] { "SB", "C1" };

            // Act
            AutoBindMetaModelService.BindProductCodeList(mockMetaModel, offeredSubProducts, mockProductService);

            // Assert
            Assert.Multiple(() =>
            {
                mockMetaModel.Received(1).OriginalProductCodeList = "SB,C1,C2";
                mockMetaModel.Received(1).ProductCodeList = "SB,C1";
            });
        }
    }
}