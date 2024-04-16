namespace Fanex.Athena.DataAccess.Core.Common.Interfaces
{
    using Fanex.Athena.Model.Core.DTO.Common;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IBetTypeDataAccess
    {
        Task<IList<CheckedItem>> GetBettypes(int licenseeId, string xmlSportList, string languageCode);

        Task<IList<CheckedItem>> GetBettypesByProduct(int licenseeId, string productCode, string languageCode);

        Task<IEnumerable<(string ProductCode, int BetType)>> GetBetTypeForProducts(int licenseeId, string productCodes);
    }
}