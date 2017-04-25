namespace WebApi.Services.Impl
{

    using global::Common.IoC;
    using Services;

    public class Bootstrap : IBootstrap
    {
        public void Execute()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}
