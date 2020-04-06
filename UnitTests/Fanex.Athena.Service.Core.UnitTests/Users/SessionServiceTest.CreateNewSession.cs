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
            const int LicenseeId = 1;
            var licensee = new Licensee { Id = 1, Name = "spondemo" };
            _licenseeDataAccess.GetLicenseeSettingById(DefaultUserId).Returns(licensee);

            // Action
            CreateDefaultNewSession();

            // Assert
            Assert.That(_sessionService.LicenseeSession.LicenseeName, Is.EqualTo("spondemo"));
        }

        [Test]
        public void CreateNewSession_LicenseeIdIsZero_LicenseeSessionIsNull()
        {
            // Action
            CreateDefaultNewSession();

            // Assert
            Assert.That(_sessionService.LicenseeSession, Is.Null);
        }
    }
}