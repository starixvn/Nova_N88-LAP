namespace Fanex.Athena.Model.Core.DataDomain
{
    using System.Collections.Generic;
    using Fanex.Athena.Resources;

    public static class PlatformType
    {
        public const int All = 0;

        public const int Asia = 1;

        public const int China = 2;

        public const int Euro = 3;

        public const int Wap = 4;

        public const int Mobile = 5;

        public const int Tablet = 6;

        public const int NewAsia = 7;

        public const int MobileApp = 8;

        public const int MobileLiteVersion = 9;

        public const int DeepLink = 10;

        public const int NativeApp = 11;

        public const int ESportsDesktop = 12;

        public const int ESportsMobile = 13;

        public const int ESportsApp = 14;

        public const int BetfromOthers = 88;

        private static readonly IReadOnlyDictionary<int, string> MapPlatformKeys = new Dictionary<int, string>
        {
            { All, nameof(All) },
            { Asia, nameof(Asia) },
            { China, nameof(China) },
            { Euro, nameof(Euro) },
            { Wap, nameof(Wap) },
            { Mobile, nameof(Mobile) },
            { Tablet, nameof(Tablet) },
            { NewAsia, nameof(NewAsia) },
            { MobileApp, nameof(MobileApp) },
            { MobileLiteVersion, nameof(MobileLiteVersion) },
            { DeepLink, nameof(DeepLink) },
            { BetfromOthers, nameof(BetfromOthers) },
            { NativeApp, nameof(NativeApp) },
            { ESportsDesktop, nameof(ESportsDesktop) },
            { ESportsMobile, nameof(ESportsMobile) },
            { ESportsApp, nameof(ESportsApp) }
        };

        private static readonly IReadOnlyDictionary<string, string> MapPlatformNames = new Dictionary<string, string>
        {
            { "z", ViewResources.China },
            { "g", ViewResources.Asia },
            { "y", ViewResources.Euro },
            { "m", ViewResources.Wap },
            { "l", ViewResources.Mobile },
            { "r", ViewResources.Tablet },
            { "x", ViewResources.NewAsia },
            { "o", ViewResources.MobileApp },
            { "c", ViewResources.MobileLiteVersion },
            { "t", ViewResources.DeepLink },
            { "v", ViewResources.BetfromOthers },
            { "0", ViewResources.NativeApp },
            { "1", ViewResources.ESportsDesktop },
            { "2", ViewResources.ESportsMobile },
            { "3", ViewResources.ESportsApp },
        };

        public static string GetPlatformKey(int type)
        {
            return MapPlatformKeys.ContainsKey(type) ? MapPlatformKeys[type] : "All";
        }

        public static string GetPlatformName(int type)
        {
            return MapPlatformKeys.ContainsKey(type) ? ViewResources.ResourceManager.GetString(MapPlatformKeys[type]) : ViewResources.All;
        }

        public static string GetPlatformName(string code)
        {
            return MapPlatformNames.ContainsKey(code) ? MapPlatformNames[code] : ViewResources.Others;
        }

        public static bool IsValidPlatform(int type)
        {
            return (type >= All && type <= ESportsApp) || type == BetfromOthers;
        }
    }
}