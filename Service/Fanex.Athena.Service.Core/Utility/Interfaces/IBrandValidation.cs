namespace Fanex.Athena.Service.Core.Utility.Interfaces
{
    using Fanex.Athena.Model.Core.MetaModel;

    public interface IBrandValidation
    {
        bool IsValidBrandId(IMetaModelBrandId model);

        bool IsValidBrandIdList(IMetaModelBrandIdList model);
    }
}