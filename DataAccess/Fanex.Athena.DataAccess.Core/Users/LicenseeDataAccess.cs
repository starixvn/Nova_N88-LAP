namespace Fanex.Athena.DataAccess.Core.Users
{
    using Fanex.Athena.DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Model.Core.DTO.Common;
    using System;

    public class LicenseeDataAccess : BaseDataAccess, ILicenseeDataAccess
    {
        public IResultInfo<bool> IsAllowUpdateMemberBAStatus(Request request, int licenseeId)
        {
            const string UspName = "Lrf_BATimeCheck";

            var isAllow = false;
            using (var db = this.GetObjectDb(UspName))
            {
                db.SetParameterValue("langkey", request.Language);
                db.SetParameterValue("LicenseeID", licenseeId);
                db.SetParameterValue("isallow", null);

                AddResultParam(db);
                db.ExecuteNonQuery();

                isAllow = Convert.ToBoolean(db.GetParameterValue("isallow"));
                var result = GetResult(db);
                return new ResultInfo<bool>
                {
                    Code = result.Code,
                    Message = result.Message,
                    ExtendedData = isAllow
                };
            }
        }

        public Licensee GetLicenseeByName(string licenseeName)
        {
            const string UspName = "Lrf_LicenseeSelBySiteName";
            var uspParams = new { siteName = licenseeName };

            using (var db = this.GetObjectDb(UspName))
            {
                return db.QueryEntity<Licensee>(uspParams);
            }
        }

        public Licensee GetLicenseeSettingById(int licenseeId)
        {
            const string UspName = "N88_SelLicenseeInfo";
            var uspParams = new { LicenseeId = licenseeId };

            using (var db = this.GetObjectDb(UspName))
            {
                return db.QueryEntity<Licensee>(uspParams);
            }
        }
    }
}