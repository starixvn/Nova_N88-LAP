namespace Fanex.Athena.Service.UserManagement.UnitTests
{
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Athena.Service.UserManagement.Service;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;

    [TestFixture]
    public class FunctionServiceTest
    {
        private IFunctionService _functionService;
        private IFunctionRepository _functionRepository;

        [SetUp]
        public void SetUp()
        {
            _functionRepository = Substitute.For<IFunctionRepository>();
            _functionService = new FunctionService(_functionRepository);
        }

        [TearDown]
        public void TearDown()
        {
            _functionRepository = null;
            _functionService = null;
        }

        [Test]
        public void GetByGroupAndSite_ReturnListFunctionPolicy()
        {
            // Arrange
            IEnumerable<FunctionPolicy> expectedListFunc = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1 } };
            _functionRepository.GetByGroupAndSite(Arg.Any<GetByGroupAndSiteFunctionCriteria>()).Returns(expectedListFunc);

            // Action
            var result = _functionService.GetByGroupAndSite(1, 1, "UAT");

            // Assert
            Assert.AreEqual(expectedListFunc, result);
        }

        [Test]
        public void GetBySiteInHierarchy_ReturnListAccFunction()
        {
            // Arrange
            IEnumerable<AccFunction> expectedListFunc = new List<AccFunction>() { new AccFunction() { Id = 2, DisplayOrder = 1 } };
            _functionRepository.GetBySiteInHierarchy(Arg.Any<GetBySiteFunctionCriteria>()).Returns(expectedListFunc);

            // Action
            var result = _functionService.GetBySiteInHierarchy(1);

            // Assert
            Assert.AreEqual(expectedListFunc, result);
        }

        [Test]
        public void GetByUserAndSite_ReturnListFunctionPolicy()
        {
            // Arrange
            IEnumerable<FunctionPolicy> expectedListFunc = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1 } };
            _functionRepository.GetByGroupAndSite(Arg.Any<GetByUserAndSiteFunctionCriteria>()).Returns(expectedListFunc);

            // Action
            var result = _functionService.GetByUserAndSite(1, 2);

            // Assert
            Assert.AreEqual(expectedListFunc, result);
        }

        [Test]
        public void GetByUserAndSiteIncludeGroup_ReturnListFunctionPolicy()
        {
            // Arrange
            IEnumerable<FunctionPolicy> expectedListFunc = new List<FunctionPolicy>() { new FunctionPolicy() { Policy = 1 } };
            _functionRepository.GetByGroupAndSite(Arg.Any<GetByUserAndSiteIncludeGroupFunctionCriteria>()).Returns(expectedListFunc);

            // Action
            var result = _functionService.GetByUserAndSiteIncludeGroup(1, 2);

            // Assert
            Assert.AreEqual(expectedListFunc, result);
        }
    }
}
