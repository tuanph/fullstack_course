namespace WebApi.Controllers
{
    using WebApi.Service;
    using WebApi.Service.Impl;
    using System.Collections.Generic;
    using System.Web.Http;
    using DbContext;
    using Common;
    using Common.Exception;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public IReponseData<LoginResponse> Login(LoginRequest request)
        {
            IReponseData<LoginResponse> response = new ResponseData<LoginResponse>();
            try
            {
                ICategoryService service = new CategoryService();
                LoginResponse loginResponse = service.Login(request);
                response.SetData(loginResponse);
            }
            catch (ValidationException ex)
            {
                response.AddError(ex.Errors);
            }
            return response;
        }
        //Remember install CROS
        [Route("")]
        [HttpGet]
        public IReponseData<IList<Category>> GetCategories()
        {
            IReponseData<IList<Category>> response = new ResponseData<IList<Category>>();
            try
            {
                ICategoryService service = new CategoryService();
                var categories = service.GetCategories();
                response.SetData(categories);
            }
            catch (System.Exception ex)
            {
                response.AddError("common.generic");
            }
            return response;
        }
        //public IList<Category> GetCategories()
        //{
        //    ICategoryService service = new CategoryService();
        //    return service.GetCategories();
        //}
        [Route("")]
        [HttpPost]
        public Category AddNewCategory([FromBody] AddCategoryModel category)
        {
            ICategoryService service = new CategoryService();
            return service.AddNewCategory(category);
        }
    }
}
