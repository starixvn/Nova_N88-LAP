
namespace Fanex.Athena.Model.Auth
{
    using System;

    [Serializable]
    public class UserFunction
    {
        public string FunctionKey { get; set; }
        public int Policy { get; set; }
    }
}