using System;
using System.Collections.Generic;
using System.Linq;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Service.StatelessCore.Utility;
using Fanex.NVC.Authentication.Infrastructure;
using NUnit.Framework;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests.Utility
{
    [TestFixture]
    public class AuthParameterHelperTest
    {
        [Test]
        public void GetCurrencyList_ValidBrands_ReturnsCombinedCurrencyList()
        {
            // Arrange
            var brands = new List<Brand>
            {
                new Brand
                {
                    Id = 1,
                    CurrencyList = new Dictionary<int, string> { { 1, "USD" }, { 2, "EUR" } }
                },
                new Brand
                {
                    Id = 2,
                    CurrencyList = new Dictionary<int, string> { { 2, "EUR" }, { 3, "GBP" } }
                }
            };

            // Act
            var result = AuthParameterHelper.GetCurrencyList(brands);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.Count, Is.EqualTo(3));
                Assert.That(result[1], Is.EqualTo("USD"));
                Assert.That(result[2], Is.EqualTo("EUR"));
                Assert.That(result[3], Is.EqualTo("GBP"));
            });
        }

        [Test]
        public void GetCurrencyList_EmptyBrands_ReturnsEmptyDictionary()
        {
            // Arrange
            var brands = new List<Brand>();

            // Act
            var result = AuthParameterHelper.GetCurrencyList(brands);

            // Assert
            Assert.That(result.Count, Is.EqualTo(0));
        }

        [Test]
        public void GetAgentList_ValidBrandsAndIds_ReturnsFilteredAgentList()
        {
            // Arrange
            var brands = new List<Brand>
            {
                new Brand
                {
                    Id = 1,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 1, new[] { 100, 101 } } }
                },
                new Brand
                {
                    Id = 2,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 2, new[] { 200, 201 } } }
                }
            };
            var brandIds = new[] { 1 };

            // Act
            var result = AuthParameterHelper.GetAgentList(brands, brandIds);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.Count, Is.EqualTo(1));
                Assert.That(result[1], Is.EqualTo(new[] { 100, 101 }));
            });
        }

        [Test]
        public void GetAgentList_NonExistentBrandId_ReturnsEmptyDictionary()
        {
            // Arrange
            var brands = new List<Brand>
            {
                new Brand
                {
                    Id = 1,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 1, new[] { 100, 101 } } }
                }
            };
            var brandIds = new[] { 999 };

            // Act
            var result = AuthParameterHelper.GetAgentList(brands, brandIds);

            // Assert
            Assert.That(result.Count, Is.EqualTo(0));
        }

        [Test]
        public void GetAgentList_StringBrandIds_ParsesAndReturnsCorrectly()
        {
            // Arrange
            var brands = new List<Brand>
            {
                new Brand
                {
                    Id = 1,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 1, new[] { 100 } } }
                },
                new Brand
                {
                    Id = 2,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 2, new[] { 200 } } }
                }
            };
            var brandIdsString = "1,2";

            // Act
            var result = AuthParameterHelper.GetAgentList(brands, brandIdsString);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.Count, Is.EqualTo(2));
                Assert.That(result[1], Is.EqualTo(new[] { 100 }));
                Assert.That(result[2], Is.EqualTo(new[] { 200 }));
            });
        }

        [Test]
        public void GetAgentList_EmptyStringBrandIds_ReturnsEmptyDictionary()
        {
            // Arrange
            var brands = new List<Brand>();
            var brandIdsString = "";

            // Act
            var result = AuthParameterHelper.GetAgentList(brands, brandIdsString);

            // Assert
            Assert.That(result.Count, Is.EqualTo(0));
        }

        [Test]
        public void GenerateAgentListXml_SingleCurrency_ReturnsCorrectXml()
        {
            // Arrange
            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100, 101 } }
            };

            // Act
            var result = AuthParameterHelper.GenerateAgentListXml(currencyAgentList, 1);

            // Assert
            var expected = "<ROOT><Agent AgentId=\"100\" Currency=\"1\"/><Agent AgentId=\"101\" Currency=\"1\"/></ROOT>";
            Assert.That(result, Is.EqualTo(expected));
        }

        [Test]
        public void GenerateAgentListXml_AllCurrencies_ReturnsAllAgents()
        {
            // Arrange
            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100 } },
                { 2, new[] { 200 } }
            };
            var currencyIdList = new[] { 0 }; // All currencies

            // Act
            var result = AuthParameterHelper.GenerateAgentListXml(currencyAgentList, currencyIdList);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Does.StartWith("<ROOT>"));
                Assert.That(result, Does.EndWith("</ROOT>"));
                Assert.That(result, Does.Contain("AgentId=\"100\" Currency=\"1\""));
                Assert.That(result, Does.Contain("AgentId=\"200\" Currency=\"2\""));
            });
        }

        [Test]
        public void GenerateAgentListXml_ExcludeTestData_FiltersUusCurrency()
        {
            // Arrange
            var currencyAgentList = new Dictionary<int, int[]>
            {
                { CurrencyType.Uus, new[] { 999 } },
                { 1, new[] { 100 } }
            };
            var currencyIdList = new[] { 0 }; // All currencies

            // Act
            var result = AuthParameterHelper.GenerateAgentListXml(currencyAgentList, currencyIdList, true);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Does.Not.Contain("Currency=\"" + CurrencyType.Uus + "\""));
                Assert.That(result, Does.Contain("AgentId=\"100\" Currency=\"1\""));
            });
        }

        [Test]
        public void GenerateAgentListXml_SpecificCurrencies_ReturnsOnlySpecified()
        {
            // Arrange
            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100 } },
                { 2, new[] { 200 } },
                { 3, new[] { 300 } }
            };
            var currencyIdList = new[] { 1, 3 };

            // Act
            var result = AuthParameterHelper.GenerateAgentListXml(currencyAgentList, currencyIdList);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Does.Contain("AgentId=\"100\" Currency=\"1\""));
                Assert.That(result, Does.Not.Contain("AgentId=\"200\" Currency=\"2\""));
                Assert.That(result, Does.Contain("AgentId=\"300\" Currency=\"3\""));
            });
        }

        [Test]
        public void GenerateAgentListXml_NonExistentCurrency_SkipsNonExistent()
        {
            // Arrange
            var currencyAgentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 100 } }
            };
            var currencyIdList = new[] { 1, 999 }; // 999 doesn't exist

            // Act
            var result = AuthParameterHelper.GenerateAgentListXml(currencyAgentList, currencyIdList);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Does.Contain("AgentId=\"100\" Currency=\"1\""));
                Assert.That(result, Does.Not.Contain("Currency=\"999\""));
            });
        }

        [Test]
        public void ParseIdList_ValidCommaSeparatedIds_ReturnsCorrectList()
        {
            // Arrange
            var currencyIdList = "1,2,3";

            // Act
            var result = AuthParameterHelper.ParseIdList(currencyIdList);

            // Assert
            Assert.That(result.ToArray(), Is.EqualTo(new[] { 1, 2, 3 }));
        }

        [Test]
        public void ParseIdList_SingleId_ReturnsSingleItem()
        {
            // Arrange
            var currencyIdList = "1";

            // Act
            var result = AuthParameterHelper.ParseIdList(currencyIdList);

            // Assert
            Assert.That(result.ToArray(), Is.EqualTo(new[] { 1 }));
        }

        [Test]
        public void ParseIdList_WithSpaces_TrimsAndParses()
        {
            // Arrange
            var currencyIdList = " 1 , 2 , 3 ";

            // Act
            var result = AuthParameterHelper.ParseIdList(currencyIdList);

            // Assert
            Assert.That(result.ToArray(), Is.EqualTo(new[] { 1, 2, 3 }));
        }

        [Test]
        public void ParseIdList_EmptyString_ReturnsEmptyList()
        {
            // Arrange
            var currencyIdList = "";

            // Act
            var result = AuthParameterHelper.ParseIdList(currencyIdList);

            // Assert
            Assert.That(result.ToArray(), Is.Empty);
        }
    }
}