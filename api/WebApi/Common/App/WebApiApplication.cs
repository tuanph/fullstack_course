using Common.IoC;
using WebApi.Common.Helper;
namespace WebApi.Common.App
{
    public class WebApiApplication : IApplication
    {
        public void OnError()
        {
            AsssemblyHelper.Execute<IOnApplicationError>();
        }

        public void Start()
        {
            AsssemblyHelper.Execute<IOnApplicationStarted>();
            AsssemblyHelper.Execute<IBootstrap>();
        }
    }
}
