namespace Fanex.Athena.DataAccess.Core.UnitTests.Common
{
    using System.Collections.Generic;
    using System.Linq;
    using Core.Common;
    using Fanex.Athena.Model.Auth;
    using NSubstitute;
    using NUnit.Framework;
    using TestHelpers;

    public class CurrencyDataAccessTest : BaseDataAccessHelperTest<CurrencyDataAccess>
    {
        private const string GetCurrenciesByLicensee = "N88_SelAgentListByLicensee";

        [Test]
        public void GetCurrenciesByLicensee_WhenCall_ParametersPassedCorrectly()
        {
            // Arrange
            const int LicenseeId = 1;
            DataAccess.GetObjectDb(Arg.Is(GetCurrenciesByLicensee)).Returns(ObjectDb);

            // Action
            DataAccess.GetCurrenciesByLicensee(LicenseeId);

            // Assert
            Assert.Multiple(() =>
            {
                ObjectDb.Received(1).SetParameterValue("LicenseeID", LicenseeId);
            });
        }

        [Test]
        public void GetCurrenciesByLicensee_WhenCall_ReturnCorrectData()
        {
            // Arrange
            DataAccess.GetObjectDb(GetCurrenciesByLicensee).Query<CurrencyUser>()
                .Returns(new List<CurrencyUser>
                {
                    new CurrencyUser { CurrencyId = 1, AgentId = 100 },
                    new CurrencyUser { CurrencyId = 1, AgentId = 200 }
                });

            // Action
            var currencyList = DataAccess.GetCurrenciesByLicensee(0);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(currencyList.Count, Is.EqualTo(1));
                Assert.That(currencyList[0].AgentIdList.Count(), Is.EqualTo(2));
            });
        }
    }
}