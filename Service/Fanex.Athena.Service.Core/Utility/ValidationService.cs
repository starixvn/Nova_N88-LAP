using Fanex.Athena.Model.Core.MetaModel;
using Fanex.Athena.Service.Core.Users.Interfaces;
using Fanex.Athena.Service.Core.Utility.Interfaces;
using Fanex.NVC.Authentication.Infrastructure;

namespace Fanex.Athena.Service.Core.Utility
{
    public class ValidationService : IValidationService
    {
        private readonly ICurrencyValidation _currencyValidation;
        private readonly IProductValidation _productValidation;
        private readonly IBrandValidation _brandValidation;
        private readonly ISessionService _sessionService;

        public ValidationService(ICurrencyValidation currencyValidation, IProductValidation productValidation, IBrandValidation brandValidation, ISessionService sessionService)
        {
            _currencyValidation = currencyValidation;
            _productValidation = productValidation;
            _brandValidation = brandValidation;
            _sessionService = sessionService;
        }

        private static bool IsValidMetalModel(IMetaModelValidation model)
        {
            return model != null && model.IsValid;
        }

        public bool IsValid(object model, CurrencyValidationOption currencyValidationOption = null,
            ProductValidationOption productValidationOption = null, BrandValidationOption brandValidationOption = null)
        {
            if (model == null)
            {
                return false;
            }

            var result = IsValidMetalModel(model as IMetaModelValidation);
            result &= CurencyValid(model, currencyValidationOption);
            result &= ProductValid(model, productValidationOption);
            result &= BrandValid(model, brandValidationOption);

            return result;
        }

        private bool CurencyValid(object model, CurrencyValidationOption currencyValidationOption = null)
        {
            var result = true;
            if (currencyValidationOption != null && currencyValidationOption.IsValidCurrency)
            {
                result &= IsValidCurrency(model as IMetaModelCurrency, currencyValidationOption.IsIncludeKeanOcean);
            }
            if (currencyValidationOption != null && currencyValidationOption.IsValidCurrencyList)
            {
                result &= IsValidCurrency(model as IMetaModelCurrencyIdList);
            }

            return result;
        }

        private bool ProductValid(object model, ProductValidationOption productValidationOption = null)
        {
            var result = true;
            if (productValidationOption != null && productValidationOption.IsValidProductCodeList)
            {
                result &= IsValidProductCode(model as IMetaModelProductCodeList, productValidationOption);
            }

            return result;
        }

        private bool BrandValid(object model, BrandValidationOption brandValidationOption = null)
        {
            var result = true;
            if (brandValidationOption != null)
            {
                result &= !brandValidationOption.IsValidBrandId || _brandValidation.IsValidBrandId(model as IBrandIdMetaModel, _sessionService.UserSession.BrandList);
                result &= !brandValidationOption.IsValidBrandIdList || _brandValidation.IsValidBrandIdList(model as IBrandIdListMetaModel, _sessionService.UserSession.BrandList);
            }

            return result;
        }


        private bool IsValidProductCode(IMetaModelProductCodeList model, ProductValidationOption option)
        {
            return model != null && _productValidation.IsValid(model, option);
        }

        private bool IsValidCurrency(IMetaModelCurrency model, bool isIncludeKeanOcean = false)
        {
            return model != null && _currencyValidation.IsValidCurrency(model.CurrencyId, isIncludeKeanOcean);
        }

        private bool IsValidCurrency(IMetaModelCurrencyIdList model)
        {
            return model != null &&
                _currencyValidation.IsValidCurrency(model.CurrencyIdList);
        }
    }
}