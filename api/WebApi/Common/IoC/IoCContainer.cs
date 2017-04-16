namespace Common.IoC
{
    using Castle.MicroKernel.Registration;
    using Castle.Windsor;
    public class IoCContainer
    {
        private static IWindsorContainer Container;
        static IoCContainer()
        {
            IoCContainer.Container = new WindsorContainer();
        }
        public static IInstance Resolve<IInstance>() where IInstance : class
        {
            return IoCContainer.Container.Resolve<IInstance>();
        }

        public static void Register<IInstance, Instance>()
            where Instance : IInstance
            where IInstance : class
        {
            IoCContainer.Container.Register(Component.For<IInstance>()
                .ImplementedBy<Instance>()
                .LifestyleSingleton());
        }
    }
}
