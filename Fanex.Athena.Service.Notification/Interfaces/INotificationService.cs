namespace Fanex.Athena.Notification.Service.Interfaces
{
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Core.ResultModel;
    using Fanex.Athena.Model.Notification.DTO;
    using Fanex.Athena.Model.Notification.MetaModel;
    using System.Threading.Tasks;

    public interface INotificationService
    {
        ReportResultModel<NotificationMessage> GetNotificationMessages(NotificationMetaModel metaModel);

        ReportResultModel<ResultAmendment> GetResultAmendment(NotificationMetaModel metaModel);

        Task<AmendmentTicketListing> GetAmendmentTicketListing(AmendmentTicketListingMetaModel metaModel);

        IResultInfo MarkNotificationAsRead(NotificationMarkAsReadMetaModel metaModel);

        IResultInfo GetFileAttachmentData(NotificationAttachmentMetaModel metaModel);
    }
}