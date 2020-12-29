namespace Fanex.Athena.Service.Core.Users.Interfaces
{
    using Fanex.Athena.Model.Core.Configuration;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Collections.Generic;

    [CLSCompliant(false)]
    public interface IBrandService
    {
        IEnumerable<Brand> GetAllowedBrands(int licenseeId, IEnumerable<NVCFunctionAuthInfo> functions, BrandCollection brands);
    }
}