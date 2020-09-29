namespace Fanex.Athena.Service.Core.Common.Interfaces
{
    public interface ILanguageService
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1024:UsePropertiesWhereAppropriate",
            Justification = "Reviewed. Suppression is OK here.")]
        string GetCurrentLanguage();

        void SetPageCulture(string languageCode);
    }
}