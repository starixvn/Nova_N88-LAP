namespace Fanex.Athena.Model.Core.Configuration
{
    using System.Configuration;

    public class BrandElement : ConfigurationElement
    {
        private const string BrandNameProperty = "Name";
        private const string BrandIdProperty = "Id";
        private const string BrandFunctionKeyProperty = "FunctionKey";

        [ConfigurationProperty(BrandIdProperty, IsRequired = true)]
        public int Id
        {
            get
            {
                return (int)this[BrandIdProperty];
            }

            set
            {
                this[BrandIdProperty] = value;
            }
        }

        [ConfigurationProperty(BrandNameProperty, IsRequired = true)]
        public string Name
        {
            get
            {
                return (string)this[BrandNameProperty];
            }

            set
            {
                this[BrandNameProperty] = value;
            }
        }

        [ConfigurationProperty(BrandFunctionKeyProperty, IsRequired = true)]
        public string FunctionKey
        {
            get
            {
                return (string)this[BrandFunctionKeyProperty];
            }

            set
            {
                this[BrandFunctionKeyProperty] = value;
            }
        }
    }
}