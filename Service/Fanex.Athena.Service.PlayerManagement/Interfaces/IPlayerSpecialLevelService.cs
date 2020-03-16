namespace Fanex.Athena.Service.PlayerManagement.Interfaces
{
    using Fanex.Athena.Model.Core.ViewModel;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;

    public interface IPlayerSpecialLevelService
    {
        ResultViewModel Update(SpecialLevelUpdatingMetaModel metaModel);
    }
}