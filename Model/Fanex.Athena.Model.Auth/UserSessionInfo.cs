using System;
using System.Collections.Generic;
using Fanex.NAP.Core.Models;
using Fanex.NAP.Core.Models.ValueObject;
using Fanex.NAP.Core.Web.Session;

namespace Fanex.Athena.Model.Auth
{
    [Serializable]
    public class UserSessionInfo : ICurrentSession
    {
        public string Username { get; set; }
        public int UserId { get; set; }
        public int Level { get; set; }
        public int OnUserId { get;set; }
        public string SessionId { get; set; }
        public string DefaultReportUrl { get; set; }
        public string Language { get; set; }
        public bool IsInternal { get; set; }
        public IList<MenuItem> MenuItemList { get; set; }

        public List<FunctionPolicy> FunctionList { get; set; }

        public IDictionary<int, string> CurrencyList { get; set; }
        
        public IDictionary<int, int[]> CurrencyAgentList { get; set; }
        public string DefaultBaseCurrency { get; set; } = string.Empty;

        public void ClearAll()
        {
            MenuItemList = new List<MenuItem>();
            SessionId = string.Empty;
            Username = string.Empty;
            UserId = 0;
            OnUserId = 0;
        }
    }
}
