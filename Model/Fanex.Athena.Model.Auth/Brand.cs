namespace Fanex.Athena.Model.Auth
{
    using System;
    using System.Collections.Generic;

    [Serializable]
    public class Brand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FunctionKey { get; set; }
        public IDictionary<int, string> TpCurrencyList { get; set; }
    }
}