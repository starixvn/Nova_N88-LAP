using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Athena.Model.Core.ViewModel;
using Fanex.Athena.Model.Report.MetaModel;
using Fanex.NVC.Authentication.Infrastructure;
using System.Collections.Generic;

namespace Fanex.Athena.Model.Report.ViewModel
{
    public class ExtraPayoutViewModel : BaseViewModel
    {
        public ExtraPayoutMetaModel Param { get; set; }

        public ReportSetting ReportSetting { get; set; }

        public IDictionary<int, string> Sports { get; set; }

        public IEnumerable<CheckedItem> PromotionTypeList { get; set; }

        public Brand OwnBrand { get; set; }

        public IEnumerable<Brand> Brands { get; set; }
    }
}