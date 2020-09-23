namespace Fanex.Athena.Service.Core.Utility
{
    using Fanex.Athena.Model.Core.MetaModel;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.Service.Core.Utility.Interfaces;
    using System;
    using System.Linq;

    public class BrandValidation : IBrandValidation
    {
        private readonly ISessionService _sessionService;

        public BrandValidation(ISessionService sessionService)
        {
            _sessionService = sessionService;
        }

        public bool IsValidBrandId(IMetaModelBrandId model)
        {
            if (model == null)
            {
                return false;
            }

            var brandList = _sessionService.UserSession.BrandList;
            return brandList.Any(brand => brand.Id == model.BrandId);
        }

        public bool IsValidBrandIdList(IMetaModelBrandIdList model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.BrandIds))
            {
                return false;
            }

            var brandIdList = model.BrandIds.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            var brandList = _sessionService.UserSession.BrandList;
            Func<string, bool> existInBrandList = brandId => int.TryParse(brandId, out int _brandId) &&
                                                                brandList.Any(brand => _brandId == brand.Id);
            return brandIdList.All(existInBrandList);
        }
    }
}