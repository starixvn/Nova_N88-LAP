using System.Collections.Generic;
using Fanex.Athena.Extension.Utility;
using Fanex.Athena.Model.Auth;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Service.Core.Users.Interfaces;
using Fanex.Athena.Service.Core.Utility;
using Fanex.Athena.Service.Core.Utility.Interfaces;
using Fanex.NVC.Authentication.Infrastructure;
using NSubstitute;

using NUnit.Framework;

namespace Fanex.Athena.Service.Core.UnitTests.Utility
{
    [TestFixture]
    public class CurrencyValidationTest
    {
        private ICurrencyValidation _currencyValidation;
        private ISessionService _sessionService;
        private IAppSettings _appSettings;

        [SetUp]
        public void Setup()
        {
            _sessionService = Substitute.For<ISessionService>();
            _appSettings = Substitute.For<IAppSettings>();

            _sessionService.UserSession.Returns(new NVCUserAuthInfo
            {
                BrandList = new List<Brand>
                {
                    new Brand
                    {
                        Id = 402,
                        CurrencyList =  new Dictionary<int, string> { { 1, "USD" }, { 2, "EUR" }, }
                    },
                    new Brand
                    {
                        Id = 436,
                        CurrencyList =  new Dictionary<int, string> { { 4, "IDR" } }
                    }
                }
            });
            _sessionService.LicenseeSession.Returns(new NVCLicenseeAuthInfo { LicenseeId = 402 });
            _currencyValidation = new CurrencyValidation(_sessionService, _appSettings);
        }

        [TearDown]
        public void TearDown()
        {
            _currencyValidation = null;
            _sessionService = null;
        }

        [TestCase(1, true)]
        [TestCase(0, true)]
        [TestCase(100, false)]
        [TestCase(-5, true)]
        [TestCase(-100, false)]
        public void IsValidCurrency_WhenCalled_ReturnExpectedResult(int currencyId, bool expected)
        {
            //Arrange

            //Action

            var result = _currencyValidation.IsValidCurrency(currencyId);
            //Assert
            Assert.AreEqual(result, expected);
        }

        [TestCase(100, 402, false)]
        [TestCase(2, 402, true)]
        public void IsValidCurrency_WhenCallWithKeanOcean_ReturnExpectedResult(int currencyId,
            int licenseeId,
        bool expected)
        {
            //Arrange
            _sessionService.LicenseeSession.Returns(new NVCLicenseeAuthInfo { LicenseeId = licenseeId });

            //Action

            var result = _currencyValidation.IsValidCurrency(currencyId);
            //Assert
            Assert.AreEqual(result, expected);
        }

        [TestCase("", true, true)]
        [TestCase("", false, false)]
        [TestCase("usd", false, true)]
        [TestCase("KKK", false, false)]
        public void IsValidBaseCurrency_WhenCalled_ReturnCorrectResult(
            string baseCurrency,
           bool isAllowEmpty,
            bool expectedValue)
        {
            //Arrange

            //Action

            var result = _currencyValidation.IsValidBaseCurrency(baseCurrency, isAllowEmpty);
            //Assert
            Assert.AreEqual(result, expectedValue);
        }

        [TestCase(null, false)]
        [TestCase("", false)]
        [TestCase("1,2", true)]
        [TestCase("1,2,4", true)]
        [TestCase("1,10,4", false)]
        [TestCase("1,2,A", false)]
        [TestCase("1,2,-100", false)]
        public void IsValidCurrency_CurrencyList_ReturnCorrectResult(string currencyIdList, bool expectedValue)
        {
            //Arrange

            //Action
            var result = _currencyValidation.IsValidCurrency(currencyIdList);

            //Assert
            Assert.AreEqual(expectedValue, result);
        }
    }
}