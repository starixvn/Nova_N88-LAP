namespace Fanex.Athena.Service.UserManagement.UnitTests
{
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Athena.Service.UserManagement.Service;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using Fanex.Data.Repository;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;
    using System.Web.Mvc;

    [TestFixture]
    public class UserServiceTest
    {
        private const string ERROR_MSG = "Error";
        private IUserRepository _userRepository;
        private IUserService _userService;

        [SetUp]
        public void Setup()
        {
            _userRepository = Substitute.For<IUserRepository>();
            _userService = new UserService(_userRepository);
        }

        [TearDown]
        public void TearDown()
        {
            _userRepository = null;
            _userService = null;
        }

        [Test]
        public void GetSettingGroups_ReturnSelectListItem()
        {
            // Arrange
            IEnumerable<SelectListItem> expectedResult = new List<SelectListItem>() { new SelectListItem() { Text = "expectedResult" } };
            _userRepository.GetSettingGroups(Arg.Any<ICriteria>()).Returns(expectedResult);

            // Action
            var groupCriteria = new GetAllGroupCriteria
            {
                SiteId = 1
            };
            var result = _userService.GetSettingGroups(groupCriteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void SearchUser_ResturnListUserLevel()
        {
            // Arrange
            IEnumerable<UserLevel> expectedResult = new List<UserLevel>() { new UserLevel() { Level = 9999 } };
            _userRepository.GetUsers(Arg.Any<SearchUserCriteria>()).Returns(expectedResult);

            // Action
            SearchUserCriteria criteria = new SearchUserCriteria
            {
                SiteId = 1
            };
            var result = _userService.SearchUser(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void Insert_CommandResult()
        {
            // Arrange
            CommandResult expectedResult = new CommandResult()
            {
                Error = 0,
                Message = "expected"
            };
            _userRepository.ExecuteNonQueryAsync(Arg.Any<INonQueryCommand>()).Returns(expectedResult);

            // Action
            InsertCustCriteria criteria = new InsertCustCriteria
            {
                SiteId = 1
            };
            var result = _userService.Insert(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void UpdateSite_CommandResult()
        {
            // Arrange
            CommandResult expectedResult = new CommandResult()
            {
                Error = 0,
                Message = "expected"
            };
            _userRepository.ExecuteNonQueryAsync(Arg.Any<INonQueryCommand>()).Returns(expectedResult);

            // Action
            UpdateSiteToUserCriteria criteria = new UpdateSiteToUserCriteria
            {
                SiteId = 1
            };
            var result = _userService.UpdateSite(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void Update_CommandResult()
        {
            // Arrange
            CommandResult expectedResult = new CommandResult()
            {
                Error = 0,
                Message = "expected"
            };
            _userRepository.ExecuteNonQueryAsync(Arg.Any<INonQueryCommand>()).Returns(expectedResult);

            // Action
            UpdateCustCriteria criteria = new UpdateCustCriteria
            {
                SiteId = 1
            };
            var result = _userService.Update(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void AssignFunction_CommandResult()
        {
            // Arrange
            CommandResult expectedResult = new CommandResult()
            {
                Error = 0,
                Message = "expected"
            };
            _userRepository.ExecuteNonQueryAsync(Arg.Any<INonQueryCommand>()).Returns(expectedResult);

            // Action
            AssignFunctionUserCriteria criteria = new AssignFunctionUserCriteria
            {
                SiteId = 1
            };
            var result = _userService.AssignFunction(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void UpdatePassword_CommandResult()
        {
            // Arrange
            CommandResult expectedResult = new CommandResult()
            {
                Error = 0,
                Message = "expected"
            };
            _userRepository.ExecuteNonQueryAsync(Arg.Any<INonQueryCommand>()).Returns(expectedResult);

            // Action
            ResetPasswordCustCriteria criteria = new ResetPasswordCustCriteria
            {
                SiteId = 1
            };
            var result = _userService.UpdatePassword(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void AssignSite_CommandResult()
        {
            // Arrange
            CommandResult expectedResult = new CommandResult()
            {
                Error = 0,
                Message = "expected"
            };
            _userRepository.ExecuteNonQueryAsync(Arg.Any<INonQueryCommand>()).Returns(expectedResult);

            // Action
            AssignSiteUserCriteria criteria = new AssignSiteUserCriteria
            {
                SiteId = 1
            };
            var result = _userService.AssignSite(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void CheckUsernameExist_UserNotExist_ReturnFalse()
        {
            // Arrange
            UserData user = null;
            IEnumerable<UserData> users = new List<UserData>() { user };
            _userRepository.FetchData<UserData>(Arg.Any<GetByUsernameUserCriteria>()).Returns(users);

            // Action
            var result = _userService.CheckUsernameExist("usernam", true, 1);

            // Assert
            Assert.IsFalse(result);
        }

        [Test]
        public void CheckUsernameExist_UserExist_ReturnTrue()
        {
            // Arrange
            UserData user = new UserData() { UserId = 1 };
            IEnumerable<UserData> users = new List<UserData>() { user };
            _userRepository.FetchData<UserData>(Arg.Any<GetByUsernameUserCriteria>()).Returns(users);

            // Action
            var result = _userService.CheckUsernameExist("usernam", true, 1);

            // Assert
            Assert.IsTrue(result);
        }

        [Test]
        public void GetById_ReturnUser()
        {
            // Arrange
            User expectedUser = new User() { Id = 1 };
            _userRepository.GetUserById(Arg.Any<GetByIdUserCriteria>()).Returns(expectedUser);

            // Action
            var result = _userService.GetById(1);

            // Assert
            Assert.AreEqual(expectedUser, result);
        }

        [Test]
        public void GetSiteById_ReturnSite()
        {
            // Arrange
            Site expectedSite = new Site() { Id = 1 };
            IEnumerable<Site> sites = new List<Site>() { expectedSite };
            _userRepository.FetchData<Site>(Arg.Any<GetByIdSiteCriteria>()).Returns(sites);

            // Action
            var result = _userService.GetSiteById(1);

            // Assert
            Assert.AreEqual(expectedSite, result);
        }

        [Test]
        public void GetUserSiteLevel_ReturnLevel()
        {
            // Arrange
            int expectedLevel = 1;
            IEnumerable<int> levels = new List<int>() { expectedLevel };
            _userRepository.FetchData<int>(Arg.Any<GetUserSiteLevelUserCriteria>()).Returns(levels);

            // Action
            var result = _userService.GetUserSiteLevel(1, 1);

            // Assert
            Assert.AreEqual(expectedLevel, result);
        }
    }
}
