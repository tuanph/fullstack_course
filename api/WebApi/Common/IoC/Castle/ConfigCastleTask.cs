namespace Common.IoC.Castle
{
    using WebApi.Common;
    public class ConfigCastleTask : IOnApplicationStarted
    {
        public void Execute()
        {
            IoCContainer.SetContainer(new CastleContainer());
        }
    }
}
