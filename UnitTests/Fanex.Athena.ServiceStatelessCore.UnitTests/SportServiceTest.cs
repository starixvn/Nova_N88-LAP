using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fanex.Athena.DataAccess.Core.Common.Interfaces;
using Fanex.Athena.Extension.Helper;
using Fanex.Athena.Extension.Utility.Interfaces;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Athena.Service.StatelessCore;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Athena.VendorAdapter.Interfaces;
using NSubstitute;
using NUnit.Framework;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    [TestFixture]
    public class SportServiceTest
    {
        private ISportTypeDataAccess _sportTypeDataAccess;
        private ICacheRefAdapter _cacheRefAdapter;
        private ICustomMemoryCacheService _cache;
        private ISportService _sportService;

        [SetUp]
        public void SetUp()
        {
            _sportTypeDataAccess = Substitute.For<ISportTypeDataAccess>();
            _cacheRefAdapter = Substitute.For<ICacheRefAdapter>();
            _cache = Substitute.For<ICustomMemoryCacheService>();
            _sportService = new SportService(_sportTypeDataAccess, _cacheRefAdapter, _cache);
        }

        [Test]
        public void GetSabaSport_ValidSportsList_AddsSabaVirtualSports()
        {
            // Arrange
            var sports = new List<SportProductItem>
            {
                new SportProductItem { ID = 1, Name = "Original Sport", ParentId = 1 }
            };

            _cacheRefAdapter.GetSportName(Arg.Any<int>()).Returns("Test Sport Name");

            // Act
            var result = _sportService.GetSabaSport(sports);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.Count(), Is.GreaterThan(11)); // Original + 11 Saba sports
                Assert.That(sports.Count, Is.GreaterThan(1)); // Original list was modified

                // Verify Saba sports were added
                var sabaVirtualSports = sports.Where(s => s.ID < 0 && s.ParentId == ProductTypes.Sportsbook).ToList();
                Assert.That(sabaVirtualSports.Count, Is.EqualTo(11));

                // Verify all Saba sports are checked
                Assert.That(sabaVirtualSports.All(s => s.Checked), Is.True);
            });
        }

        [Test]
        public void GetSabaSport_EmptySportsList_AddsSabaVirtualSports()
        {
            // Arrange
            var sports = new List<SportProductItem>();
            _cacheRefAdapter.GetSportName(Arg.Any<int>()).Returns("Test Sport");

            // Act
            var result = _sportService.GetSabaSport(sports);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.Count(), Is.EqualTo(11)); // 11 Saba sports
                Assert.That(sports.Count, Is.EqualTo(11)); // Original list was modified
            });
        }

        [Test]
        public async Task GetAllSports_CallsDataAccess_ReturnsResult()
        {
            // Arrange
            var expectedSports = new Dictionary<int, string>
            {
                { 1, "Soccer" },
                { 2, "Basketball" },
                { 3, "Tennis" }
            };
            _sportTypeDataAccess.GetAllSports().Returns(Task.FromResult<IDictionary<int, string>>(expectedSports));

            // Act
            var result = await _sportService.GetAllSports();

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.Count, Is.EqualTo(3));
                Assert.That(result[1], Is.EqualTo("Soccer"));
                Assert.That(result[2], Is.EqualTo("Basketball"));
                Assert.That(result[3], Is.EqualTo("Tennis"));
            });
            await _sportTypeDataAccess.Received(1).GetAllSports();
        }

        [Test]
        public async Task GetSportsAndProducts_ValidParameters_CallsDataAccess()
        {
            // Arrange
            var licenseeId = 123;
            var languageCode = "en-US";
            var productCodes = "SB,C1";
            var expectedResult = new List<SportProductItem>
            {
                new SportProductItem { ID = 1, Name = "Soccer" },
                new SportProductItem { ID = 2, Name = "Basketball" }
            };
            _sportTypeDataAccess.GetSportsAndProducts(licenseeId, languageCode, productCodes)
                .Returns(Task.FromResult<IEnumerable<SportProductItem>>(expectedResult));

            // Act
            var result = await _sportService.GetSportsAndProducts(licenseeId, languageCode, productCodes);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.Count(), Is.EqualTo(2));
                Assert.That(result.First().Name, Is.EqualTo("Soccer"));
            });
            await _sportTypeDataAccess.Received(1).GetSportsAndProducts(licenseeId, languageCode, productCodes);
        }

        [Test]
        public async Task GetSportsForTreeView_CacheHit_ReturnsCachedData()
        {
            // Arrange
            var licenseeId = 123;
            var languageCode = "en-US";
            var productCodes = "SB";
            var cachedData = new List<CheckedItem>
            {
                new CheckedItem { ID = 1, Name = "Cached Sport", Checked = true }
            };

            var cacheKey = CacheKey.MemorycacheSportListForTreeView + licenseeId + languageCode + productCodes;
            _cache.Get<IEnumerable<CheckedItem>>(cacheKey).Returns(cachedData);

            // Act
            var result = await _sportService.GetSportsForTreeView(licenseeId, languageCode, productCodes);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.Count(), Is.EqualTo(1));
                Assert.That(result.First().Name, Is.EqualTo("Cached Sport"));
            });
            _cache.Received(1).Get<IEnumerable<CheckedItem>>(cacheKey);
            await _sportTypeDataAccess.DidNotReceive().GetSportsForTreeView(Arg.Any<int>(), Arg.Any<string>());
        }

        [Test]
        public async Task GetSportsForTreeView_CacheMiss_FetchesFromDataAccess()
        {
            // Arrange
            var licenseeId = 123;
            var languageCode = "en-US";
            var productCodes = "SB";
            var cacheKey = CacheKey.MemorycacheSportListForTreeView + licenseeId + languageCode + productCodes;

            _cache.Get<IEnumerable<CheckedItem>>(cacheKey).Returns((IEnumerable<CheckedItem>)null);

            var dataAccessResult = new List<SportForTreeViewItem>
            {
                new SportForTreeViewItem { ProductId = 1, ProductCode = "SB", SportType = 1 },
                new SportForTreeViewItem { ProductId = 1, ProductCode = "SB", SportType = 2 }
            };
            _sportTypeDataAccess.GetSportsForTreeView(licenseeId, productCodes)
                .Returns(Task.FromResult<IEnumerable<SportForTreeViewItem>>(dataAccessResult));

            _cacheRefAdapter.GetSportName(Arg.Any<int>()).Returns("Test Sport");

            // Act
            var result = await _sportService.GetSportsForTreeView(licenseeId, languageCode, productCodes);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.Count(), Is.EqualTo(1)); // Grouped by Product
                Assert.That(result.First().Name, Is.EqualTo("Sportsbook")); // ProductCode "SB" maps to "Sportsbook"
                Assert.That(result.First().Children.Count(), Is.EqualTo(2)); // Two sports under the product
            });

            _cache.Received(1).Get<IEnumerable<CheckedItem>>(cacheKey);
            await _sportTypeDataAccess.Received(1).GetSportsForTreeView(licenseeId, productCodes);
        }

        [Test]
        public void BuildSportTypeXML_NullOrEmptySportIds_ReturnsOriginalValue()
        {
            // Arrange & Act & Assert
            Assert.That(SportService.BuildSportTypeXML(null), Is.Null);
            Assert.That(SportService.BuildSportTypeXML(""), Is.EqualTo(""));
            Assert.That(SportService.BuildSportTypeXML("All"), Is.EqualTo("All"));
        }

        [Test]
        public void BuildSportTypeXML_RegularSportIds_ReturnsXML()
        {
            // Arrange
            var sportIds = "1,2,3";

            // Act
            var result = SportService.BuildSportTypeXML(sportIds);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result, Does.StartWith("<ROOT>"));
                Assert.That(result, Does.EndWith("</ROOT>"));
                Assert.That(result, Does.Contain("SportType=\"1\""));
                Assert.That(result, Does.Contain("SportType=\"2\""));
                Assert.That(result, Does.Contain("SportType=\"3\""));
                Assert.That(result, Does.Contain("LeagueGroupIds=\"0\""));
            });
        }

        [Test]
        public void BuildSportTypeXML_SabaVirtualSport_MapsCorrectly()
        {
            // Arrange - Using SabaSoccer sport type
            var sportIds = "-1"; // SabaSoccer sport ID

            // Act
            var result = SportService.BuildSportTypeXML(sportIds);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result, Does.StartWith("<ROOT>"));
                Assert.That(result, Does.EndWith("</ROOT>"));
                Assert.That(result, Does.Contain("SportType=\"1\"")); // Maps to Soccer (SportType.Soccer = 1)
                Assert.That(result, Does.Contain("LeagueGroupIds=\"42,74\"")); // Saba Soccer league groups
            });
        }

        [Test]
        public void BuildSportTypeXML_MixedSportIds_HandlesBothRegularAndSaba()
        {
            // Arrange
            var sportIds = "1,-1,5"; // Regular, Saba, Regular

            // Act
            var result = SportService.BuildSportTypeXML(sportIds);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result, Does.Contain("SportType=\"1\""));
                Assert.That(result, Does.Contain("SportType=\"5\""));
                Assert.That(result, Does.Contain("LeagueGroupIds=\"0\"")); // Regular sports
                Assert.That(result, Does.Contain("LeagueGroupIds=\"42,74\"")); // Saba sport
            });
        }

        [Test]
        public void BuildSportTypeXML_InvalidSportId_HandlesGracefully()
        {
            // Arrange
            var sportIds = "invalid,1,abc";

            // Act
            var result = SportService.BuildSportTypeXML(sportIds);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result, Does.StartWith("<ROOT>"));
                Assert.That(result, Does.EndWith("</ROOT>"));
                Assert.That(result, Does.Contain("SportType=\"0\"")); // Invalid IDs become 0
                Assert.That(result, Does.Contain("SportType=\"1\"")); // Valid ID preserved
            });
        }

        [Test]
        public void GetSportNameForTreeView_PositiveSportType_CallsCacheAdapter()
        {
            // This test uses reflection to access the private method for testing
            var method = typeof(SportService).GetMethod("GetSportNameForTreeView",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);

            // Arrange
            var sportType = 1;
            var expectedName = "Soccer";
            _cacheRefAdapter.GetSportName(sportType).Returns(expectedName);

            // Act
            var result = (string)method.Invoke(_sportService, new object[] { sportType });

            // Assert
            Assert.That(result, Is.EqualTo(expectedName));
            _cacheRefAdapter.Received(1).GetSportName(sportType);
        }

        [Test]
        public void GetSportNameForTreeView_SabaBasketball_ReturnsCorrectName()
        {
            // This test uses reflection to access the private method for testing
            var method = typeof(SportService).GetMethod("GetSportNameForTreeView",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);

            // Arrange
            var sportType = (int)SportType.SabaBasketball; // -2
            var basketballName = "Basketball";
            _cacheRefAdapter.GetSportName((int)SportType.BasketBall).Returns(basketballName);

            // Act
            var result = (string)method.Invoke(_sportService, new object[] { sportType });

            // Assert
            Assert.That(result, Does.StartWith("Saba"));
            Assert.That(result, Does.Contain(basketballName));
            _cacheRefAdapter.Received(1).GetSportName((int)SportType.BasketBall);
        }

        [Test]
        public void GetSportNameForTreeView_ParlayTreeView_ReturnsParlay()
        {
            // This test uses reflection to access the private method for testing
            var method = typeof(SportService).GetMethod("GetSportNameForTreeView",
                System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Instance);

            // Arrange
            var sportType = (int)SportType.ParlayTreeView; // -999

            // Act
            var result = (string)method.Invoke(_sportService, new object[] { sportType });

            // Assert
            Assert.That(result, Does.Contain("Parlay"));
        }
    }
}
