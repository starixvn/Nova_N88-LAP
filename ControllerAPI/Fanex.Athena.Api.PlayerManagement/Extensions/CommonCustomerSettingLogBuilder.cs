namespace Fanex.Athena.Api.PlayerManagement.Extensions
{
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;
    using Fanex.Athena.Service.StatelessCore;

    public class CommonCustomerSettingLogBuilder : IBusinessLogBuilderExtension
    {
        public BusinessLogItem Build<T>(T item) where T : class
        {
            if (!(item is PlayerUpdatingLogMetaModel currentItem))
            {
                return null;
            }

            return new BusinessLogItem
            {
                CustID = currentItem.CustId,
                UserId = currentItem.UserId,
                ActionID = currentItem.ActionId,
                TypeId = (byte)UserControlLogType.Function,
                Doing = $"LAP - {currentItem.SiteName} - {currentItem.LicenseeCustId} - {currentItem.ActionDetailId} - {currentItem.Status} - {currentItem.NewValue} - {currentItem.OldValue}"
            };
        }
    }
}