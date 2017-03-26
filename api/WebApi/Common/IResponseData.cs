namespace Common
{
    using System.Collections.Generic;
    public interface IResponseData<TData>
    {
        void SetData(TData items);
        void SetError(string key);
        void SetErrors(List<string> error);
    }
}
