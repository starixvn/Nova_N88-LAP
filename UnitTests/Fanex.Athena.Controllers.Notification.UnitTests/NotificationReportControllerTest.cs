using Fanex.Athena.Controllers.Base.UnitTests;
using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Model.Core.ResultModel;
using Fanex.Athena.Model.Notification.DTO;
using Fanex.Athena.Model.Notification.MetaModel;
using Fanex.Athena.Notification.Report;
using Fanex.Athena.Notification.Service.Interfaces;
using Fanex.Athena.UnitTest.Common.Helpers;
using Newtonsoft.Json;
using NSubstitute;
using NUnit.Framework;
using System.Threading.Tasks;
using System.Web.Helpers;
using System.Web.Mvc;

namespace Fanex.Athena.Controllers.Notification.UnitTests
{
    [TestFixture]
    public class NotificationReportControllerTest : CultureBaseControllerHelperTest
    {
        private INotificationService _notificationService;

        [SetUp]
        public void SetUp()
        {
            _notificationService = Substitute.For<INotificationService>();
        }

        [TearDown]
        public void TearDown()
        {
            _notificationService = null;
        }

        [OneTimeSetUp]
        public override void FixtureSetUp()
        {
            base.FixtureSetUp();
            SetUpDefaultFakeData();
        }

        [Test]
        public void Index_WhenCall_ReturnCorrectViewLink()
        {
            //Arrange
            const string expectedResult = "~/Views/Desktop/Notification/Notification.cshtml";

            using (var controller = new NotificationReportController(_notificationService)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService
            })
            {
                //Act
                var actualResult = controller.Index() as ViewResult;

                //Assert
                Assert.AreEqual(expectedResult, actualResult.ViewName);
            }
        }

        [Test]
        public async Task GetNotificationMessages_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var expectedResult = FakeHelper.Create<ReportResultModel<NotificationMessage>>();
            _notificationService.GetNotificationMessages(Arg.Any<NotificationMetaModel>()).Returns(expectedResult);

            using (var controller = new NotificationReportController(_notificationService)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService
            })
            {
                //Act
                var actualResult = await controller.GetNotificationMessages() as JsonResult;

                //Assert
                Assert.AreEqual(JsonConvert.SerializeObject(expectedResult), JsonConvert.SerializeObject(actualResult.Data));
            }
        }

        [Test]
        public void ResultAmendment_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<NotificationMetaModel>();
            var expectedResult = FakeHelper.Create<ReportResultModel<ResultAmendment>>();
            _notificationService.GetResultAmendment(metaModel).Returns(expectedResult);

            using (var controller = new NotificationReportController(_notificationService)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService
            })
            {
                //Act
                var actualResult = controller.ResultAmendment(metaModel) as JsonResult;

                //Assert
                Assert.AreEqual(JsonConvert.SerializeObject(new
                {
                    expectedResult.DataList,
                    expectedResult.TotalRows
                }), JsonConvert.SerializeObject(actualResult.Data));
            }
        }

        [Test]
        public async Task MarkNotificationAsRead_WhenCall_CallServiceToMarkAsRead()
        {
            //Arrange
            var metaModel = FakeHelper.Create<NotificationMarkAsReadMetaModel>();
            var expectedResult = new ResultInfo
            {
                Code = 1,
                Message = "Success"
            };
            _notificationService.MarkNotificationAsRead(metaModel).Returns(expectedResult);

            using (var controller = new NotificationReportController(_notificationService)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService
            })
            {
                //Act
                var actualResult = await controller.MarkNotificationAsRead(metaModel);

                //Assert
                _notificationService.Received().MarkNotificationAsRead(metaModel);
            }
        }
    }
}