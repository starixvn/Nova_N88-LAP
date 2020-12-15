using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Resources;
using Fanex.Athena.VendorAdapter.Interfaces;
using Fanex.RemotingRef;
using NSubstitute;
using NUnit.Framework;

namespace Fanex.Athena.VendorAdapter.UnitTests
{
    [TestFixture]
    public class CacheRefAdapterTest
    {
        private ICacheRefAdapter _cache;
        private IRemotingRefService _remotingRefService;

        [SetUp]
        public void Setup()
        {
            _remotingRefService = Substitute.For<IRemotingRefService>();
            _cache = new CacheRefAdapter(_remotingRefService);
        }

        [TearDown]
        public void TearDown()
        {
            _cache = null;
            _remotingRefService = null;
        }

        [Test]
        public void GetBettype_InValidId_ReturnEmptyString()
        {
            // Arrange
            string id = null;

            // Acction
            string result = _cache.GetBettype(id);

            // Assert
            Assert.AreEqual(string.Empty, result);
        }

        [Test]
        public void GetBettype_IsValidId_ReturnBettypeName()
        {
            // Arrange
            string id = "1";
            string expectedResult = "bettypename";
            _remotingRefService.GetBetTypeName(Arg.Any<string>(), Arg.Any<string>()).Returns(expectedResult);

            // Acction
            string result = _cache.GetBettype(id);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetSportName_InValidSportId_ReturnEmptyString()
        {
            // Arrange
            object SportId = null;

            // Acction
            string result = _cache.GetSportName(SportId);

            // Assert
            Assert.AreEqual(string.Empty, result);
        }

        [Test]
        public void GetSportName_IsValidSportId_ReturnSportName()
        {
            // Arrange
            object SportId = "1";
            string expectedResult = "sportname";
            _remotingRefService.GetSportName(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns(expectedResult);

            // Acction
            string result = _cache.GetSportName(SportId);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetTeamName_InValidTeamId_ReturnEmptyString()
        {
            // Arrange
            object TeamId = null;

            // Acction
            string result = _cache.GetTeamName(TeamId);

            // Assert
            Assert.AreEqual(string.Empty, result);
        }

        [Test]
        public void GetTeamName_IsValidSportId_ReturnTeamName()
        {
            // Arrange
            object TeamId = "1";
            string expectedResult = "teamname";
            _remotingRefService.GetTeamName(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns(expectedResult);

            // Acction
            string result = _cache.GetTeamName(TeamId);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetLeagueName_InValidTeamId_ReturnEmptyString()
        {
            // Arrange
            object TeamId = null;

            // Acction
            string result = _cache.GetLeagueName(TeamId);

            // Assert
            Assert.AreEqual(string.Empty, result);
        }

        [Test]
        public void GetLeagueName_IsValidSportId_ReturnLeagueName()
        {
            // Arrange
            object LeagueId = "1";
            string expectedResult = "LeagueName";
            _remotingRefService.GetLeagueName(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns(expectedResult);

            // Acction
            string result = _cache.GetLeagueName(LeagueId);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetBettype_BetTypeIsZero_ReturnEmptyString()
        {
            // Arrange
            int betType = 0;

            // Acction
            string result = _cache.GetBettype(betType, true);

            // Assert
            Assert.AreEqual(string.Empty, result);
        }

        [Test]
        public void GetBettype_BetTypeIsNgNumberGroup_IsLiveIndicator_ReturnBettypeName()
        {
            // Arrange
            int betType = (int)BetType.NgNumberGroup;
            string expectedResult = "bettypename";
            _remotingRefService.GetBetTypeName(Arg.Any<string>(), Arg.Any<string>()).Returns(expectedResult);
            expectedResult += " (" + ViewResources.LiveGame + ")";

            // Acction
            string result = _cache.GetBettype(betType, true);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetBettypeWithProductName_ReturnBettypeName()
        {
            // Arrange
            int betType = 2699;
            string expectedResult = "bettypename";
            _remotingRefService.GetBetTypeName(Arg.Any<string>(), Arg.Any<string>()).Returns(expectedResult);

            // Acction
            string result = _cache.GetBettypeWithProductName(betType, true);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetBettypeWithProductName_IsVirtualSports2_ReturnBettypeNameProductVS2()
        {
            // Arrange
            int betType = 2701;
            string expectedResult = "bettypename";
            _remotingRefService.GetBetTypeName(Arg.Any<string>(), Arg.Any<string>()).Returns(expectedResult);
            expectedResult += " (" + ViewResources.ProductVS2 + ")";

            // Acction
            string result = _cache.GetBettypeWithProductName(betType, true);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetCombinationTypeCombo_IsVirtualSports2_ReturnBettypeNameProductVS2()
        {
            // Arrange
            string[] expectedResult = { "a", "b", "c" };
            _remotingRefService.GetCombinationTypeCombo(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(expectedResult);

            // Acction
            string[] result = _cache.GetCombinationTypeCombo("a", "b", 1, 2);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }
    }
}
