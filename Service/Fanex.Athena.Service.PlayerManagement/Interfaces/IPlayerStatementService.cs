namespace Fanex.Athena.Service.PlayerManagement.Interfaces
{
    using System.Threading.Tasks;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;

    public interface IPlayerStatementService
    {
        Task<string> GetUrl(PlayerStatementMetaModel metaModel);
    }
}