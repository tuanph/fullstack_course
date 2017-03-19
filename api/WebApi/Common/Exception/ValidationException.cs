namespace Common.Exception
{
    using System;
    using System.Collections.Generic;
    public class ValidationException : System.Exception
    {
        public List<string> Errors;
        public ValidationException()
        {
            this.Errors = new List<string>();
        }
        public ValidationException(string errorKey) : this()
        {
            this.Errors.Add(errorKey);
        }

        public void AddError(string error)
        {
            this.Errors.Add(error);
        }

        public void ThrowIfError()
        {
            if (this.Errors.Count == 0)
                return;
            throw this;
        }
    }
}
