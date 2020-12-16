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

    [TestFixture]
    public class GroupServiceTest
    {
        private IGroupService _groupService;
        private ICommonRepository _commonRepository;

        [SetUp]
        public void SetUp()
        {
            _commonRepository = Substitute.For<ICommonRepository>();
            _groupService = new GroupService(_commonRepository);
        }

        [TearDown]
        public void TearDown()
        {
            _commonRepository = null;
            _groupService = null;
        }

        [Test]
        public void GetAllWithNumOfUser_ReturnListGroupData()
        {
            // Arrange
            GroupData group = new GroupData() { GroupId = 1 };
            List<GroupData> expectedGroups = new List<GroupData>() { group };

            _commonRepository.FetchData<GroupData>(Arg.Any<GetAllWithNumOfUserGroupCriteria>()).Returns(expectedGroups);

            // Action
            var result = _groupService.GetAllWithNumOfUser("test");

            // Assert
            Assert.AreEqual(expectedGroups, result);
        }

        [Test]
        public void ExecuteNonQuery_ReturnListGroupData()
        {
            // Arrange
            CommandResult expectedResult = new CommandResult() { Error = 0, Message = string.Empty };
            _commonRepository.ExecuteNonQueryAsync(Arg.Any<INonQueryCommand>()).Returns(expectedResult);
            InsertGroupCriteria criteria = new InsertGroupCriteria() { GroupId = 0 };

            // Action
            var result = _groupService.ExecuteNonQuery(criteria);

            // Assert
            Assert.AreEqual(expectedResult, result);
        }

        [Test]
        public void ExecuteNonQuery_ReturnGroupData()
        {
            // Arrange
            GroupData expectedGroup = new GroupData() { GroupId = 1 };
            List<GroupData> Groups = new List<GroupData>() { expectedGroup };
            _commonRepository.FetchData<GroupData>(Arg.Any<ICriteria>()).Returns(Groups);
            GetByIdGroupCriteria criteria = new GetByIdGroupCriteria() { GroupId = 0 };

            // Action
            var result = _groupService.Get(criteria);

            // Assert
            Assert.AreEqual(expectedGroup, result);
        }
    }
}
