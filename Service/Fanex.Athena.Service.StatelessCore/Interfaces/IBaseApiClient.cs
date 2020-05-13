using System.Threading.Tasks;

namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    public interface IBaseApiClient
    {
        Task<string> PostStringAsync(string path, object value, string language, int timeOut = 100);

        Task<T> PostAsync<T>(string path, object value, string language)
            where T : class;
    }
}