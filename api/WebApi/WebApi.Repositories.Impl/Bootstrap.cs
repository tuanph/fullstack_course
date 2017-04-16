
namespace WebApi.Repositories.Impl
{
    using Common.IoC;
    public class Bootstrap
    {
        public static void registerIoC()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}
