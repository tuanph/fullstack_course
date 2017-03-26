using System.Collections.Generic;

namespace Common.Exception
{
    public class ValidationException : System.Exception
    {
        public List<string> Errors;
        public ValidationException()
        {
            this.Errors = new List<string>();
        }
        public ValidationException(string error) : this()
        {
            this.Errors.Add(error);
        }
        public void AddError(string error)
        {
            this.Errors.Add(error);
        }
        public void ThrowIfError()
        {
            if (this.Errors.Count > 0)
                throw this;
        }
    }
}
