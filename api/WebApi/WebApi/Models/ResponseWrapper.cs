﻿namespace WebApi.Models
{
    using Common;
    using Common.Exception;
    using System.Net.Http;
    using System.Web.Http.Filters;

    public class ResponseWrapper : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            IResponseData<object> response = new ResponseData<object>();
            if (actionExecutedContext.Exception == null)
            {
                var actionResponse = (System.Net.Http.ObjectContent)actionExecutedContext.Response.Content;
                if (actionExecutedContext.Response.StatusCode != System.Net.HttpStatusCode.NoContent)
                {
                    response.SetData(actionResponse.Value);
                }
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(System.Net.HttpStatusCode.OK, response);
            }
            if (actionExecutedContext.Exception != null && actionExecutedContext.Exception is ValidationException)
            {
                response.SetErrors((actionExecutedContext.Exception as ValidationException).Errors);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(System.Net.HttpStatusCode.BadRequest, response);
            }
        }
    }
}