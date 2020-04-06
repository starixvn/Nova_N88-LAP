namespace Fanex.Athena.DataAccess.Customer.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Fanex.Athena.Model.Customer.DTO.CustomerLog;
    using Fanex.Athena.Model.Customer.MetaModel.CustomerLog;

    public interface ICustomerLogDataAccess
    {
        Task<IList<CustomerLog>> GetCustomerSettingList(CustomerLogMetaModel metaModel);

        Task<IList<CustomerLog>> GetGroupCommList(CustomerLogMetaModel metaModel);
    }
}