namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    using Fanex.Athena.Model.Core.DataDomain;
    using System;
    using System.IO;
    using System.Threading.Tasks;

    public interface IReportApiClient : IBaseApiClient
    {
        Task<Tuple<Stream, string>> PostAsync(string path, object value, string language, MediaType mediaType = MediaType.Json, int timeOut = 100);
    }
}