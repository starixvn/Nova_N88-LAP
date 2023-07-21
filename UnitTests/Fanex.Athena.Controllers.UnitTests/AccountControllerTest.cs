namespace Fanex.Athena.Controllers.UnitTests
{
    using Fanex.Athena.Controllers.Account;
    using Fanex.Athena.Controllers.Base.UnitTests;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using Fanex.Athena.UnitTest.Common.NUnitExtensions;
    using Fanex.N88.Core.Configuration;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;
    using System.IO;
    using System.Text;
    using System.Web.Mvc;

    [TestFixture]
    public class AccountControllerTest : CultureBaseControllerHelperTest
    {
        private IFunctionService _functionService;
        private IUserService _userService;
        private IFileManagerService _fileManager;

        [SetUp]
        public void SetUp()
        {
            _userService = Substitute.For<IUserService>();
            _functionService = Substitute.For<IFunctionService>();
            _fileManager = Substitute.For<IFileManagerService>();
        }

        [TearDown]
        public void TearDown()
        {
            _userService = null;
            _functionService = null;
            _fileManager = null;
        }

        [Test]
        public void Manage_WhenCall_ReturnManageView()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();

                // Action
                var result = controller.Manage() as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/Manage.cshtml"));
            }
        }

        [Test]
        public void UserInfo_WhenCall_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                User expectedUser = new User()
                {
                    Username = "mark",
                    Password = "123"
                };
                _userService.GetById(Arg.Any<int>()).Returns(expectedUser);

                // Action
                var result = controller.UserInfo(1) as ViewResult;

                // Assert
                Assert.AreEqual(expectedUser, result.Model);
            }
        }

        [Test]
        public void UpdateStatus_IsSuccessful_ReturnResultOk()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _userService.UpdateSite(Arg.Any<UpdateSiteToUserCriteria>()).Returns(expectedResult);

                // Action
                var result = controller.UpdateStatus(Arg.Any<int>(), Arg.Any<bool>()) as JsonResult;

                // Assert
                Assert.AreEqual(result.Data, Constant.Ok);
            }
        }

        [Test]
        public void UpdateStatus_IsError_ReturnEmptyResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                CommandResult expectedResult = new CommandResult()
                {
                    Error = 1,
                    Message = ""
                };
                _userService.UpdateSite(Arg.Any<UpdateSiteToUserCriteria>()).Returns(expectedResult);

                // Action
                var result = controller.UpdateStatus(Arg.Any<int>(), Arg.Any<bool>());

                // Assert
                Assert.That(result, Is.InstanceOf<EmptyResult>());
            }
        }

        [Test]
        public void NewUser_WhenCall_ReturnNewUserView()
        {
            using (var controller = CreateController())
            {
                // Arrange
                string fakeFileContents = "[\r\n  {\r\n    \"Text\": \"EUR\",\r\n    \"Value\": \"6\",\r\n    \"Selected\": \"true\"\r\n  }\r\n]";
                byte[] fakeFileBytes = Encoding.UTF8.GetBytes(fakeFileContents);
                MemoryStream fakeMemoryStream = new MemoryStream(fakeFileBytes);
                _fileManager.StreamReader(Arg.Any<string>()).Returns(new StreamReader(fakeMemoryStream));

                // Action
                var result = controller.NewUser() as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/NewUser.cshtml"));
            }
        }

        [Test]
        public void NewUser_WhenCall_UserNameExist_ReturnNewUserViewWithError()
        {
            using (var controller = CreateController())
            {
                // Arrange
                string fakeFileContents = "[\r\n  {\r\n    \"Text\": \"EUR\",\r\n    \"Value\": \"6\",\r\n    \"Selected\": \"true\"\r\n  }\r\n]";
                byte[] fakeFileBytes = Encoding.UTF8.GetBytes(fakeFileContents);
                MemoryStream fakeMemoryStream = new MemoryStream(fakeFileBytes);
                _fileManager.StreamReader(Arg.Any<string>()).Returns(new StreamReader(fakeMemoryStream));

                InsertCustCriteria criteria = new InsertCustCriteria()
                {
                    Username = "mark"
                };
                _userService.CheckUsernameExist(Arg.Any<string>(), Arg.Any<bool>(), Arg.Any<int>()).Returns(true);

                // Action
                var result = controller.NewUser(criteria) as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/NewUser.cshtml"));
                Assert.IsTrue(result.ViewData.ModelState["UserName"].Errors.Count > 0);
                Assert.AreEqual(result.ViewData.ModelState["UserName"].Errors[0].ErrorMessage, string.Format("Duplicate User {0}", criteria.Username));
            }
        }

        [Test]
        public void NewUser_WhenCall_InsertUserNameIsError_ReturnNewUserView()
        {
            using (var controller = CreateController())
            {
                // Arrange
                string fakeFileContents = "[\r\n  {\r\n    \"Text\": \"EUR\",\r\n    \"Value\": \"6\",\r\n    \"Selected\": \"true\"\r\n  }\r\n]";
                byte[] fakeFileBytes = Encoding.UTF8.GetBytes(fakeFileContents);
                MemoryStream fakeMemoryStream = new MemoryStream(fakeFileBytes);
                _fileManager.StreamReader(Arg.Any<string>()).Returns(new StreamReader(fakeMemoryStream));

                SetUpDefaultFakeData();
                InsertCustCriteria criteria = new InsertCustCriteria()
                {
                    Username = "mark",
                    UserPwd = "123"
                };
                _userService.CheckUsernameExist(Arg.Any<string>(), Arg.Any<bool>(), Arg.Any<int>()).Returns(false);

                CommandResult expectedResult = new CommandResult()
                {
                    Error = 1,
                    Message = ""
                };
                _userService.Insert(criteria).Returns(expectedResult);

                // Action
                var result = controller.NewUser(criteria) as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/NewUser.cshtml"));
            }
        }

        [Test]
        public void NewUser_WhenCall_InsertUserNameIsSuccessful_ReturnNewUserView()
        {
            using (var controller = CreateController())
            {
                // Arrange
                string fakeFileContents = "[\r\n  {\r\n    \"Text\": \"EUR\",\r\n    \"Value\": \"6\",\r\n    \"Selected\": \"true\"\r\n  }\r\n]";
                byte[] fakeFileBytes = Encoding.UTF8.GetBytes(fakeFileContents);
                MemoryStream fakeMemoryStream = new MemoryStream(fakeFileBytes);
                _fileManager.StreamReader(Arg.Any<string>()).Returns(new StreamReader(fakeMemoryStream));

                SetUpDefaultFakeData();
                InsertCustCriteria criteria = new InsertCustCriteria()
                {
                    Username = "mark",
                    UserPwd = "123",
                    UserId = 1
                };
                _userService.CheckUsernameExist(Arg.Any<string>(), Arg.Any<bool>(), Arg.Any<int>()).Returns(false);

                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _userService.Insert(criteria).Returns(expectedResult);
                _userService.AssignSite(Arg.Any<AssignSiteUserCriteria>()).Returns(expectedResult);

                // Action
                var result = controller.NewUser(criteria) as ViewResult;

                // Assert
                Assert.IsTrue(result.ViewBag.Success);
                Assert.AreEqual(result.ViewBag.UserId, criteria.UserId);
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/NewUser.cshtml"));
            }
        }

        [Test]
        public void Edit_WhenCall_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                User expectedUser = new User()
                {
                    Username = "mark",
                    Password = "123"
                };
                UpdateCustCriteria expectedResult = new UpdateCustCriteria
                {
                    Username = "mark"
                };
                _userService.GetById(Arg.Any<int>()).Returns(expectedUser);

                // Action
                var result = controller.Edit(1) as ViewResult;

                // Assert
                Assert.That(result.Model, Tobe.SameProperties(expectedResult));
            }
        }

        [Test]
        public void Edit_WhenCall_UpdateIsSuccessful_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                UpdateCustCriteria criteria = new UpdateCustCriteria()
                {
                    Username = "mark"
                };
                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _userService.Update(Arg.Any<UpdateCustCriteria>()).Returns(expectedResult);

                // Action
                var result = controller.Edit(criteria) as ViewResult;

                // Assert
                Assert.IsTrue(result.ViewBag.Success);
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/EditUser.cshtml"));
            }
        }

        [Test]
        public void AssignPermission_WhenCall_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                User expectedUser = new User()
                {
                    Username = "mark",
                    Password = "123",
                    Group = new Group()
                    {
                        Id = 1
                    }
                };
                _userService.GetById(Arg.Any<int>()).Returns(expectedUser);
                var expectedResult = new AssignFunctionUserCriteria
                {
                    UserId = 1,
                    Username = expectedUser.Username,
                    SiteId = N88Settings.Settings.SiteId
                };
                List<FunctionPolicy> listGroupFuncPolicy = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1, Function = new AccFunction() { Id = 1 } } };
                _functionService.GetByGroupAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(listGroupFuncPolicy);

                List<AccFunction> listFunc = new List<AccFunction>() { new AccFunction() { Id = 2 } };
                _functionService.GetBySiteInHierarchy(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<bool>()).Returns(listFunc);

                _functionService.GetByUserAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(listGroupFuncPolicy);

                // Action
                var result = controller.AssignPermission(1) as ViewResult;

                // Assert
                Assert.That(result.Model, Tobe.SameProperties(expectedResult));
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/AssignPermission.cshtml"));
            }
        }

        [Test]
        public void AssignPermission_WhenCall_AssignFunctionIsSuccessful_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                User expectedUser = new User()
                {
                    Username = "mark"
                };
                _userService.GetById(Arg.Any<int>()).Returns(expectedUser);

                var criteria = new AssignFunctionUserCriteria
                {
                    UserId = 1,
                    Username = expectedUser.Username,
                    SiteId = N88Settings.Settings.SiteId
                };

                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _userService.AssignFunction(Arg.Any<AssignFunctionUserCriteria>()).Returns(expectedResult);

                List<FunctionPolicy> expectedListGroupFuncPolicy = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1, Function = new AccFunction() { Id = 1 } } };
                _functionService.GetByGroupAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(expectedListGroupFuncPolicy);

                List<AccFunction> expectedListFunc = new List<AccFunction>() { new AccFunction() { Id = 2 } };
                _functionService.GetBySiteInHierarchy(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<bool>()).Returns(expectedListFunc);

                _functionService.GetByUserAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(expectedListGroupFuncPolicy);

                // Action
                var result = controller.AssignPermission(criteria) as ViewResult;

                // Assert
                Assert.IsTrue(result.ViewBag.Success);
                Assert.AreEqual(result.ViewBag.FunctionList, expectedListFunc);
                Assert.AreEqual(result.ViewBag.UserFuncPolicyList, expectedListGroupFuncPolicy);
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/AssignPermission.cshtml"));
            }
        }

        [Test]
        public void AssignPermission_WhenCall_UserGroupIsNotNull_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                User expectedUser = new User()
                {
                    Username = "mark",
                    Group = new Group()
                    {
                        Id = 1
                    }
                };
                _userService.GetById(Arg.Any<int>()).Returns(expectedUser);

                var criteria = new AssignFunctionUserCriteria
                {
                    UserId = 1,
                    Username = expectedUser.Username,
                    SiteId = N88Settings.Settings.SiteId
                };

                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _userService.AssignFunction(Arg.Any<AssignFunctionUserCriteria>()).Returns(expectedResult);

                List<FunctionPolicy> expectedListGroupFuncPolicy = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1, Function = new AccFunction() { Id = 1 } } };
                _functionService.GetByGroupAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(expectedListGroupFuncPolicy);

                List<AccFunction> expectedListFunc = new List<AccFunction>() { new AccFunction() { Id = 2 } };
                _functionService.GetBySiteInHierarchy(Arg.Any<int>(), Arg.Any<string>(), Arg.Any<bool>()).Returns(expectedListFunc);

                _functionService.GetByUserAndSite(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>()).Returns(expectedListGroupFuncPolicy);

                // Action
                var result = controller.AssignPermission(criteria) as ViewResult;

                // Assert
                Assert.IsTrue(result.ViewBag.Success);
                Assert.AreEqual(result.ViewBag.FunctionList, expectedListFunc);
                Assert.AreEqual(result.ViewBag.UserFuncPolicyList, expectedListGroupFuncPolicy);
                Assert.AreEqual(result.ViewBag.GroupFuncPolicyList, expectedListGroupFuncPolicy);
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/AssignPermission.cshtml"));
            }
        }

        [Test]
        public void ResetPassword_CallById_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                User expectedUser = new User()
                {
                    Username = "mark",
                    Id = 1
                };
                _userService.GetById(Arg.Any<int>()).Returns(expectedUser);

                // Action
                var result = controller.ResetPassword(1) as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/ResetPassword.cshtml"));
            }
        }

        [Test]
        public void ResetPassword_UpdateIsSuccessful_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _userService.UpdatePassword(Arg.Any<ResetPasswordCustCriteria>()).Returns(expectedResult);
                ResetPasswordCustCriteria criteria = new ResetPasswordCustCriteria();
                // Action
                var result = controller.ResetPassword(criteria) as ViewResult;

                // Assert
                Assert.IsTrue(result.ViewBag.Success);
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/ResetPassword.cshtml"));
            }
        }

        [Test]
        public void SetDataLimits_WhenCall_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                User expectedUser = new User()
                {
                    Username = "mark",
                    Password = "123"
                };
                SetDataLimitsCriteria expectedResult = new SetDataLimitsCriteria
                {
                    UserId = 1,
                    Username = "mark",
                    IsAllReportDataLimitsApplied = true,
                    AllReportDataLimits = 12
                };
                var expectedUserSetting = new List<Setting>
                {
                    new Setting
                    {
                        Key = SettingKey.LimitDays,
                        Value = "12"
                    }
                };
                _userService.GetById(Arg.Any<int>()).Returns(expectedUser);
                _userService.GetSetting(Arg.Any<int>()).Returns(expectedUserSetting);

                // Action
                var result = controller.SetDataLimits(1) as ViewResult;

                // Assert
                Assert.That(result.Model, Tobe.SameProperties(expectedResult));
            }
        }

        [Test]
        public void SetDataLimits_WhenCall_UpdateIsSuccessful_ReturnViewResult()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SetUpDefaultFakeData();
                SetDataLimitsCriteria criteria = new SetDataLimitsCriteria
                {
                    UserId = 1,
                    Username = "mark",
                    IsAllReportDataLimitsApplied = true,
                    AllReportDataLimits = 12
                };
                CommandResult expectedResult = new CommandResult()
                {
                    Error = 0,
                    Message = ""
                };
                _userService.UpdateSetting(Arg.Any<SetDataLimitsCriteria>()).Returns(expectedResult);

                // Action
                var result = controller.SetDataLimits(criteria) as ViewResult;

                // Assert
                Assert.IsTrue(result.ViewBag.Success);
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Account/SetDataLimits.cshtml"));
            }
        }

        private AccountController CreateController()
        {
            return new AccountController(_userService, _functionService, _fileManager)
            {
                ControllerContext = ControllerContext,
                SessionServiceInstance = SessionService,
                AppSettingInstance = AppSettings
            };
        }
    }
}