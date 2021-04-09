namespace Fanex.Athena.Api.BetList.UnitTests
{
    using Fanex.NVC.Authentication.Infrastructure;
    using Model.BetList.MetaModel;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;
    using System.Net.Http;
    using System.Threading.Tasks;

    public class OutStandingCompletedBetListControllerTest : ApiBetListBaseControllerHelperTest
    {
        private const string UspKey = "Lrf_BetList_CustomerList_Mem";
        private const string ApiPath = "/BetList/GetBetListPaging";

        [SetUp]
        public void SetUp()
        {
            MockSessionData();

            AuthorizationService.HasPermissionOnData(Arg.Any<IDictionary<int, int[]>>(), Arg.Any<int>(), Arg.Any<long>()).Returns(true);
        }

        [TestCase(0)]
        [TestCase(1)]
        [TestCase(2)]
        public async Task Detail_WhenCall_ReturnCorrectResult(int currencyId)
        {
            using (var controller = CreateController())
            {
                // Arrange
                var metaModel = new BetListMetaModel { CurrencyId = currencyId, ProductCodeList = "Product1,Product2" };

                var expect = new HttpResponseMessage();
                StubBetListApiPostAsync(metaModel, ApiPath, expect);

                // Action
                var actual = await controller.Index(1, 10, metaModel);

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(actual, Is.EqualTo(expect));
                    Assert.That(metaModel.UspKey, Is.EqualTo(UspKey));
                    BetListApiClient.Received().PostAsync(ApiPath, metaModel, SessionLanguage);
                });
            }
        }

        private OutStandingCompletedBetListController CreateController()
        {
            return new OutStandingCompletedBetListController(
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