namespace Fanex.Athena.Service.Core.UnitTests.Utility
{
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Core.MetaModel;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.Service.Core.Utility;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;

    [TestFixture]
    public class BrandValidationTest
    {
        private ISessionService _sessionService;
        private BrandValidation _brandValidation;

        [SetUp]
        public void Setup()
        {
            _sessionService = Substitute.For<ISessionService>();
            _brandValidation = new BrandValidation(_sessionService);
        }

        [TearDown]
        public void TearDown()
        {
            _sessionService = null;
            _brandValidation = null;
        }

        [TestCase("", false)]
        [TestCase("  ", false)]
        [TestCase(null, false)]
        public void IsValidBrandIdList_BrandIsIsNullOrWhiteSpace_ReturnInvalid(string brandIds, bool expectedResult)
        {
            //Arrange
            var metaModel = Substitute.For<IMetaModelBrandIdList>();
            metaModel.BrandIds.Returns(brandIds);

            //Act
            var actualResult = _brandValidation.IsValidBrandIdList(metaModel);

            //Assert
            Assert.AreEqual(expectedResult, actualResult);
        }

        [TestCase("6,7", false)]
        [TestCase("1,2,3,  5,", true)]
        [TestCase("1,2,3,5,xdsa", false)]
        [TestCase("1,2,3,4,5", true)]
        [TestCase("5,6", false)]
        public void IsValidBrandIdList_BrandIsIsNullOrWhiteSpace_ReturnResultCorrectly(string brandIds, bool expectedResult)
        {
            //Arrange
            var fakeUser = new UserAuthInfo
            {
                BrandList = new List<Brand>
                {
                    new Brand { Id = 1 },
                    new Brand { Id = 2 },
                    new Brand { Id = 3 },
                    new Brand { Id = 4 },
                    new Brand { Id = 5 },
                }
            };
            _sessionService.UserSession.Returns(fakeUser);
            var metaModel = Substitute.For<IMetaModelBrandIdList>();
            metaModel.BrandIds.Returns(brandIds);

            //Act
            var actualResult = _brandValidation.IsValidBrandIdList(metaModel);

            //Assert
            Assert.AreEqual(expectedResult, actualResult);
        }
    }
}