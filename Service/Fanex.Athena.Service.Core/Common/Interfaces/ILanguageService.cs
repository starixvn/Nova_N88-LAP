namespace Fanex.Athena.Service.Core.Common.Interfaces
{
    public interface ILanguageService
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Design", "CA1024:UsePropertiesWhereAppropriate",
            Justification = "Reviewed. Suppression is OK here.")]
        string GetCurrentLanguage();

        /// <summary>
        /// Support to change language.
        /// </summary>
        /// <param name="languageCode">The language Code.</param>
        /// <returns>True if processing is successful.</returns>
        bool ChangeLanguage(string languageCode);

        void SetPageCulture(string languageCode);
    }
}