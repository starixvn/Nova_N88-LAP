namespace Fanex.Athena.Model.Core.Configuration
{
    using System.Configuration;

    public class BrandCollection : ConfigurationElementCollection
    {
        public override ConfigurationElementCollectionType CollectionType
        {
            get { return ConfigurationElementCollectionType.AddRemoveClearMap; }
        }

        public BrandElement this[int index]
        {
            get
            {
                return (BrandElement)BaseGet(index);
            }

            set
            {
                if (BaseGet(index) != null)
                {
                    BaseRemoveAt(index);
                }

                BaseAdd(index, value);
            }
        }

        public void Add(BrandElement mappingElement)
        {
            BaseAdd(mappingElement, true);
        }

        protected override ConfigurationElement CreateNewElement()
        {
            return new BrandElement();
        }

        protected override object GetElementKey(ConfigurationElement element)
        {
            var brand = element as BrandElement;
            return brand.Id;
        }
    }
}