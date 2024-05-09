using System.Collections.Generic;
using System.Threading.Tasks;
using Fanex.Athena.Model.Customer.DTO;

namespace Fanex.Athena.Service.Customer.Interfaces
{
    public interface ICustomerClassService
    {
        Task<IEnumerable<RiskLevel>> GetAllRiskLevel();
    }
}