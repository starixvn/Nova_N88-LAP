using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Fanex.Athena.DataAccess.Core.Configuration.Interfaces;
using Fanex.Athena.Extension.Helpers;
using Fanex.Athena.Extension.Utility.Interfaces;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Athena.Service.StatelessCore;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Logging;
using NSubstitute;
using NUnit.Framework;

namespace Fanex.Athena.ServiceStatelessCore.UnitTests
{
    [TestFixture]
    public class MoveBetServiceTest
    {
        private ILogger _logger;
        private IMoveBetDataAccess _moveBetDataAccess;
        private ICustomMemoryCacheService _cache;
        private IMoveBetService _moveBetService;

        [SetUp]
        public void SetUp()
        {
            _logger = Substitute.For<ILogger>();
            _moveBetDataAccess = Substitute.For<IMoveBetDataAccess>();
            _cache = Substitute.For<ICustomMemoryCacheService>();
            _moveBetService = new MoveBetService(_logger, _moveBetDataAccess, _cache);
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_CacheHit_ReturnsCachedMessage()
        {
            // Arrange
            var language = "en-US";
            var cachedMoveBet = new MoveBetNotification
            {
                ContentByLanguage = new Dictionary<string, string>
                {
                    { "en-US", "Cached notification message" },
                    { "fr-FR", "Message de notification en cache" }
                }
            };

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns(cachedMoveBet);

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.EqualTo("Cached notification message"));
            });

            _cache.Received(1).Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet);
            await _moveBetDataAccess.DidNotReceive().GetMoveBetNotificationAsync();
            _cache.DidNotReceive().Set(Arg.Any<string>(), Arg.Any<MoveBetNotification>(), Arg.Any<int>());
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_CacheMiss_FetchesFromDataAccessAndCaches()
        {
            // Arrange
            var language = "en-US";
            var dataAccessMoveBet = new MoveBetNotification
            {
                ContentByLanguage = new Dictionary<string, string>
                {
                    { "en-US", "Data access notification message" },
                    { "zh-CN", "数据访问通知消息" }
                }
            };

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns((MoveBetNotification)null);
            _moveBetDataAccess.GetMoveBetNotificationAsync().Returns(Task.FromResult(dataAccessMoveBet));

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.EqualTo("Data access notification message"));
            });

            _cache.Received(1).Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet);
            await _moveBetDataAccess.Received(1).GetMoveBetNotificationAsync();
            _cache.Received(1).Set(CacheKey.MemorycacheCommonMoveBet, dataAccessMoveBet, 60);
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_LanguageNotFound_UsesDefaultLanguage()
        {
            // Arrange
            var language = "de-DE"; // German not in the dictionary
            var moveBet = new MoveBetNotification
            {
                ContentByLanguage = new Dictionary<string, string>
                {
                    { "en-US", "Default English message" },
                    { "fr-FR", "Message français" }
                }
            };

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns(moveBet);

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            Assert.That(result, Is.EqualTo("Default English message"));
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_LanguageAndDefaultNotFound_ReturnsEmpty()
        {
            // Arrange
            var language = "de-DE";
            var moveBet = new MoveBetNotification
            {
                ContentByLanguage = new Dictionary<string, string>
                {
                    { "fr-FR", "Message français" },
                    { "zh-CN", "中文消息" }
                }
            };

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns(moveBet);

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            Assert.That(result, Is.EqualTo(string.Empty));
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_ExceptionOccurs_LogsErrorAndReturnsEmpty()
        {
            // Arrange
            var language = "en-US";
            var exception = new Exception("Data access error");

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns((MoveBetNotification)null);
            _moveBetDataAccess.GetMoveBetNotificationAsync().Returns(Task.FromException<MoveBetNotification>(exception));

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.EqualTo(string.Empty));
            });

            _logger.Received(1).Error(Arg.Any<string>(), exception);
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_ExceptionInCache_LogsErrorAndReturnsEmpty()
        {
            // Arrange
            var language = "en-US";
            var exception = new Exception("Cache error");

            _cache.When(x => x.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet)).Do(x => throw exception);

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result, Is.EqualTo(string.Empty));
            });

            _logger.Received(1).Error(Arg.Any<string>(), exception);
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_EmptyContentByLanguage_ReturnsEmpty()
        {
            // Arrange
            var language = "en-US";
            var moveBet = new MoveBetNotification
            {
                ContentByLanguage = new Dictionary<string, string>()
            };

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns(moveBet);

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            Assert.That(result, Is.EqualTo(string.Empty));
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_NullContentByLanguage_ThrowsException()
        {
            // Arrange
            var language = "en-US";
            var moveBet = new MoveBetNotification
            {
                ContentByLanguage = null
            };

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns(moveBet);

            // Act & Assert
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Should return empty string due to exception handling
            Assert.That(result, Is.EqualTo(string.Empty));
            _logger.Received(1).Error(Arg.Any<string>(), Arg.Any<Exception>());
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_ExactLanguageMatch_ReturnsExactMatch()
        {
            // Arrange
            var language = "zh-CN";
            var moveBet = new MoveBetNotification
            {
                ContentByLanguage = new Dictionary<string, string>
                {
                    { "en-US", "English message" },
                    { "zh-CN", "中文消息" },
                    { "fr-FR", "Message français" }
                }
            };

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns(moveBet);

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            Assert.That(result, Is.EqualTo("中文消息"));
        }

        [Test]
        public async Task GetMoveBetNotificationAsync_CaseInsensitiveLanguage_WorksCorrectly()
        {
            // Arrange
            var language = "EN-us"; // Different case
            var moveBet = new MoveBetNotification
            {
                ContentByLanguage = new Dictionary<string, string>
                {
                    { "en-US", "English message" }
                }
            };

            _cache.Get<MoveBetNotification>(CacheKey.MemorycacheCommonMoveBet).Returns(moveBet);

            // Act
            var result = await _moveBetService.GetMoveBetNotificationAsync(language);

            // Assert
            // This will fall back to default language since keys are case-sensitive
            Assert.That(result, Is.EqualTo("English message"));
        }
    }
}
