
namespace WebApi.Repositories.Impl
{
    using System;
    using global::Common.IoC;

    public class Bootstrap : IBootstrap
    {
        public void Execute()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}
