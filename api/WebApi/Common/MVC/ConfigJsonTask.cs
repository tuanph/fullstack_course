using Newtonsoft.Json.Serialization;
using System.Web.Http;

namespace WebApi.Common.MVC
{
    public class ConfigJsonTask : IOnApplicationStarted
    {
        public void Execute()
        {
            //Convert Properties to CambelCase when send back data to client.
            var formatters = GlobalConfiguration.Configuration.Formatters;
            var jsonFormatter = formatters.JsonFormatter;
            var settings = jsonFormatter.SerializerSettings;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

        }
    }
}
