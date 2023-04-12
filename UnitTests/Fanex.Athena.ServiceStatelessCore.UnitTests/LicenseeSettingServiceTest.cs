namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    using System.Collections.Generic;
    using Extension.Utility.Interfaces;
    using Fanex.Athena.DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Service.StatelessCore;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using Model.Core.DTO.Configuration;
    using NSubstitute;
    using NUnit.Framework;

    [TestFixture]
    public class LicenseeSettingServiceTest
    {
        private LicenseeSettingService _licenseeSettingService;
        private ICustomMemoryCacheService _cache;
        private ILicenseeDataAccess _licenseeDataAccess;

        [SetUp]
        public void SetUp()
        {
            _cache = Substitute.For<ICustomMemoryCacheService>();
            _licenseeDataAccess = Substitute.For<ILicenseeDataAccess>();

            _licenseeSettingService = Substitute.ForPartsOf<LicenseeSettingService>(_cache, _licenseeDataAccess);
        }

        [Test]
        public void GetLicenseeInfo_CacheContainLicenseeName_ReturnsLicensee()
        {
            // Arrange
            const string licenseeName = "Anh";
            const string cacheKey = "Lrf_LicenseeSelBySiteName_" + licenseeName;
            var licensee = new Licensee();
            _cache.Get<Licensee>(cacheKey).Returns(licensee);

            // Action
            var result = _licenseeSettingService.GetLicenseeInfo(licenseeName);

            // Assert
            Assert.That(result, Is.EqualTo(licensee));
        }

        [Test]
        public void GetLicenseeInfo_CacheNotContainLicenseeNameAndValidLicenseeName_ReturnsLicensee()
        {
            // Arrange
            const string licenseeName = "Anh";
            const string cacheKey = "Lrf_LicenseeSelBySiteName_" + licenseeName;
            _cache.Get<Licensee>(cacheKey).Returns((Licensee)null);
            var licensee = new Licensee();
            _licenseeDataAccess.GetLicenseeByName(licenseeName).Returns(licensee);

            // Action
            var result = _licenseeSettingService.GetLicenseeInfo(licenseeName);

            // Assert
            Assert.That(result, Is.EqualTo(licensee));
        }

        [Test]
        public void GetLicenseeInfo_CacheNotContainLicenseeNameAndInvalidLicenseeName_ReturnsNull()
        {
            // Arrange
            const string licenseeName = "Anh";
            const string cacheKey = "Lrf_LicenseeSelBySiteName_" + licenseeName;
            _cache.Get<Licensee>(cacheKey).Returns((Licensee)null);
            _licenseeDataAccess.GetLicenseeByName(licenseeName).Returns((Licensee)null);

            // Action
            var result = _licenseeSettingService.GetLicenseeInfo(licenseeName);

            // Assert
            Assert.IsNull(result);
        }
    }
}