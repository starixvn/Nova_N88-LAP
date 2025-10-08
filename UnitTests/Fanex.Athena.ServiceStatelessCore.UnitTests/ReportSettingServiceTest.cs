using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fanex.Athena.DataAccess.Core.Common.Interfaces;
using Fanex.Athena.Extension.Utility;
using Fanex.Athena.Extension.Utility.Interfaces;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Athena.Service.StatelessCore;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using NSubstitute;
using NUnit.Framework;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    [TestFixture]
    public class ReportSettingServiceTest
    {
        private ICustomMemoryCacheService _cache;
        private IAppSettings _appSettings;
        private IReportViewSettingDataAccess _reportViewSettingDataAccess;
        private TestableReportSettingService _reportSettingService;

        [SetUp]
        public void SetUp()
        {
            _cache = Substitute.For<ICustomMemoryCacheService>();
            _appSettings = Substitute.For<IAppSettings>();
            _reportViewSettingDataAccess = Substitute.For<IReportViewSettingDataAccess>();
            _reportSettingService = new TestableReportSettingService(_cache, _appSettings, _reportViewSettingDataAccess);
        }

        [TearDown]
        public void TearDown()
        {
            _cache = null;
            _appSettings = null;
            _reportViewSettingDataAccess = null;
            _reportSettingService = null;
        }

        [Test]
        public void GetSetting_CachedSettings_ReturnsCachedResult()
        {
            // Arrange
            const string reportKey = "TestReport";
            const string licenseeName = "TestLicense";
            var cachedSettings = new List<ReportSetting>
            {
                new ReportSetting
                {
                    ReportKey = reportKey,
                    MinDateString = "today",
                    MaxDateString = "today",
                    TimeZone = 0
                }
            };

            _cache.Get<IEnumerable<ReportSetting>>("LRF_ReportSettings").Returns(cachedSettings);
            _appSettings.HistoryDate.Returns(DateTime.Today.AddDays(-30));
            _appSettings.MaxDate.Returns(DateTime.Today);

            // Act
            var result = _reportSettingService.GetSetting(reportKey, licenseeName);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.ReportKey, Is.EqualTo(reportKey));
                _cache.Received(1).Get<IEnumerable<ReportSetting>>("LRF_ReportSettings");
                _cache.DidNotReceive().Set(Arg.Any<string>(), Arg.Any<object>());
            });
        }

        [Test]
        public void GetSetting_NoCachedSettings_LoadsFromFileAndCaches()
        {
            // Arrange
            const string reportKey = "TestReport";
            const string licenseeName = "TestLicense";
            const string jsonContent = "[{\"ReportKey\":\"TestReport\",\"MinDateString\":\"today\",\"MaxDateString\":\"today\",\"TimeZone\":0}]";

            _cache.Get<IEnumerable<ReportSetting>>("LRF_ReportSettings").Returns((IEnumerable<ReportSetting>)null);
            _reportSettingService.SetMockJsonContent(jsonContent);
            _appSettings.HistoryDate.Returns(DateTime.Today.AddDays(-30));
            _appSettings.MaxDate.Returns(DateTime.Today);

            // Act
            var result = _reportSettingService.GetSetting(reportKey, licenseeName);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.ReportKey, Is.EqualTo(reportKey));
                _cache.Received(1).Set("LRF_ReportSettings", Arg.Any<IEnumerable<ReportSetting>>());
            });
        }

        [Test]
        public void GetSetting_NonExistentReportKey_ReturnsNull()
        {
            // Arrange
            const string reportKey = "NonExistentReport";
            const string licenseeName = "TestLicense";
            var cachedSettings = new List<ReportSetting>
            {
                new ReportSetting { ReportKey = "DifferentReport" }
            };

            _cache.Get<IEnumerable<ReportSetting>>("LRF_ReportSettings").Returns(cachedSettings);

            // Act
            var result = _reportSettingService.GetSetting(reportKey, licenseeName);

            // Assert
            Assert.That(result, Is.Null);
        }

        [Test]
        public void GetSetting_CaseInsensitiveReportKey_ReturnsCorrectSetting()
        {
            // Arrange
            const string reportKey = "testreport";
            const string licenseeName = "TestLicense";
            var cachedSettings = new List<ReportSetting>
            {
                new ReportSetting
                {
                    ReportKey = "TestReport",
                    MinDateString = "today",
                    MaxDateString = "today",
                    TimeZone = 0
                }
            };

            _cache.Get<IEnumerable<ReportSetting>>("LRF_ReportSettings").Returns(cachedSettings);
            _appSettings.HistoryDate.Returns(DateTime.Today.AddDays(-30));
            _appSettings.MaxDate.Returns(DateTime.Today);

            // Act
            var result = _reportSettingService.GetSetting(reportKey, licenseeName);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.ReportKey, Is.EqualTo("TestReport"));
            });
        }

        [Test]
        public async Task GetViewSetting_CachedViewSettings_ReturnsCachedResult()
        {
            // Arrange
            const string viewType = "TestView";
            var cachedViewSettings = new List<ReportViewSetting>
            {
                new ReportViewSetting { Type = viewType }
            };

            _cache.Get<IEnumerable<ReportViewSetting>>("LRF_ReportViewSettings_TestView").Returns(cachedViewSettings);

            // Act
            var result = await _reportSettingService.GetViewSetting(viewType);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.EqualTo(cachedViewSettings));
                _cache.Received(1).Get<IEnumerable<ReportViewSetting>>("LRF_ReportViewSettings_TestView");
                _cache.DidNotReceive().Set(Arg.Any<string>(), Arg.Any<object>());
                _reportViewSettingDataAccess.DidNotReceiveWithAnyArgs().GetReportViewSetting(Arg.Any<string>());
            });
        }

        [Test]
        public async Task GetViewSetting_NoCachedViewSettings_LoadsFromDataAccessAndCaches()
        {
            // Arrange
            const string viewType = "TestView";
            var viewSettings = new List<ReportViewSetting>
            {
                new ReportViewSetting { Type = viewType }
            };

            _cache.Get<IEnumerable<ReportViewSetting>>("LRF_ReportViewSettings_TestView").Returns((IEnumerable<ReportViewSetting>)null);
            _reportViewSettingDataAccess.GetReportViewSetting(viewType).Returns(Task.FromResult((IEnumerable<ReportViewSetting>)viewSettings));

            // Act
            var result = await _reportSettingService.GetViewSetting(viewType);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.EqualTo(viewSettings));
                _cache.Received(1).Set("LRF_ReportViewSettings_TestView", viewSettings);
                _reportViewSettingDataAccess.Received(1).GetReportViewSetting(viewType);
            });
        }

        [Test]
        public void GetSetting_WithUserDataRangeLimitation_AppliesLimitation()
        {
            // Arrange
            const string reportKey = "TestReport";
            const string licenseeName = "TestLicense";
            const int userDataRangeLimitation = 30;
            var cachedSettings = new List<ReportSetting>
            {
                new ReportSetting
                {
                    ReportKey = reportKey,
                    MinDateString = "2020-01-01",
                    MaxDateString = "today",
                    TimeZone = 0
                }
            };

            _cache.Get<IEnumerable<ReportSetting>>("LRF_ReportSettings").Returns(cachedSettings);
            _appSettings.HistoryDate.Returns(DateTime.Today.AddDays(-365));
            _appSettings.MaxDate.Returns(DateTime.Today);

            // Act
            var result = _reportSettingService.GetSetting(reportKey, licenseeName, userDataRangeLimitation);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.MinDate, Is.EqualTo(DateTime.Today.AddDays(-userDataRangeLimitation)));
            });
        }

        [Test]
        public void GetSetting_WithLimitRecentMonths_AppliesMonthsLimit()
        {
            // Arrange
            const string reportKey = "TestReport";
            const string licenseeName = "TestLicense";
            var cachedSettings = new List<ReportSetting>
            {
                new ReportSetting
                {
                    ReportKey = reportKey,
                    MinDateString = "2020-01-01",
                    MaxDateString = "today",
                    LimitRecentMonths = 3,
                    TimeZone = 0
                }
            };

            _cache.Get<IEnumerable<ReportSetting>>("LRF_ReportSettings").Returns(cachedSettings);
            _appSettings.HistoryDate.Returns(DateTime.Today.AddDays(-365));
            _appSettings.MaxDate.Returns(DateTime.Today);

            // Act
            var result = _reportSettingService.GetSetting(reportKey, licenseeName);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                var expectedMinDate = new DateTime(DateTime.Today.AddMonths(-2).Year, DateTime.Today.AddMonths(-2).Month, 1);
                Assert.That(result.MinDate.Date, Is.GreaterThanOrEqualTo(expectedMinDate));
            });
        }

        [Test]
        public void GetSetting_WithLimitRecentDays_AppliesDaysLimit()
        {
            // Arrange
            const string reportKey = "TestReport";
            const string licenseeName = "TestLicense";
            var cachedSettings = new List<ReportSetting>
            {
                new ReportSetting
                {
                    ReportKey = reportKey,
                    MinDateString = "2020-01-01",
                    MaxDateString = "today",
                    LimitRecentDays = 7,
                    TimeZone = 0
                }
            };

            _cache.Get<IEnumerable<ReportSetting>>("LRF_ReportSettings").Returns(cachedSettings);
            _appSettings.HistoryDate.Returns(DateTime.Today.AddDays(-365));
            _appSettings.MaxDate.Returns(DateTime.Today);

            // Act
            var result = _reportSettingService.GetSetting(reportKey, licenseeName);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.Not.Null);
                Assert.That(result.MinDate.Date, Is.GreaterThanOrEqualTo(DateTime.Today.AddDays(-7)));
            });
        }
    }

    // Testable version that allows mocking file content
    public class TestableReportSettingService : ReportSettingService
    {
        private string _mockJsonContent;

        public TestableReportSettingService(
            ICustomMemoryCacheService cache,
            IAppSettings appSettings,
            IReportViewSettingDataAccess reportViewSettingDataAccess)
            : base(cache, appSettings, reportViewSettingDataAccess)
        {
        }

        public void SetMockJsonContent(string content)
        {
            _mockJsonContent = content;
        }

        protected internal override string GetSettingFileContent()
        {
            return _mockJsonContent ?? "[]";
        }
    }
}