namespace WebApi
{
    using Common.App;
    using System.Web.Http;
    using System.Web.Mvc;
    using System.Web.Optimization;
    using System.Web.Routing;
    public class WebApiApplication : System.Web.HttpApplication
    {
        IApplication app;
        public WebApiApplication()
        {
            this.app = new WebApi.Common.App.WebApiApplication();
            this.Error += OnError;
        }
        protected void Application_Error()
        {
        }
        private void OnError(object sender, System.EventArgs e)
        {
            this.app.OnError();
        }
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            this.app.Start();
        }
    }
}
