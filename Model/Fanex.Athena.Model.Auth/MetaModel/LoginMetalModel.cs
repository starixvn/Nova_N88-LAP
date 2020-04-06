namespace Fanex.Athena.Model.Auth.MetaModel
{
    public class LoginMetalModel
    {
        public string UserName { get; set; }

        public string PassWord
        {
            get;
            set;
        }

        public string Captcha { get; set; }

        public string LogInToken { get; set; }

        public string LoginSalt { get; set; }
    }
}