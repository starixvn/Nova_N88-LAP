namespace Fanex.Athena.Service.Core.Users.Interfaces
{
    using Fanex.Athena.Model.Core.Configuration;
    using Fanex.NVC.Authentication.Infrastructure;
    using System.Collections.Generic;

    public interface IBrandService
    {
        IEnumerable<Brand> GetAllowedBrands(int licenseeId, IEnumerable<NVCFunctionAuthInfo> functions, BrandCollection brands);
    }
}