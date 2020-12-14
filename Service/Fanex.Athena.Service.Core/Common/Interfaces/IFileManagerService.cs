using System.IO;

namespace Fanex.Athena.Service.Core.Common.Interfaces
{
    public interface IFileManagerService
    {
        StreamReader StreamReader(string path);
    }
}
