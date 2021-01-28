using Fanex.Athena.Service.StatelessCore.Utility;
using Fanex.NVC.Authentication.Infrastructure;
using NUnit.Framework;
using System.Collections.Generic;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests.Utility
{
    [TestFixture]
    public class AuthParameterHelperTest
    {
        [Test]
        public void GenerateAgentListXml_CurrencyIdIsNumberAndPositive_ReturnCorrectXmlString()
        {
            // Arrange
            var agentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 1, 2 } },
                { 20, new[] { 3, 4 } }
            };

            var expectedResult = "<ROOT><Agent AgentId=\"1\" Currency=\"1\"/><Agent AgentId=\"2\" Currency=\"1\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(agentList, 0, true);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GenerateAgentListXml_CurrencyIdIsNumberAndNegative_ReturnCorrectXmlString()
        {
            // Arrange
            var agentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 1, 2 } },
                { 20, new[] { 3, 4 } }
            };

            var expectedResult = "<ROOT><Agent AgentId=\"1\" Currency=\"1\"/><Agent AgentId=\"2\" Currency=\"1\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(agentList, -2, true);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GenerateAgentListXml_CurrencyIdIsNumberAndExcludeTestDataParamIsFalse_ReturnCorrectXmlString()
        {
            // Arrange
            var agentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 1, 2 } },
                { 2, new[] { 3 } }
            };

            var expectedResult = "<ROOT><Agent AgentId=\"3\" Currency=\"2\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(agentList, 2, false);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GenerateAgentListXml_CurrencyIdIsListAndContainUUSCurrency_ReturnCorrectXmlString()
        {
            // Arrange
            var agentList = new Dictionary<int, int[]>
            {
                { 1, new[] { 1, 2 } },
                { 20, new[] { 3, 4 } }
            };

            var expectedResult = "<ROOT><Agent AgentId=\"1\" Currency=\"1\"/><Agent AgentId=\"2\" Currency=\"1\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(agentList, new[] { 1, 20 }, true);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GetAgentList_FilterBrandIds_ReturnCorrectlyResult()
        {
            // Arrange
            var brands = new List<Brand>
            {
                new Brand
                {
                    Id = 1,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 1, new[] { 1, 2, 3 } }, { 3, new[] { 8, 9 } } }
                },
                new Brand
                {
                    Id = 2,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 1, new[] { 1, 4 } }, { 2, new[] { 5, 6 } } }
                },
                new Brand
                {
                    Id = 3,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 2, new[] { 6, 7 } }, { 3, new[] { 8 } } }
                }
            };

            var expectedResult = new Dictionary<int, int[]>
            {
                { 1, new [] { 1, 2, 3 } },
                { 2, new [] { 6, 7 } },
                { 3, new [] { 8, 9 } }
            };

            // Action
            var result = AuthParameterHelper.GetAgentList(brands, new[] { 1, 3 });

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GetAgentList_FilterBrandIdsString_ReturnCorrectlyResult1()
        {
            // Arrange
            var brands = new List<Brand>
            {
                new Brand
                {
                    Id = 1,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 1, new[] { 1, 2, 3 } }, { 3, new[] { 8, 9 } } }
                },
                new Brand
                {
                    Id = 2,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 1, new[] { 1, 4 } }, { 2, new[] { 5, 6 } } }
                },
                new Brand
                {
                    Id = 3,
                    CurrencyAgentList = new Dictionary<int, int[]> { { 2, new[] { 6, 7 } }, { 3, new[] { 8 } } }
                }
            };

            var expectedResult = new Dictionary<int, int[]>
            {
                { 1, new [] { 1, 2, 3 } },
                { 2, new [] { 6, 7 } },
                { 3, new [] { 8, 9 } }
            };

            // Action
            var result = AuthParameterHelper.GetAgentList(brands, "1,3");

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GetCurrencyList_DuplicateCurrency_ReturnCorrectlyResult1()
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
                    CurrencyList = new Dictionary<int, string> { { 1, "USD" }, { 2, "EUR" }, { 3, "INH" } }
                },
                new Brand
                {
                    Id = 3,
                    CurrencyList = new Dictionary<int, string> { { 1, "USD" }, { 2, "EUR" }, { 3, "INH" }, { 4, "CNY" } }
                }
            };

            var expectedResult = new Dictionary<int, string> { { 1, "USD" }, { 2, "EUR" }, { 3, "INH" }, { 4, "CNY" } };

            // Action
            var result = AuthParameterHelper.GetCurrencyList(brands);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }
    }
}