namespace Fanex.Athena.DataAccess.Core.UnitTests.Users
{
    using Core.Users;
    using Model.Core.DTO.Common;
    using NSubstitute;
    using NUnit.Framework;
    using TestHelpers;

    public class LicenseeDataAccessTest : BaseDataAccessHelperTest<LicenseeDataAccess>
    {
        private const string IsAllowUpdateMemberBAStatusSp = "Lrf_BATimeCheck";
        private const string GetLicenseeByNameSp = "Lrf_LicenseeSelBySiteName";

        [Test]
        public void IsAllowUpdateMemberBAStatus_WhenCall_ParametersPassedCorrectly()
        {
            // Arrange
            const int LicenseeId = 1;
            var request = new Request { Language = "en-US" };

            DataAccess.GetObjectDb(Arg.Is(IsAllowUpdateMemberBAStatusSp)).Returns(ObjectDb);

            // Action
            DataAccess.IsAllowUpdateMemberBAStatus(request, LicenseeId);

            // Assert
            Assert.Multiple(() =>
            {
                ObjectDb.Received(1).SetParameterValue("langkey", request.Language);
                ObjectDb.Received(1).SetParameterValue("LicenseeID", LicenseeId);
                ObjectDb.Received(1).SetParameterValue("isallow", null);
            });
        }

        [Test]
        public void IsAllowUpdateMemberBAStatus_WhenCall_ValueReturnedCorrectly()
        {
            // Arrange
            DataAccess.GetObjectDb(Arg.Is(IsAllowUpdateMemberBAStatusSp)).Returns(ObjectDb);
            ObjectDb.GetParameterValue("isallow").Returns(false);
            ResultInfoHelper.MockResultInfo(ObjectDb);

            // Action
            var result = DataAccess.IsAllowUpdateMemberBAStatus(new Request(), 0);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.ExtendedData, Is.False);
                Assert.That(result.Code, Is.EqualTo(ResultInfoHelper.ResultCode));
                Assert.That(result.Message, Is.EqualTo(ResultInfoHelper.ResultMessage));
            });
        }

        [Test]
        public void GetLicenseeByName_WhenCall_ValueReturnedCorrectly()
        {
            // Arrange
            DataAccess.GetObjectDb(Arg.Is(GetLicenseeByNameSp)).Returns(ObjectDb);
            var expected = new Licensee
            {
                Id = 100
            };
            ObjectDb.QueryEntity<Licensee>(Arg.Any<object>()).Returns(expected);

            // Action
            var result = DataAccess.GetLicenseeByName(string.Empty);

            // Assert
            Assert.That(result.Id, Is.EqualTo(expected.Id));
        }
    }
}