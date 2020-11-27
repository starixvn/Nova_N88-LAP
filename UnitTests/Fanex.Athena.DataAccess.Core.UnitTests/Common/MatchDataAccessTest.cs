namespace Fanex.Athena.DataAccess.Core.UnitTests.Common
{
    using System;
    using System.Threading.Tasks;

    using Core.Common;

    using Model.Core.DTO.Common;

    using NSubstitute;

    using NUnit.Framework;

    using TestHelpers;

    using VendorAdapter.Interfaces;

    public class MatchDataAccessTest : BaseDataAccessHelperTest<MatchDataAccess>
    {

        protected override void SetUpDataAccess()
        {
            DataAccess = Substitute.ForPartsOf<MatchDataAccess>(Substitute.For<ICacheRefAdapter>());
        }

        [Test]
        public async Task GetMatchesByLeague_WhenCall_ExecuteReaderMethodIsCalled()
        {
            // Arrange
            var leagueId = 1;
            var fromDate = new DateTime(2016, 8, 10);
            var toDate = new DateTime(2016, 8, 11);

            dynamic param = new { LeagueId = 0 };
            DataAccess.GetObjectDb(Arg.Is("Lrf_SelMatchByLeague")).Returns(ObjectDb);
            ObjectDb.When(x => x.ExecuteReaderAsync(Arg.Any<object>())).Do(x => param = x[0]);

            // Action
            await DataAccess.GetMatchesByLeague(leagueId, fromDate, toDate);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(param.LeagueID, Is.EqualTo(leagueId));
                Assert.That(param.FromDate, Is.EqualTo(fromDate));
                Assert.That(param.ToDate, Is.EqualTo(toDate));
            });
        }

        [Test]
        public async Task GetMatchesByLeague_WhenCall_DataReturnedCorrectly()
        {
            // Arrange
            const int LeagueId = 1;
            var fromDate = new DateTime(2016, 8, 10);
            var toDate = new DateTime(2016, 8, 11);
            var expectedMatch = GetFakeMatch();

            DataAccess.GetObjectDb(Arg.Is("Lrf_SelMatchByLeague")).Returns(ObjectDb);
            MapReaderData(expectedMatch);
            Reader.Read().Returns(true, false);

            // Action
            var result = await DataAccess.GetMatchesByLeague(LeagueId, fromDate, toDate);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result[0].MatchId, Is.EqualTo(expectedMatch.MatchId));
                Assert.That(result[0].HomeId, Is.EqualTo(expectedMatch.HomeId));
                Assert.That(result[0].AwayId, Is.EqualTo(expectedMatch.AwayId));
            });
        }

        private Match GetFakeMatch()
        {
            return new Match
            {
                MatchId = 1,
                LeagueId = 2,
                IsOutRight = true,
                HomeId = 3,
                AwayId = 0,
                IsNeutral = false
            };
        }
    }
}