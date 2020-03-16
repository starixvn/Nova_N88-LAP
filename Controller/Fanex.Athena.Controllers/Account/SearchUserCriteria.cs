using Fanex.Data.Repository;

namespace Fanex.Athena.Controllers.Account
{
    public class SearchUserCriteria : CriteriaBase
    {
        public string Username { get; set; }

        public int GroupId { get; set; }

        public int SiteId { get; set; }

        public int PageIndex { get; set; }

        public int PageSize { get; set; }

        public int TotalRows { get; set; }

        public int Status { get; set; }

        public string Environment { get; set; }

        /// <summary>
        /// Get setting key.
        /// </summary>
        /// <returns>Setting key.</returns>
        public override string GetSettingKey()
        {
            return "N88_User_Search";
        }

        /// <summary>
        /// Check data constraints.
        /// </summary>
        /// <returns>True: valid; False: invalid.</returns>
        public override bool IsValid()
        {
            return true;
        }
    }
}
