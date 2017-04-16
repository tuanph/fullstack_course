namespace WebApi.Services.Impl
{
    using Common.IoC;
    using Services;

    public class Bootstrap
    {
        public static void registerIoC()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}
