namespace Fanex.Athena.Excel.Base.Entities
{
    public class ConvertingOption
    {
        public ConvertingOption()
        {
            IsConvert = true;
            BaseCurrency = @"EUR";
        }

        public string BaseCurrency
        {
            get;
            set;
        }

        public string CurrencyName
        {
            get;
            set;
        }

        public bool IsConvert
        {
            get;
            set;
        }
    }
}