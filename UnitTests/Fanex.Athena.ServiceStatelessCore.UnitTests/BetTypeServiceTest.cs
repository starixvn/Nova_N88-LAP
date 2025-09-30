using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fanex.Athena.DataAccess.Core.Common.Interfaces;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Service.StatelessCore;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Athena.UnitTest.Common.Helpers;
using Fanex.Athena.VendorAdapter.Interfaces;
using NSubstitute;
using NUnit.Framework;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    [TestFixture]
    public class BetTypeServiceTest
    {
        private IBetTypeDataAccess _betTypeDataAccess;
        private ICacheRefAdapter _cacheRefAdapter;
        private IBetTypeService _betTypeService;

        [SetUp]
        public void SetUp()
        {
            _betTypeDataAccess = Substitute.For<IBetTypeDataAccess>();
            _cacheRefAdapter = Substitute.For<ICacheRefAdapter>();
            _betTypeService = new BetTypeService(_betTypeDataAccess, _cacheRefAdapter);
        }

        [TearDown]
        public void TearDown()
        {
            _betTypeDataAccess = null;
            _cacheRefAdapter = null;
            _betTypeService = null;
        }

        [Test]
        public async Task GetBettypes_ValidInputs_CallsDataAccessWithCorrectXml()
        {
            // Arrange
            const int licenseeId = 1;
            const string languageCode = "en-US";
            var sports = new List<SportProductItem>
            {
                new SportProductItem { ID = 1, ParentId = -1 },
                new SportProductItem { ID = 2, ParentId = 1 },
                new SportProductItem { ID = 3, ParentId = 1 }
            };

            var expectedBetTypes = new List<CheckedItem>
            {
                new CheckedItem { ID = 1, Name = "Bet Type 1" }
            };

            _betTypeDataAccess.GetBettypes(licenseeId, Arg.Any<string>(), languageCode)
                .Returns(Task.FromResult((IList<CheckedItem>)expectedBetTypes));

            // Act
            var result = await _betTypeService.GetBettypes(licenseeId, sports, languageCode);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.EqualTo(expectedBetTypes));
                _betTypeDataAccess.Received(1).GetBettypes(
                    licenseeId,
                    Arg.Is<string>(xml => xml.Contains("<products>") && xml.Contains("</products>") && xml.Contains("product ID=\"1\"")),
                    languageCode);
            });
        }

        [Test]
        public async Task GetBettypes_NullSports_ReturnsEmptyList()
        {
            // Arrange
            const int licenseeId = 1;
            const string languageCode = "en-US";
            List<SportProductItem> sports = null;

            // Act
            var result = await _betTypeService.GetBettypes(licenseeId, sports, languageCode);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Empty);
                _betTypeDataAccess.DidNotReceiveWithAnyArgs().GetBettypes(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<string>());
            });
        }

        [Test]
        public async Task GetBettypes_EmptySports_ReturnsEmptyList()
        {
            // Arrange
            const int licenseeId = 1;
            const string languageCode = "en-US";
            var sports = new List<SportProductItem>();

            // Act
            var result = await _betTypeService.GetBettypes(licenseeId, sports, languageCode);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Empty);
                _betTypeDataAccess.DidNotReceiveWithAnyArgs().GetBettypes(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<string>());
            });
        }

        [Test]
        public async Task GetBettypes_InvalidLicenseeId_ReturnsEmptyList()
        {
            // Arrange
            const int licenseeId = 0;
            const string languageCode = "en-US";
            var sports = new List<SportProductItem>
            {
                new SportProductItem { ID = 1, ParentId = -1 }
            };

            // Act
            var result = await _betTypeService.GetBettypes(licenseeId, sports, languageCode);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Empty);
                _betTypeDataAccess.DidNotReceiveWithAnyArgs().GetBettypes(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<string>());
            });
        }

        [Test]
        public async Task GetBettypes_ParentSportWithChildren_IncludesChildSports()
        {
            // Arrange
            const int licenseeId = 1;
            const string languageCode = "en-US";
            var sports = new List<SportProductItem>
            {
                new SportProductItem { ID = 1, ParentId = -1 },
                new SportProductItem { ID = 2, ParentId = 1 },
                new SportProductItem { ID = 3, ParentId = 1 }
            };

            var expectedBetTypes = new List<CheckedItem>();
            _betTypeDataAccess.GetBettypes(licenseeId, Arg.Any<string>(), languageCode)
                .Returns(Task.FromResult((IList<CheckedItem>)expectedBetTypes));

            // Act
            var result = await _betTypeService.GetBettypes(licenseeId, sports, languageCode);

            // Assert
            _betTypeDataAccess.Received(1).GetBettypes(
                licenseeId,
                Arg.Is<string>(xml => xml.Contains("Sport=\"2,3\"")),
                languageCode);
        }

        [Test]
        public async Task GetBettypes_ParentSportWithoutChildren_UsesParentId()
        {
            // Arrange
            const int licenseeId = 1;
            const string languageCode = "en-US";
            var sports = new List<SportProductItem>
            {
                new SportProductItem { ID = 1, ParentId = -1 }
            };

            var expectedBetTypes = new List<CheckedItem>();
            _betTypeDataAccess.GetBettypes(licenseeId, Arg.Any<string>(), languageCode)
                .Returns(Task.FromResult((IList<CheckedItem>)expectedBetTypes));

            // Act
            var result = await _betTypeService.GetBettypes(licenseeId, sports, languageCode);

            // Assert
            _betTypeDataAccess.Received(1).GetBettypes(
                licenseeId,
                Arg.Is<string>(xml => xml.Contains("Sport=\"1\"")),
                languageCode);
        }

        [Test]
        public async Task GetBettypesByProduct_ValidInputs_CallsDataAccess()
        {
            // Arrange
            const int licenseeId = 1;
            const string productCode = "SB";
            const string languageCode = "en-US";
            var expectedBetTypes = new List<CheckedItem>
            {
                new CheckedItem { ID = 1, Name = "Bet Type 1" }
            };

            _betTypeDataAccess.GetBettypesByProduct(licenseeId, productCode, languageCode)
                .Returns(Task.FromResult((IList<CheckedItem>)expectedBetTypes));

            // Act
            var result = await _betTypeService.GetBettypesByProduct(licenseeId, productCode, languageCode);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.EqualTo(expectedBetTypes));
                _betTypeDataAccess.Received(1).GetBettypesByProduct(licenseeId, productCode, languageCode);
            });
        }

        [Test]
        public async Task GetBetTypeForProducts_ValidInputs_ReturnsGroupedBetTypes()
        {
            // Arrange
            const int licenseeId = 1;
            const string lang = "en-US";
            const string productCodes = "SB,C1";

            var betTypeData = new List<(string ProductCode, int BetType)>
            {
                ("SB", 1),
                ("SB", 2),
                ("C1", 3)
            };

            _betTypeDataAccess.GetBetTypeForProducts(licenseeId, productCodes)
                .Returns(Task.FromResult((IEnumerable<(string ProductCode, int BetType)>)betTypeData));

            _cacheRefAdapter.GetBetTypeName(Arg.Any<int>(), lang)
                .Returns("Bet Type Name");

            // Act
            var result = await _betTypeService.GetBetTypeForProducts(licenseeId, lang, productCodes);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.Count(), Is.EqualTo(2)); // Two product groups
                var sbGroup = result.FirstOrDefault(g => g.Value == "SB");
                Assert.That(sbGroup, Is.Not.Null);
                Assert.That(sbGroup.Children.Count(), Is.EqualTo(2)); // Two bet types for SB

                var c1Group = result.FirstOrDefault(g => g.Value == "C1");
                Assert.That(c1Group, Is.Not.Null);
                Assert.That(c1Group.Children.Count(), Is.EqualTo(1)); // One bet type for C1
            });
        }

        [Test]
        public async Task GetBetTypeForProducts_EmptyData_ReturnsEmptyResult()
        {
            // Arrange
            const int licenseeId = 1;
            const string lang = "en-US";
            const string productCodes = "SB";

            var betTypeData = new List<(string ProductCode, int BetType)>();

            _betTypeDataAccess.GetBetTypeForProducts(licenseeId, productCodes)
                .Returns(Task.FromResult((IEnumerable<(string ProductCode, int BetType)>)betTypeData));

            // Act
            var result = await _betTypeService.GetBetTypeForProducts(licenseeId, lang, productCodes);

            // Assert
            Assert.That(result, Is.Empty);
        }
    }
}