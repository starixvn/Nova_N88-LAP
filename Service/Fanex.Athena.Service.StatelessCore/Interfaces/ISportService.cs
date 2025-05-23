using System.Collections.Generic;
using System.Threading.Tasks;
using Fanex.Athena.Model.Core.DTO.Common;

namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    public interface ISportService
    {
        Task<IEnumerable<SportProductItem>> GetSportsAndProducts(int licenseeId, string languageCode, string productCodes = "");

        Task<IDictionary<int, string>> GetAllSports();

        Task<IEnumerable<CheckedItem>> GetSportsForTreeView(int licenseeId, string languageCode, string productCodes = "");

        IEnumerable<SportProductItem> GetSabaSport(List<SportProductItem> sports);
    }
}