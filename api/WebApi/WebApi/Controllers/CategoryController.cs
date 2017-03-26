namespace WebApi.Controllers
{
    using MyDbContext;
    using Services.Impl;
    using Services;
    using System.Collections.Generic;
    using System.Web.Http;
    using Models;
    using Common;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        //Remember install CROS
        [Route("")]
        [HttpGet]
        [ResponseWrapper]
        public IList<Category> GetCategories()
        {
            ICategoryService service = new CategoryService();
            GetCategoriesResponse respone = service.GetCategories();
            return respone.categories;
        }

        [Route("")]
        [HttpPost]
        [ResponseWrapper]
        public AddCategoryResponse AddNewCategory([FromBody] AddCategoryRequest category)
        {
            ICategoryService service = new CategoryService();
            return service.AddNewCategory(category);
        }
    }
}
