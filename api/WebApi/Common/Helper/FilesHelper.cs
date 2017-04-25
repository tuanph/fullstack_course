using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Common.Helper
{
    public class FilesHelper
    {
        public static IList<string> GetFilesName(string prefix)
        {
            string binFolderPath = AppDomain.CurrentDomain.RelativeSearchPath;
            IList<string> fileNames = Directory.GetFiles(binFolderPath)
                .Where(name => Path.GetFileName(name).Contains(prefix) && name.EndsWith(".dll"))
                .Select(item => Path.GetFileNameWithoutExtension(item))
                .Distinct()
                .ToList();
            return fileNames;
        }
    }
}
