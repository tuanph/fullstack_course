using Common.Helper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace WebApi.Common.Helper
{
    public class AsssemblyHelper
    {
        public static void Execute<IInterface>() where IInterface : ITask
        {
            IList<string> moduleList = FilesHelper.GetFilesName(AppConst.PROJECT_NAMESPACE_PREFIX);
            IEnumerable<Type> bootstraps = new List<Type>();
            foreach (string module in moduleList)
            {
                IEnumerable<Type> types = Assembly.Load(module).GetTypes().Where(
                type => type.IsClass && !type.IsAbstract && typeof(IInterface).IsAssignableFrom(type)
                ).ToList();
                bootstraps = bootstraps.Concat(types);
            }
            foreach (Type type in bootstraps)
            {
                ITask bootstrapInstance = Activator.CreateInstance(type) as ITask;
                bootstrapInstance.Execute();
            }
        }
    }
}
