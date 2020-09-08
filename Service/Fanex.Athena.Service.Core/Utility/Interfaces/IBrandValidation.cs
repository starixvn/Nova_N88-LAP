namespace Fanex.Athena.Service.Core.Utility.Interfaces
{
    using Fanex.Athena.Model.Core.MetaModel;

    public interface IBrandValidation
    {
        bool IsValidBrandIdList(IMetaModelBrandIdList model);
    }
}