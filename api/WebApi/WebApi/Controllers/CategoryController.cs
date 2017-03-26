namespace WebApi.Controllers
{
    using MyDbContext;
    using Services.Impl;
    using Services;
    using System.Collections.Generic;
    using System.Web.Http;
    using Common;
    using Common.Exception;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        //Remember install CROS
        [Route("")]
        [HttpGet]
        public IResponseData<IList<Category>> GetCategories()
        {
            IResponseData<IList<Category>> response = new ResponseData<IList<Category>>();
            ICategoryService service = new CategoryService();
            try
            {
                var items = service.GetCategories();
                response.SetData(items);
            }
            catch (ValidationException ex)
            {
                response.SetErrors(ex.Errors);
            }

            return response;
        }
        [Route("")]
        [HttpPost]
        public IResponseData<Category> AddNewCategory([FromBody] AddCategoryModel category)
        {
            IResponseData<Category> response = new ResponseData<Category>();
            try
            {
                ICategoryService service = new CategoryService();
                var newItem = service.AddNewCategory(category);
                response.SetData(newItem);
            }
            catch (ValidationException ex)
            {
                response.SetErrors(ex.Errors);
            }
            return response;
        }
    }
}
