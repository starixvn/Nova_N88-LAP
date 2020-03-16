namespace Fanex.Athena.Service.Core.Helper
{
    using System.IO;
    using System.Runtime.Serialization.Json;
    using Fanex.Athena.Model.Auth;

    public static class JsonSerializerHelper
    {
        public static string ToJson(TokenInfo token)
        {
            var stream = new MemoryStream();
            var dcs = new DataContractJsonSerializer(token.GetType());
            dcs.WriteObject(stream, token);

            stream.Position = 0;

            string json = new StreamReader(stream).ReadToEnd();

            return json.Replace("\\/", "/");
        }
    }
}