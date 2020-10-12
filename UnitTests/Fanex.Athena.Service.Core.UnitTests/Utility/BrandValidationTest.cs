namespace Fanex.Athena.Service.Core.UnitTests.Utility
{
    using Fanex.Athena.Model.Core.MetaModel;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.NVC.Authentication.Infrastructure;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;

    [TestFixture]
    public class BrandValidationTest
    {
        private ISessionService _sessionService;
        private Core.Utility.BrandValidation _brandValidation;

        [SetUp]
        public void Setup()
        {
            _sessionService = Substitute.For<ISessionService>();
            _brandValidation = new Core.Utility.BrandValidation(_sessionService);
        }

        [TearDown]
        public void TearDown()
        {
            _sessionService = null;
            _brandValidation = null;
        }

        [Test]
        public void IsValidBrandId_ModelIsNull_ReturnInvalid()
        {
            //Arrange
            var expectedResult = false;
            //Act
            var actualResult = _brandValidation.IsValidBrandId(null);

            //Assert
            Assert.AreEqual(expectedResult, actualResult);
        }

        [TestCase(1, true)]
        [TestCase(2, true)]
        [TestCase(3, true)]
        [TestCase(4, true)]
        [TestCase(5, true)]
        [TestCase(6, false)]
        [TestCase(0, false)]
        public void IsValidBrandId_WhenCall_ReturnResultCorrectly(int brandId, bool expectedResult)
        {
            //Arrange
            var fakeUser = new NVCUserAuthInfo
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
            var metaModel = Substitute.For<IMetaModelBrandId>();
            metaModel.BrandId.Returns(brandId);

            //Act
            var actualResult = _brandValidation.IsValidBrandId(metaModel);

            //Assert
            Assert.AreEqual(expectedResult, actualResult);
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
        public void IsValidBrandIdList_WhenCall_ReturnResultCorrectly(string brandIds, bool expectedResult)
        {
            //Arrange
            var fakeUser = new NVCUserAuthInfo
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