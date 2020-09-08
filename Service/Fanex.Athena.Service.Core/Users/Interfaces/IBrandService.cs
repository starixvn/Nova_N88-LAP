namespace Fanex.Athena.Service.Core.Users.Interfaces
{
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Core.Configuration;
    using System.Collections.Generic;

    public interface IBrandService
    {
        IEnumerable<Brand> GetAllowedBrands(int licenseeId, IEnumerable<Function> functions, BrandCollection brands);
    }
}