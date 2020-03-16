namespace Fanex.Athena.Service.PlayerManagement.Interfaces
{
    using Fanex.Athena.Model.PlayerManagement.MetaModel;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;

    public interface IPlayerListService
    {
        PlayerListResultViewModel Search(PlayerSearchingMetaModel metaModel);

        PlayerListResultViewModel GetPlayerListById(PlayerListByIdMetaModel metaModel);
    }
}