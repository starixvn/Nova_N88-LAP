namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    using System;
    using System.Collections.Generic;

    using Extension.Utility;
    using Extension.Utility.Interfaces;

    using Fanex.Athena.Service.StatelessCore;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    using Model.Core.DTO.Configuration;

    using Newtonsoft.Json;

    using NSubstitute;

    using NUnit.Framework;

    using UnitTest.Common.Helpers;

    [TestFixture]
    public class ReportSettingServiceTest
    {
        private ReportSettingService _reportSettingService;

        private ICustomMemoryCacheService _cache;

        private IAppSettings _appSettings;

        private ILicenseeSettingService _fakeLicenseeSettingService;

        private const string LicenseeName = "12Bet";

        [SetUp]
        public void SetUp()
        {
            _cache = Substitute.For<ICustomMemoryCacheService>();
            _appSettings = Substitute.For<IAppSettings>();
            _fakeLicenseeSettingService = Substitute.For<ILicenseeSettingService>();
            _reportSettingService = Substitute.ForPartsOf<ReportSettingService>(
                _cache,
                _appSettings,
                _fakeLicenseeSettingService
                );
            _reportSettingService.When(x => x.GetSettingFileContent()).DoNotCallBase();
        }

        [TearDown]
        public void TearDown()
        {
            _cache = null;
            _appSettings = null;
            _fakeLicenseeSettingService = null;
            _reportSettingService = null;
        }

        [Test]
        public void GetSetting_FileContentEmpty_ReturnNull()
        {
            // Arrange
            var reportKey = FakeHelper.Create<string>();

            _reportSettingService.GetSettingFileContent().Returns(string.Empty);
            _cache.Get<IEnumerable<ReportSetting>>(string.Empty).ReturnsForAnyArgs((IEnumerable<ReportSetting>)null);

            // Action
            var result = _reportSettingService.GetSetting(reportKey, LicenseeName);

            // Assert
            Assert.That(result, Is.Null);
        }

        [Test]
        public void GetSetting_FileContentHasData_ReturnCorrectResult()
        {
            // Arrange
            var reportKey = FakeHelper.Create<string>();

            var expectedResult = new List<ReportSetting> { new ReportSetting { ReportKey = reportKey } };
            var jsonContent = JsonConvert.SerializeObject(expectedResult);

            _reportSettingService.GetSettingFileContent().Returns(jsonContent);
            _cache.Get<IEnumerable<ReportSetting>>(string.Empty).ReturnsForAnyArgs((IEnumerable<ReportSetting>)null);

            // Action
            var result = _reportSettingService.GetSetting(reportKey, LicenseeName);

            // Assert
            Assert.That(result.ReportKey, Is.EqualTo(reportKey));
        }

        [Test]
        public void GetSetting_CacheNotContainData_SetCacheWithCorrectData()
        {
            // Arrange
            var reportKey = FakeHelper.Create<string>();
            _reportSettingService.GetSettingFileContent().Returns($@"[{{ ""ReportKey"": ""{reportKey}"" }}]");
            var fakeData = new[]
            {
                new ReportSetting { ReportKey = reportKey }
            };

            _cache.Get<IEnumerable<ReportSetting>>(string.Empty).ReturnsForAnyArgs((IEnumerable<ReportSetting>)null);

            // Action
            _reportSettingService.GetSetting(reportKey, LicenseeName);

            // Assert
            _cache.Received(1).Set(
                Arg.Any<string>(),
                Arg.Is<IEnumerable<ReportSetting>>(x =>
                    ObjectHelper.ToJson(x) == ObjectHelper.ToJson(fakeData)));
        }

        [Test]
        public void GetSetting_CacheContainData_ReturnSettingFromCache()
        {
            // Arrange
            var reportKey = FakeHelper.Create<string>();
            _reportSettingService.GetSettingFileContent().Returns(string.Empty);

            var fakeData = new[]
            {
                new ReportSetting { ReportKey = reportKey }
            };
            _cache.Get<IEnumerable<ReportSetting>>(string.Empty).ReturnsForAnyArgs(fakeData);

            // Action
            var result = _reportSettingService.GetSetting(reportKey, LicenseeName);

            // Assert
            Assert.That(result, Is.EqualTo(fakeData[0]));
        }
    }
}