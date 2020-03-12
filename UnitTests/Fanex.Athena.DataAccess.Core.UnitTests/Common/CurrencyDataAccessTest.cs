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
        private const string AssignCurrenciesByUserSp = "Lrf_CurrencyCustIns";
        private const string GetCurrenciesByUser = "Lrf_SelCurrencyByLicenseeUser";

        [Test]
        public void GetCurrenciesByUser_WhenCall_ParametersPassedCorrectly()
        {
            // Arrange
            const int LicenseeId = 1;
            const int UserId = 2;
            DataAccess.GetObjectDb(Arg.Is(GetCurrenciesByUser)).Returns(ObjectDb);

            // Action
            DataAccess.GetCurrenciesByUser(LicenseeId, UserId);

            // Assert
            Assert.Multiple(() =>
            {
                ObjectDb.Received(1).SetParameterValue("LicenseeID", LicenseeId);
                ObjectDb.Received(1).SetParameterValue("UserID", UserId);
            });
        }

        [Test]
        public void GetCurrenciesByUser_WhenCall_ReturnCorrectData()
        {
            // Arrange
            DataAccess.GetObjectDb(GetCurrenciesByUser).Query<CurrencyUser>()
                .Returns(new List<CurrencyUser>
                {
                    new CurrencyUser { CurrencyId = 1, AgentId = 100 },
                    new CurrencyUser { CurrencyId = 1, AgentId = 200 }
                });

            // Action
            var currencyList = DataAccess.GetCurrenciesByUser(0, 0);

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(currencyList.Count, Is.EqualTo(1));
                Assert.That(currencyList[0].AgentIdList.Count(), Is.EqualTo(2));
            });
        }
    }
}