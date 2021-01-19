namespace Fanex.Athena.Service.Core.UnitTests.Users
{
    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Core.Configuration;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.Core.Users;
    using Fanex.Athena.UnitTest.Common.NUnitExtensions;
    using Fanex.NVC.Authentication.Infrastructure;
    using Newtonsoft.Json;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;
    using System.Linq;
    using UnitTest.Common.Helpers;

    [TestFixture]
    public class BrandServiceTest
    {
        private ITpService _tpService;
        private ICurrencyDataAccess _currencyDataAccess;

        private BrandService _targetService;

        [SetUp]
        public void Setup()
        {
            _tpService = Substitute.For<ITpService>();
            _currencyDataAccess = Substitute.For<ICurrencyDataAccess>();
            _targetService = new BrandService(_tpService, _currencyDataAccess);
        }

        [TearDown]
        public void TearDown()
        {
            _tpService = null;
            _targetService = null;
        }

        [Test]
        public void GetAllowedBrands_SelfBrand_ReturnBrandListCorrectly()
        {
            //Arrange
            var licenseeId = FakeHelper.Create<int>();
            var functions = new List<NVCFunctionAuthInfo>();
            var expectedResult = new Brand
            {
                Id = licenseeId,
                Name = "N88",
                FunctionKey = "N88",
                TpCurrencyList = new Dictionary<int, string> { { 1, "USD" } }
            };

            _tpService.GetListTpCurrency(licenseeId).Returns(new List<Currency> { new Currency { ID = 1, Name = "USD" } });

            var fakeBrands = new BrandCollection
            {
                new BrandElement
                {
                    Id = expectedResult.Id,
                    Name = expectedResult.Name,
                    FunctionKey = expectedResult.FunctionKey
                }
            };
            //Act
            var actualResult = _targetService.GetAllowedBrands(licenseeId, functions, fakeBrands);

            //Assert
            Assert.That(actualResult.FirstOrDefault(), Tobe.SameProperties(expectedResult));
        }

        [Test]
        public void GetAllowedBrands_BrandPermission_ReturnBrandListCorrectly()
        {
            //Arrange
            var fakeN88Brand = new Brand
            {
                Id = 1,
                Name = "N88",
                FunctionKey = "N88_Brand",
                TpCurrencyList = new Dictionary<int, string> { { 2, "EUR" } }
            };

            var fakeN8GBrand = new Brand
            {
                Id = 2,
                Name = "N8G",
                FunctionKey = "N8G_Brand",
                TpCurrencyList = new Dictionary<int, string> { { 1, "USD" } }
            };

            var fakeN8BBrand = new Brand
            {
                Id = 3,
                Name = "N8B",
                FunctionKey = "N8B_Brand",
                TpCurrencyList = new Dictionary<int, string> { { 3, "AUD" } }
            };

            var functions = new List<NVCFunctionAuthInfo>
            {
                new NVCFunctionAuthInfo { FunctionKey = fakeN8GBrand.FunctionKey }
            };

            _tpService.GetListTpCurrency(fakeN88Brand.Id).Returns(fakeN88Brand.TpCurrencyList.Select(_ => new Currency { ID = _.Key, Name = _.Value }));
            _tpService.GetListTpCurrency(fakeN8GBrand.Id).Returns(fakeN8GBrand.TpCurrencyList.Select(_ => new Currency { ID = _.Key, Name = _.Value }));
            _tpService.GetListTpCurrency(fakeN8BBrand.Id).Returns(fakeN8BBrand.TpCurrencyList.Select(_ => new Currency { ID = _.Key, Name = _.Value }));

            var fakeBrands = new BrandCollection
            {
                new BrandElement
                {
                    Id = fakeN88Brand.Id,
                    Name = fakeN88Brand.Name,
                    FunctionKey = fakeN88Brand.FunctionKey
                },
                new BrandElement
                {
                    Id = fakeN8GBrand.Id,
                    Name = fakeN8GBrand.Name,
                    FunctionKey = fakeN8GBrand.FunctionKey
                },
                new BrandElement
                {
                    Id = fakeN8BBrand.Id,
                    Name = fakeN8BBrand.Name,
                    FunctionKey = fakeN8BBrand.FunctionKey
                }
            };

            var expectedResult = new List<Brand>
            {
                  fakeN88Brand, fakeN8GBrand
            };

            //Act
            var actualResult = _targetService.GetAllowedBrands(fakeN88Brand.Id, functions, fakeBrands);

            //Assert
            Assert.AreEqual(JsonConvert.SerializeObject(expectedResult), JsonConvert.SerializeObject(actualResult));
        }
    }
}