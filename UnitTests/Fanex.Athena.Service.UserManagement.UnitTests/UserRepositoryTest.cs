namespace Fanex.Athena.Service.UserManagement.UnitTests
{
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using Fanex.Data;
    using Moq;
    using NUnit.Framework;

    [TestFixture]
    public class UserRepositoryTest
    {
        private IUserRepository _useRepository;

        [SetUp]
        public void Setup()
        {
            DbSettingProviderManager.StartTestingSession();
            ObjectDbFactory.SwitchToTestingMode();
            _useRepository = new UserRepository();
        }

        [TearDown]
        public void TearDown()
        {
            ObjectDbFactory.SwitchToNormalMode();
            _useRepository = null;
        }

        [Test]
        public void GetSettingGroups_WhenCall_CallCorrectSPAndParams()
        {
            //Arrange
            var criteria = new GetAllGroupCriteria();
            var mockObjectDB = new Mock<IObjectDb>();
            MockObjectDB(criteria.GetSettingKey(), mockObjectDB.Object);
            mockObjectDB.Setup(_ => _.Query<GroupData>(It.IsAny<GetAllGroupCriteria>(), null))
                .Returns(FakeHelper.CreateMany<GroupData>());

            //Act
            _ = _useRepository.GetSettingGroups(criteria);

            //Assert
            mockObjectDB.Verify(_ => _.Query<GroupData>(criteria, null), Times.Once);
        }

        [Test]
        public void GetUsers_WhenCall_CallCorrectSPAndParams()
        {
            //Arrange
            var criteria = new SearchUserCriteria();
            var mockObjectDB = new Mock<IObjectDb>();
            MockObjectDB(criteria.GetSettingKey(), mockObjectDB.Object);
            mockObjectDB.Setup(_ => _.Query<UserData>(It.IsAny<SearchUserCriteria>(), null))
                .Returns(FakeHelper.CreateMany<UserData>());

            //Act
            _ = _useRepository.GetUsers(criteria);

            //Assert
            mockObjectDB.Verify(_ => _.Query<UserData>(criteria, null), Times.Once);
        }

        [Test]
        public void GetUserSetting_WhenCall_CallCorrectSPAndParams()
        {
            //Arrange
            var criteria = new GetUserSettingCriteria();
            var mockObjectDB = new Mock<IObjectDb>();
            MockObjectDB(criteria.GetSettingKey(), mockObjectDB.Object);
            mockObjectDB.Setup(_ => _.Query<SettingData>(It.IsAny<GetUserSettingCriteria>(), null))
                .Returns(FakeHelper.CreateMany<SettingData>());

            //Act
            _ = _useRepository.GetUserSetting(criteria);

            //Assert
            mockObjectDB.Verify(_ => _.Query<SettingData>(criteria, null), Times.Once);
        }

        [Test]
        public void GetUserById_WhenCall_CallCorrectSPAndParams()
        {
            //Arrange
            var criteria = new GetByIdUserCriteria();
            var mockObjectDB = new Mock<IObjectDb>();
            MockObjectDB(criteria.GetSettingKey(), mockObjectDB.Object);
            mockObjectDB.Setup(_ => _.Query<UserData>(It.IsAny<GetByIdUserCriteria>(), null))
                .Returns(FakeHelper.CreateMany<UserData>());

            //Act
            _ = _useRepository.GetUserById(criteria);

            //Assert
            mockObjectDB.Verify(_ => _.Query<UserData>(criteria, null), Times.Once);
        }

        private void MockObjectDB(string key, IObjectDb objectDb)
        {
            ObjectDbFactory.Mock((_key, timeount) =>
            {
                if (key.Equals(_key))
                {
                    return objectDb;
                }
                return null;
            });
        }
    }
}