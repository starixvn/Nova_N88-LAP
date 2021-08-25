using Fanex.Athena.Model.Core.Helper;
using Fanex.Athena.Model.Core.MetaModel;
using System;

namespace Fanex.Athena.Model.BetList.MetaModel
{
    public class RefNoBetListMetaModel : BaseBettingTicketMetaModel, IMetaModelValidation
    {
        public long RefNo { get; set; }

        public DateTime? LastXDays { get; set; }

        public override bool IsValid => RefNo > 0 && MetaModelValidationHelper.ValidateBaseCurrency(BaseCurrency);
    }
}