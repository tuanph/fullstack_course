namespace WebApi.Models
{
    using Common;
    using Common.Exception;
    using System.Net.Http;
    using System.Web.Http.Filters;
    public class ResponseWrapperAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext.Exception != null && actionExecutedContext.Exception is ValidationException)
            {
                IResponseData<string> response = new ResponseData<string>();
                response.AddError((actionExecutedContext.Exception as ValidationException).Errors);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(System.Net.HttpStatusCode.BadRequest, response);
            }
        }
    }
}