namespace Fanex.Athena.Service.UserManagement.UnitTests
{
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Athena.Service.UserManagement.Service;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;

    [TestFixture]
    public class UserLogServiceTest
    {
        private ICommonRepository _commonRepository;

        [SetUp]
        public void Setup()
        {
            _commonRepository = Substitute.For<ICommonRepository>();
        }

        [TearDown]
        public void TearDown()
        {
            _commonRepository = null;
        }

        [Test]
        public void GetAllLoginLog_UserLoginLogListItem()
        {
            // Arrange
            var expectedResult = FakeHelper.CreateMany<UserLoginLog>();
            var criteria = FakeHelper.Create<GetAllLogUserLoginCriteria>();
            _commonRepository.FetchData<UserLoginLog>(criteria).Returns(expectedResult);
            var service = new UserLogService(_commonRepository);

            // Action
            var result = service.GetAllLoginLog(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetExecSPLog_LogExecSpListItem()
        {
            // Arrange
            var expectedResult = FakeHelper.CreateMany<LogExecSp>();
            var criteria = FakeHelper.Create<GetAllLogCriteria>();
            _commonRepository.FetchData<LogExecSp>(criteria).Returns(expectedResult);
            var service = new UserLogService(_commonRepository);

            // Action
            var result = service.GetExecSPLog(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void GetById_LogExecSpItem()
        {
            // Arrange
            var logId = 218;

            var expectedResult = new LogExecSp
            {
                Items = @"<root><xml path=""r"" /><row item=""UserId"" alias =""u"" /></root>",
                SubItems = @"<root><xml path=""r / z"" /><row item=""SettingKey"" alias =""k"" /><row item=""SettingValue"" alias =""v"" /></root>",
                Data = @"<r u=""1000142"" ><z k=""WLAnalysis_SinglePlayer"" v =""1"" /></r>",
                OldData = @"<r u=""1000142"" ><z k=""LimitDays"" v =""90"" /><z k=""WLAnalysis_SinglePlayer"" v =""1"" /></r>"
            };

            _commonRepository.FetchData<LogExecSp>(Arg.Any<GetByIdLogCriteria>()).Returns(new List<LogExecSp> { expectedResult });

            var service = new UserLogService(_commonRepository);

            // Action
            var result = service.GetById(logId);

            // Assert
            _commonRepository.Received(1).FetchData<LogExecSp>(Arg.Is<GetByIdLogCriteria>(_ => _.LogId == logId));
            Assert.IsInstanceOf<LogExecSp>(result);
        }
    }
}