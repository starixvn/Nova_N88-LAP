namespace Fanex.Athena.Controllers.UnitTests
{
    using System.Collections.Generic;
    using System.Web;
    using System.Web.Mvc;
    using System.Web.Routing;
    using Base.UnitTests;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Enum;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using Fanex.N88.Core.Configuration;
    using Moq;
    using NSubstitute;

    using NUnit.Framework;

    [TestFixture]
    public partial class LogControllerTest : CultureBaseControllerHelperTest
    {
        private IUserLogService _userLogService;
        private IFunctionService _functionService;

        [SetUp]
        public void SetUp()
        {
            _userLogService = Substitute.For<IUserLogService>();
            _functionService = Substitute.For<IFunctionService>();
            SetUpDefaultFakeData();
        }

        [TearDown]
        public void TearDown()
        {
            _userLogService = null;
            _functionService = null;
        }

        [Test]
        public void LogUserLogin_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.LogUserLogin() as ViewResult;

                // Assert
                StringAssert.Contains("Log/UserLoginLog.cshtml", result.ViewName);
            }
        }

        [Test]
        public void LogExecSp_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.LogExecSp() as ViewResult;

                // Assert
                StringAssert.Contains("Log/ExecSPLog.cshtml", result.ViewName);
            }
        }

        [Test]
        public void GetLogInsertDetail_WhenCall_ReturnCorrectLog()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var id = 1;
                var request = new Mock<HttpRequestBase>();
                request.SetupGet(x => x.Headers).Returns(
                    new System.Net.WebHeaderCollection { { "X-Requested-With", "XMLHttpRequest" } });

                var context = new Mock<HttpContextBase>();
                context.SetupGet(x => x.Request).Returns(request.Object);
                controller.ControllerContext = new ControllerContext(context.Object, new RouteData(), controller);
                var expectedResult = FakeHelper.Create<LogExecSp>();
                _userLogService.GetById(id).Returns(expectedResult);

                // Action
                var result = controller.GetLogInsertDetail(id) as ViewResult;

                // Assert
                Assert.That(result.Model, Is.EqualTo(expectedResult));
            }
        }

        [Test]
        public void N88UserInsert_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var log = new LogExecSp
                {
                    ActionId = (int)LogAction.N88_User_Insert,
                    Data = @"<ROOT Username=""seltest1"" GroupName=""Test1"" UserId=""1000144""/>"
                };

                // Action
                var result = controller.N88UserInsert(log);

                // Assert
                StringAssert.Contains("Log/_N88LogInsert.cshtml", result.ViewName);
            }
        }

        [Test]
        public void N88UpdateSite_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var log = new LogExecSp
                {
                    Data = @"<ROOT UserId=""1"" SiteId=""1"" SiteName=""Test"" Level=""1"" IsActive=""1"" IsNeverExpired=""1"" ExpiredDate=""1/1/2011""/>",
                    OldData = @"<ROOT UserId=""1"" SiteId=""1"" SiteName=""Test"" Level=""1"" IsActive=""2"" IsNeverExpired=""2"" ExpiredDate=""2/2/2011""/>"
                };

                // Action
                var result = controller.N88UpdateSite(log);

                // Assert
                StringAssert.Contains("Log/_N88_Update_Site.cshtml", result.ViewName);
            }
        }

        [Test]
        public void N88GroupInsert_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var log = new LogExecSp
                {
                    ActionId = (int)LogAction.N88_Group_Insert,
                    Data = @"<ROOT GroupName=""test"" Description=""test"" IsActive=""1"" />",
                    OldData = @"<ROOT GroupName=""test"" Description=""test"" IsActive=""0"" />"
                };

                // Action
                var result = controller.N88GroupInsert(log);

                // Assert
                StringAssert.Contains("Log/_N88LogInsert.cshtml", result.ViewName);
            }
        }

        [Test]
        public void N88GroupUpdate_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var log = new LogExecSp
                {
                    ActionId = (int)LogAction.N88_Group_Update,
                    Data = @"<ROOT GroupName=""test"" Description=""test"" IsActive=""1"" />",
                    OldData = @"<ROOT GroupName=""test"" Description=""test"" IsActive=""0"" />"
                };

                // Action
                var result = controller.N88GroupUpdate(log);

                // Assert
                StringAssert.Contains("Log/_N88LogUpdate.cshtml", result.ViewName);
            }
        }

        [Test]
        public void N88GroupUpdateStatus_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var log = new LogExecSp
                {
                    ActionId = (int)LogAction.N88_Group_UpdateStatus,
                    Data = @"<ROOT GroupName=""test"" Description=""test"" IsActive=""1"" />",
                    OldData = @"<ROOT GroupName=""test"" Description=""test"" IsActive=""0"" />"
                };

                // Action
                var result = controller.N88GroupUpdateStatus(log);

                // Assert
                StringAssert.Contains("Log/_N88LogUpdate.cshtml", result.ViewName);
            }
        }

        [Test]
        public void N88UserUpdate_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var log = new LogExecSp
                {
                    ActionId = (int)LogAction.N88_User_Update,
                    Data = @"<ROOT GroupName=""test"" FirstName=""test"" LastName=""test"" Email=""test@abc.com"" />",
                    OldData = @"<ROOT GroupName=""test"" FirstName=""test old"" LastName=""test old"" Email=""test@abc.com"" />"
                };

                // Action
                var result = controller.N88UserUpdate(log);

                // Assert
                StringAssert.Contains("Log/_N88LogUpdate.cshtml", result.ViewName);
            }
        }

        [Test]
        public void N88AssignPermission_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var log = new LogExecSp
                {
                    ActionId = (int)LogAction.N88_Group_AssignFunction,
                    Data = @"<ROOT UserId=""1000142"" SiteId=""3"" Value=""&amp;lt;ROW&amp;gt;&#xD;&#xA; &amp;lt;ITEM Policy=&amp;quot;0&amp;quot; FunctionId=&amp;quot;263&amp;quot; /&amp;gt;&#xD;&#xA;&amp;lt;/ROW&amp;gt;"" />",
                    OldData = @"<ROOT UserId=""1000142"" SiteId=""3"" Value=""&amp;lt;ROW&amp;gt;&#xD;&#xA; &amp;lt;ITEM Policy=&amp;quot;0&amp;quot; FunctionId=&amp;quot;263&amp;quot; /&amp;gt;&#xD;&#xA;&amp;lt;/ROW&amp;gt;"" />"
                };
                _functionService.GetBySiteInHierarchy(Arg.Any<int>(), Arg.Any<string>(), true).Returns(new List<AccFunction>());

                // Action
                var result = controller.N88AssignPermission(log);

                // Assert
                StringAssert.Contains("Log/_N88_Assign_Permission.cshtml", result.ViewName);
            }
        }

        [Test]
        public void N88UserUpdateSetting_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                //Arrange
                var log = new LogExecSp
                {
                    Data = @"<ROOT UserId=""1000142"" Value=""&amp;lt;ROW&amp;gt;&#xD;&#xA;  &amp;lt;ITEM SettingKey=&amp;quot;WLAnalysis_SinglePlayer&amp;quot; SettingValue=&amp;quot;1&amp;quot; /&amp;gt;&#xD;&#xA;&amp;lt;/ROW&amp;gt;"" />",
                    OldData = @"<ROOT UserId=""1000142"" Value=""&amp;lt;ROW&amp;gt;&#xD;&#xA;  &amp;lt;ITEM SettingKey=&amp;quot;WLAnalysis_SinglePlayer&amp;quot; SettingValue=&amp;quot;0&amp;quot; /&amp;gt;&#xD;&#xA;&amp;lt;/ROW&amp;gt;"" />"
                };
                _functionService.GetBySiteInHierarchy(Arg.Any<int>(), Arg.Any<string>(), true).Returns(new List<AccFunction>());

                // Action
                var result = controller.N88UserUpdateSetting(log);

                // Assert
                StringAssert.Contains("Log/_N88_User_Update_Setting.cshtml", result.ViewName);
            }
        }

        private LogController CreateController()
        {
            return new LogController(_userLogService, _functionService)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService,
                AppSettingInstance = AppSettings,
                N88Settings = new N88Settings()
            };
        }
    }
}