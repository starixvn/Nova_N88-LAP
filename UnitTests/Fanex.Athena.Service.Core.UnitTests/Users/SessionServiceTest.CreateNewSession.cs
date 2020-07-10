namespace Fanex.Athena.Service.Core.UnitTests.Users
{
    using Model.Core.DTO.Common;

    using NSubstitute;

    using NUnit.Framework;

    [TestFixture]
    public partial class SessionServiceTest
    {
        [Test]
        public void CreateNewSession_WhenCall_UserSessionIsCreatedProperly()
        {
            // Action
            CreateDefaultNewSession();

            // Assert
            Assert.That(_sessionService.UserSession.UserId, Is.EqualTo(DefaultUserId));
        }

        [Test]
        public void CreateNewSession_WhenCall_LicenseeSessionIsCreatedProperly()
        {
            // Arrange
            const int LicenseeId = 0;
            var licensee = new Licensee { Id = LicenseeId, Name = "n88" };
            _licenseeDataAccess.GetLicenseeSettingById(LicenseeId).Returns(licensee);

            // Action
            CreateDefaultNewSession();

            // Assert
            Assert.That(_sessionService.LicenseeSession.LicenseeName, Is.EqualTo("n88"));
        }
    }
}