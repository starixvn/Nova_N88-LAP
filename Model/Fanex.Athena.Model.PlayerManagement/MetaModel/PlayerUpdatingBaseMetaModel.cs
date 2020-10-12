using System.Collections.Generic;
using Fanex.Athena.Model.Auth;
using Fanex.Athena.Model.Core.MetaModel;

namespace Fanex.Athena.Model.PlayerManagement.MetaModel
{
    public class PlayerUpdatingBaseMetaModel : IMetalModelCustomerIdentity, IMetaModelIp, IMetaModelUserId, IMetaModelLanguage, IMetaModelSiteName
    {
        public int UserId { get; set; }

        public int CustId { get; set; }

        public string Ip { get; set; }

        public string Language { get; set; }

        public int CurrencyId { get; set; }

        public string SiteName { get; set; }

        public string OldValue { get; set; }

        public int LicenseeCustId { get; set; }
    }
}