namespace Common
{
    using System.Collections.Generic;
    public class ResponseData<TData> : IResponseData<TData>
    {
        public TData Data { get; set; }
        public List<string> Errors { get; set; }

        public ResponseData()
        {
            this.Errors = new List<string>();
        }

        public void SetData(TData items)
        {
            this.Data = items;
        }

        public void SetError(string key)
        {
            this.Errors.Add(key);
        }

        public void SetErrors(List<string> error)
        {
            foreach (var e in error)
            {
                this.Errors.Add(e);
            }
        }
    }
}
