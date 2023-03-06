namespace Fanex.Athena.DataAccess.Report.UnitTests
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Core.UnitTests.TestHelpers;
    using Fanex.Athena.Model.Report.DTO.AbnormalBet;
    using NSubstitute;
    using NUnit.Framework;
    using UnitTest.Common.Helpers;

    public class AbnormalBetDataAccesTest : BaseDataAccessHelperTest<AbnormalBetDataAcces>
    {
        private const string GetSubIssueSp = "Lrf_AbnormalBet_SubIssueSel";
        private const string langKey = "US";

        protected override void SetUpDataAccess()
        {
            DataAccess = Substitute.ForPartsOf<AbnormalBetDataAcces>();
        }

        [Test]
        public async Task GetAbnormalSubIssue_WhenCall_ParameterPassedCorrectly()
        {
            // Arrange
            DataAccess.GetObjectDb(Arg.Is(GetSubIssueSp)).Returns(ObjectDb);
            Reader.Read().Returns(false);

            // Action
            await DataAccess.GetAbnormalSubIssue(langKey).ConfigureAwait(false);

            // Assert
            ObjectDb.Received(1).SetParameterValue("Langkey", langKey);
        }

        [Test]
        public async Task GetSummary_WhenCall_ReturnCorrectData()
        {
            // Arrange
            DataAccess.GetObjectDb(Arg.Is(GetSubIssueSp)).Returns(ObjectDb);
            Reader.Read().Returns(true, false);
            Reader.FieldCount.Returns(0);

            var fakeData = CreateFakeData();
            MapReaderData(fakeData);

            var expectedData = ObjectHelper.ToJson(new List<SubIssue>()
            {
                new SubIssue
                {
                    SubIssueTypeId = 1,
                    SubIssueTypeName = "abnormalbet"
                }
            });

            // Action
            var result = await DataAccess.GetAbnormalSubIssue(langKey);

            // Assert
            Assert.That(ObjectHelper.ToJson(result), Is.EqualTo(expectedData));
        }

        private static Dictionary<string, object> CreateFakeData()
        {
            return new Dictionary<string, object>
            {
                { "SubIssueTypeId", "1" }, { "SubIssueTypeName", "abnormalbet" }
            };
        }
    }
}