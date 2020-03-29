namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using DataAccess.Core.Common.Interfaces;

    using Extension.Utility.Interfaces;

    using Fanex.Athena.Service.StatelessCore;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    using Model.Core.DTO.Common;

    using NSubstitute;

    using NUnit.Framework;

    using UnitTest.Common.Helpers;

    [TestFixture]
    public class MatchServiceTest
    {
        private const string Language = "en-Us";

        private static readonly IList<Match> ExpectedResultDataList = new List<Match>
            {
                new Match { MatchId = 1 }
            };

        private ICustomMemoryCacheService _cache;
        private IMatchDataAccess _matchDataAccess;
        private IMatchService _matchService;

        [SetUp]
        public void SetUp()
        {
            _cache = Substitute.For<ICustomMemoryCacheService>();
            _matchDataAccess = Substitute.For<IMatchDataAccess>();
            _matchService = new MatchService(_matchDataAccess, _cache);
        }

        [TearDown]
        public void TearDown()
        {
            _matchDataAccess = null;
            _matchService = null;
        }

        [Test]
        public async Task GetMatchesByLeague_WhenCall_ReturnResultFromDataAccess()
        {
            // Arrange
            var leagueId = FakeHelper.Create<int>();
            var fromDate = FakeHelper.Create<DateTime>();
            var toDate = FakeHelper.Create<DateTime>();
            _matchDataAccess.GetMatchesByLeague(leagueId, fromDate, toDate).Returns(ExpectedResultDataList);

            // Action
            var result = await _matchService.GetMatchesByLeagueAsync(leagueId, fromDate, toDate);

            // Assert
            Assert.That(result[0].MatchId, Is.EqualTo(ExpectedResultDataList[0].MatchId));
        }
    }
}