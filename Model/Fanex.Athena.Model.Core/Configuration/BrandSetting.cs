namespace Fanex.Athena.Model.Core.Configuration
{
    using System.Configuration;

    public class BrandSetting : ConfigurationSection
    {
        private const string BrandSettingSection = "BrandSetting";
        private const string SupportMultiBrandProperty = "SupportMultiBrand";
        private const string BrandCollectionProperty = "Brands";

        public static readonly BrandSetting Setting = ConfigurationManager.GetSection(BrandSettingSection) as BrandSetting;

        [ConfigurationProperty(SupportMultiBrandProperty, IsRequired = true)]
        public bool SupportMultiBrand
        {
            get { return (bool)this[SupportMultiBrandProperty]; }
            set { this[SupportMultiBrandProperty] = value; }
        }

        [ConfigurationProperty(BrandCollectionProperty, IsDefaultCollection = false)]
        [ConfigurationCollection(typeof(BrandCollection), AddItemName = "add")]
        public BrandCollection Brands
        {
            get { return (BrandCollection)base[BrandCollectionProperty]; }
        }
    }
}