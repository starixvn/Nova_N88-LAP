namespace Fanex.Athena.Model.Core.DTO.Common
{
    using System;

    [Serializable]
    public class Product
    {
        #region Field

        public const string SB = "SB";

        public const string NG = "NG";

        public const string BA = "BA";

        public const string VS = "VS";

        public const string CS = "CS";

        public const string KN = "KN";

        public const string BT = "BT";

        public const string CO = "CO";

        public const string VS2 = "VS2";

        public const string LT = "LT";

        public const string PP = "PP";

        public const string CC = "CC";

        public const string VRG = "VRG";

        public const string TG = "TG";

        public const string I4D = "I4D";

        public const string SLT = "SLT";

        public const string VGA = "VGA";

        public const string SPR = "SPR";

        public const string VS3 = "VS3";

        public const string BTC = "BTC";

        public const string TIP = "TIP";

        #endregion Field

        #region Constructor

        public Product()
        {
            ProductCode = SB;
            ProductName = nameof(SB);
            AllowCommission = true;
            AllowWinloss = true;
        }

        #endregion Constructor

        #region Property

        public int ProductID { get; set; }

        public string ProductName { get; set; }

        public string ProductCode { get; set; }

        public bool AllowCommission { get; set; }

        public bool AllowWinloss { get; set; }

        public bool IsOfferedSingleWallet { get; set; }

        #endregion Property
    }
}