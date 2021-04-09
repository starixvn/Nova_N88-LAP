namespace Fanex.Athena.Api.BetList.UnitTests
{
    using Fanex.NVC.Authentication.Infrastructure;
    using Model.BetList.MetaModel;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading.Tasks;

    public class CustomerWinLossBetListControllerTest : ApiBetListBaseControllerHelperTest
    {
        private const string UspKey = "Lrf_BetList_SelWinLossByDate_Mem";

        private const string ApiPath = "/BetList/GetBetList";

        [SetUp]
        public void SetUp()
        {
            MockSessionData();

            AuthorizationService.HasPermissionOnData(Arg.Any<IDictionary<int, int[]>>(), Arg.Any<int>(), Arg.Any<long>()).Returns(true);
        }

        [TestCase(0)]
        [TestCase(-1)]
        public async Task Index_ValidMetaModel_CallBetListApiWithCorrectParameters(int currencyId)
        {
            using (var controller = CreateController())
            {
                // Arrange
                var metaModel = new BetListMetaModel
                {
                    CurrencyId = currencyId
                };

                var expect = new HttpResponseMessage();
                StubBetListApiPostAsync(metaModel, ApiPath, expect);

                // Action
                var actual = await controller.Index(metaModel);

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(expect, Is.EqualTo(actual));
                    Assert.That(metaModel.UspKey, Is.EqualTo(UspKey));
                    BetListApiClient.Received().PostAsync(ApiPath, metaModel, SessionLanguage);
                });
            }
        }

        private CustomerWinLossBetListController CreateController()
        {
            return new CustomerWinLossBetListController(
                LangService,
                AuthorizationService,
                BetListApiClient,
                BalanceUpDataAccess)
            {
                SessionService = SessionService,
                ProductService = ProductService
            };
        }
    }
}