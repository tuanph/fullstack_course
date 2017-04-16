namespace Common.IoC.Castle
{
    using global::Castle.MicroKernel.Registration;
    using global::Castle.Windsor;
    public class CastleContainer : IContainer
    {
        private IWindsorContainer container;
        public CastleContainer()
        {
            this.container = new WindsorContainer();
        }
        public void Register<IInstance, Instance>()
            where IInstance : class
            where Instance : IInstance
        {
            this.container.Register(Component.For<IInstance>().ImplementedBy<Instance>().LifestyleSingleton());
        }
        public IInstance Resolve<IInstance>() where IInstance : class
        {
            return this.container.Resolve<IInstance>();
        }
    }
}
