using System.Collections.Generic;

namespace Fanex.Athena.Model.UserManagement.Model
{
    public static class Constant
    {
        public const string Space = " ";

        public const string Ok = "OK";

        public const string Error = "ERROR";

        public const string Uat = "UAT";

        public const string Live = "LIVE";

        public const string SiteId = "SiteId";

        public const string Environment = "Environment";

        public const int SearchAllSite = -9999;

        public const string IT = "IT";

        /// <summary>
        /// The user policy.
        /// </summary>
        public enum Policy
        {
            /// <summary>
            /// The none permission.
            /// </summary>
            None = 0,

            /// <summary>
            /// The read permission.
            /// </summary>
            Read = 1,

            /// <summary>
            /// The host permission.
            /// </summary>
            Host = 2
        }

        /// <summary>
        /// Crud permission.
        /// </summary>
        public enum Crud
        {
            /// <summary>
            /// The read permission.
            /// </summary>
            Read = 0,

            /// <summary>
            /// The host permission.
            /// </summary>
            Host = 1
        }

        /// <summary>
        /// User level.
        /// </summary>
        public enum Level
        {
            /// <summary>
            /// The user level.
            /// </summary>
            User = 0,

            /// <summary>
            /// The site admin.
            /// </summary>
            SiteAdmin = 50,

            /// <summary>
            /// The portal admin.
            /// </summary>
            PortalAdmin = 100
        }

        /// <summary>
        /// User level.
        /// </summary>
        public enum ReCheckInResult
        {
            /// <summary>
            /// Recheck in ok.
            /// </summary>
            Ok = 0,

            /// <summary>
            /// Downtime time.
            /// </summary>
            DownTime = 1,

            /// <summary>
            /// User is kicked out.
            /// </summary>
            KickedOut = 2
        }

        public enum UserStatus
        {
            All = 0,
            Active = 1,
            Inactive = 2
        }

        public static readonly IReadOnlyList<string> IgnoredNapFunctions = new List<string>
        {
            "SystemConfiguration", "ManageFunction", "ManageMenu",
            "Administration", "ManageUser", "AssignSiteToUser", "AssignFunctionToUser",
            "ManageGroup", "AssignFunctionToGroup"
        };

        public enum LogAction
        {

            NAP_Cust_Insert = 100,

            NAP_Cust_Update = 200,

            NAP_Cust_UpdatePassword = 3,

            NAP_Function_AssignFunctionToGroups = 300,

            NAP_Function_AssignFunctionToUsers = 301,

            NAP_Function_CopyPermission = 406,

            NAP_Function_Duplicate = 212,

            NAP_Function_Insert = 101,

            NAP_Function_Update = 201,

            NAP_Function_UpdateStatus = 202,

            NAP_Group_AssignFunction = 302,

            NAP_Group_Insert = 102,

            NAP_Group_Update = 203,

            NAP_Group_UpdateStatus = 204,

            NAP_MenuItem_Insert = 104,

            NAP_MenuItem_Update = 205,

            NAP_MenuItem_UpdateStatus = 206,

            NAP_Site_Insert = 103,

            NAP_Site_InsertSiteURL = 105,

            NAP_Site_InsertWithSiteURL = 106,

            NAP_Site_Update = 207,

            NAP_Site_UpdateDefaultSiteURL = 208,

            NAP_Site_UpdateSiteURL = 209,

            NAP_Site_UpdateStatus = 211,

            NAP_User_AssignFunction = 304,

            NAP_User_AssignNewSite = 403,

            NAP_User_AssignSite = 400,

            NAP_User_ChangeUserSiteStatus = 210,

            NAP_User_CheckIn = 27,

            NAP_User_Insert = 107,

            NAP_User_SSOCheckIn = 28,

            NAP_User_UpdateSite = 404,

            Task_NAP_RevokeUserPermission = 405
        }
    }
}
