namespace Common
{
    using System.Collections.Generic;
    public interface IReponseData<TData>
    {
        void SetData(TData item);
        void AddError(string errorKey);
        void AddError(List<string> errors);
    }
}
