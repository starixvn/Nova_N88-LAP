namespace Fanex.Athena.Model.UserManagement.Model
{
    using System;

    public class UserLoginLog
    {
        public long Id { get; set; }

        public string IP { get; set; }

        public DateTime LogDate { get; set; }

        public string DomainName { get; set; }

        public string BrowserName { get; set; }

        public string Platform { get; set; }

        public string CountryCode { get; set; }

        public int Duration { get; set; }

        public int UserId { get; set; }

        public string UserName { get; set; }
    }
}