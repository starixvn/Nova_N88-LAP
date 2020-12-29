using System.IO;
using Fanex.Athena.Service.Core.Common.Interfaces;

namespace Fanex.Athena.Service.Core.Common
{
    public class FileManagerService : IFileManagerService
    {
        public StreamReader StreamReader(string path)
        {
            var reader = new StreamReader(path);
            return reader;
        }
    }
}
