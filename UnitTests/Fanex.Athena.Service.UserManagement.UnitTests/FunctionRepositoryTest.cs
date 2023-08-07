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
    public class FunctionRepositoryTest
    {
        private IFunctionRepository _functionRepository;

        [SetUp]
        public void Setup()
        {
            DbSettingProviderManager.StartTestingSession();
            ObjectDbFactory.SwitchToTestingMode();
            _functionRepository = new FunctionRepository();
        }

        [TearDown]
        public void TearDown()
        {
            ObjectDbFactory.SwitchToNormalMode();
            _functionRepository = null;
        }

        [Test]
        public void GetBySiteInHierarchy_WhenCall_CallCorrectSPAndParams()
        {
            //Arrange
            var criteria = new GetBySiteFunctionCriteria();
            var mockObjectDB = new Mock<IObjectDb>();
            MockObjectDB(criteria.GetSettingKey(), mockObjectDB.Object);
            mockObjectDB.Setup(_ => _.Query<FunctionData>(It.IsAny<GetAllGroupCriteria>(), null))
                .Returns(FakeHelper.CreateMany<FunctionData>());

            //Act
            _ = _functionRepository.GetBySiteInHierarchy(criteria);

            //Assert
            mockObjectDB.Verify(_ => _.Query<FunctionData>(criteria, null), Times.Once);
        }

        [Test]
        public void GetByGroupAndSite_WhenCall_CallCorrectSPAndParams()
        {
            //Arrange
            var criteria = new AssignFunctionUserCriteria();
            var mockObjectDB = new Mock<IObjectDb>();
            MockObjectDB(criteria.GetSettingKey(), mockObjectDB.Object);
            mockObjectDB.Setup(_ => _.Query<FunctionData>(It.IsAny<SearchUserCriteria>(), null))
                .Returns(FakeHelper.CreateMany<FunctionData>());

            //Act
            _ = _functionRepository.GetByGroupAndSite(criteria);

            //Assert
            mockObjectDB.Verify(_ => _.Query<FunctionData>(criteria, null), Times.Once);
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