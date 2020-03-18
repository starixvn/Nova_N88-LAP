namespace Fanex.Athena.DataAccess.Core.Users.Interfaces
{
    using System;

    public interface IAthorizationDataAccess
    {
        Tuple<int, int> IsCustomerBelonging(int custId, long transid);

        bool IsProductBelonging(int productId, string licenseeName);
    }
}