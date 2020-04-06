namespace Fanex.Athena
{
    using System.Collections.Generic;
    using System.Web.Optimization;

    internal class NonOrderingBundleOrderer : IBundleOrderer
    {
        #region IBundleOrderer Members

        public IEnumerable<BundleFile> OrderFiles(BundleContext context, IEnumerable<BundleFile> files)
        {
            return files;
        }

        #endregion
    }
}