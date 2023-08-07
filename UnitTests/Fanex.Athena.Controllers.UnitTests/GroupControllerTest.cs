namespace Fanex.Athena.Controllers.UnitTests
{
    using Fanex.Athena.Controllers.Account;
    using Fanex.Athena.Controllers.Base.UnitTests;
    using NSubstitute;
    using NUnit.Framework;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using System.Web.Mvc;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using System.Collections.Generic;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using System.Web;
    using System.Net;
    using System.Web.Routing;

    [TestFixture]
    public class GroupControllerTest : CultureBaseControllerHelperTest
    {
        private IGroupService _groupService;
        private IUserService _userService;
        private IFunctionService _functionService;
        private ISessionService _sessionServiceInstance;

        [SetUp]
        public void SetUp()
        {
            _groupService = Substitute.For<IGroupService>();
            _userService = Substitute.For<IUserService>();
            _functionService = Substitute.For<IFunctionService>();
            _sessionServiceInstance = Substitute.For<ISessionService>();
        }

        [TearDown]
        public void TearDown()
        {
            _groupService = null;
            _userService = null;
            _functionService = null;
            _sessionServiceInstance = null;
        }

        [Test]
        public void AddNew_ReturnActionResult()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Action
                var actionResult = controller.AddNew() as ViewResult;

                // Assert
                Assert.IsNotNull(actionResult, "The result is a view result");
            }
        }

        [Test]
        public void Manage_HasPermission_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                GroupData group = new GroupData() { GroupId = 1 };
                List<GroupData> groups = new List<GroupData>() { group };
                _groupService.GetAllWithNumOfUser(Arg.Any<string>(), Arg.Any<string>()).Returns(groups);

                // Action
                var result = controller.Manage(1, 20, "") as ViewResult;

                //Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Group/Manage.cshtml"));
            }
        }

        [Test]
        public void Edit_ByIdHasGroup_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                GroupData group = new GroupData() { GroupId = 1 };
                _groupService.Get(Arg.Any<GetByIdGroupCriteria>()).Returns(group);

                // Action
                var result = controller.Edit(1) as ViewResult;

                //Assert
                Assert.IsNotNull(result, "The result is a view result");
            }
        }

        [Test]
        public void Edit_ByIdGroupIsNull_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                GroupData group = null;
                _groupService.Get(Arg.Any<GetByIdGroupCriteria>()).Returns(group);

                // Action
                var result = controller.Edit(1) as RedirectToRouteResult;

                //Assert
                Assert.AreEqual("Manage", result.RouteValues["action"]);
            }
        }

        [Test]
        public void Activate_ByIdSuccessful_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                var fakeRequest = Substitute.For<HttpRequestBase>();
                var fakeContext = Substitute.For<HttpContextBase>();
                fakeRequest.Headers.Returns(new WebHeaderCollection { { "X-Requested-With", "XMLHttpRequest" } });
                fakeContext.Request.Returns(fakeRequest);
                controller.ControllerContext = new ControllerContext(fakeContext, new RouteData(), controller);
                SetUpDefaultFakeData();
                _groupService.ExecuteNonQuery(Arg.Any<UpdateStatusGroupCriteria>()).Returns(new CommandResult { Error = 0 });

                // Action
                var result = controller.Activate(1, true) as JsonResult;

                //Assert
                Assert.AreEqual(Constant.Ok, result.Data);
            }
        }

        [Test]
        public void Activate_ByIdError_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                var fakeRequest = Substitute.For<HttpRequestBase>();
                var fakeContext = Substitute.For<HttpContextBase>();
                fakeRequest.Headers.Returns(new WebHeaderCollection { { "X-Requested-With", "XMLHttpRequest" } });
                fakeContext.Request.Returns(fakeRequest);
                controller.ControllerContext = new ControllerContext(fakeContext, new RouteData(), controller);
                SetUpDefaultFakeData();
                _groupService.ExecuteNonQuery(Arg.Any<UpdateStatusGroupCriteria>()).Returns(new CommandResult { Error = 1 });

                // Action
                var result = controller.Activate(1, true);

                //Assert
                Assert.That(result, Is.InstanceOf<EmptyResult>());
            }
        }

        [Test]
        public void AssignPermission_ByCriteria_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                AssignFunctionGroupCriteria criteria = new AssignFunctionGroupCriteria()
                {
                    FuncHost = new int[] { 2 },
                    FuncRead = new int[] { 1 }
                };
                SetUpDefaultFakeData();
                List<FunctionPolicy> listGroupFuncPolicy = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1, Function = new AccFunction() { Id = 1 } } };
                _functionService.GetByGroupAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(listGroupFuncPolicy);
                List<AccFunction> listFunc = new List<AccFunction>() { new AccFunction() { Id = 2 } };
                _functionService.GetBySiteInHierarchy(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<bool>()).Returns(listFunc);
                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _groupService.ExecuteNonQuery(Arg.Any<AssignFunctionGroupCriteria>()).Returns(expectedResult);

                // Action
                var result = controller.AssignPermission(criteria) as ViewResult;

                //Assert
                Assert.AreEqual(result.Model, criteria);
            }
        }

        [Test]
        public void AssignPermission_PolicyHostNoFunctionId_RedirectToActionError()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                AssignFunctionGroupCriteria criteria = new AssignFunctionGroupCriteria()
                {
                    FuncHost = new int[] { 2 },
                    FuncRead = new int[] { 1 }
                };
                SetUpDefaultFakeData();

                List<FunctionPolicy> listGroupFuncPolicy = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1, Function = new AccFunction() { Id = 1 } } };
                _functionService.GetByGroupAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(listGroupFuncPolicy);

                List<AccFunction> listFunc = new List<AccFunction>() { new AccFunction() { Id = 3 } };
                _functionService.GetBySiteInHierarchy(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<bool>()).Returns(listFunc);

                // Action
                var result = controller.AssignPermission(criteria) as RedirectToRouteResult;

                //Assert
                Assert.AreEqual("Error", result.RouteValues["action"]);
                Assert.AreEqual("Common", result.RouteValues["controller"]);
            }
        }

        [Test]
        public void AssignPermission_GroupPolicyIsNotSameUserPolicy_RedirectToActionError()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                AssignFunctionGroupCriteria criteria = new AssignFunctionGroupCriteria()
                {
                    FuncHost = new int[] { 2 },
                    FuncRead = new int[] { 1 }
                };
                SetUpDefaultFakeData();

                List<FunctionPolicy> listGroupFuncPolicy = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 0, Function = new AccFunction() { Id = 3 } } };
                _functionService.GetByGroupAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(listGroupFuncPolicy);

                List<AccFunction> listFunc = new List<AccFunction>() { new AccFunction() { Id = 2 } };
                _functionService.GetBySiteInHierarchy(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<bool>()).Returns(listFunc);

                List<FunctionPolicy> listCurrentUserFuncPolicy = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 0, Function = new AccFunction() { Id = 2 } } };
                _functionService.GetByUserAndSiteIncludeGroup(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(listCurrentUserFuncPolicy);

                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _groupService.ExecuteNonQuery(Arg.Any<AssignFunctionGroupCriteria>()).Returns(expectedResult);

                // Action
                var result = controller.AssignPermission(criteria) as RedirectToRouteResult;

                //Assert
                Assert.AreEqual("Error", result.RouteValues["action"]);
                Assert.AreEqual("Common", result.RouteValues["controller"]);
            }
        }

        [Test]
        public void UnassignPermission_ByGroupIdFunctionId_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                StubUserSessionData(DefaultUserSession);
                GroupData group = new GroupData() { GroupId = 1, GroupName = "Mark" };
                _groupService.Get(Arg.Any<GetByIdGroupCriteria>()).Returns(group);
                List<FunctionPolicy> listGroupFuncPolicy = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1, Function = new AccFunction() { Id = 1 } } };
                _functionService.GetByGroupAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(listGroupFuncPolicy);
                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _groupService.ExecuteNonQuery(Arg.Any<AssignFunctionGroupCriteria>()).Returns(expectedResult);

                // Action
                var result = controller.UnassignPermission(1, 1) as JsonResult;

                //Assert
                Assert.AreEqual(expectedResult, result.Data);
            }
        }

        [Test]
        public void AssignPermission_ById_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                GroupData group = new GroupData() { GroupId = 1 };
                _groupService.Get(Arg.Any<GetByIdGroupCriteria>()).Returns(group);

                // Action
                var result = controller.AssignPermission(1) as ViewResult;

                //Assert
                Assert.IsNotNull(result, "The result is da view result");
            }
        }

        [Test]
        public void GroupInfo_ById_ReturnCorrectView()
        {
            // Setup
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                GroupData group = new GroupData() { GroupId = 1 };
                _groupService.Get(Arg.Any<GetByIdGroupCriteria>()).Returns(group);

                // Action
                var result = controller.GroupInfo(1) as ViewResult;

                //Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Group/GroupInfo.cshtml"));
            }
        }

        private GroupController CreateController()
        {
            return new GroupController(_groupService, _userService, _functionService)
            {
                ControllerContext = ControllerContext,
                SessionServiceInstance = SessionService,
                AppSettingInstance = AppSettings
            };
        }
    }
}