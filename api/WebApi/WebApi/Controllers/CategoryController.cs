namespace WebApi.Controllers
{
    using Models;
    using Service;
    using System.Collections.Generic;
    using System.Web.Http;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        //Remember install CROS
        [Route("")]
        [HttpGet]
        public IList<Category> GetCategories()
        {
            ICategoryService service = new CategoryService();
            return service.GetCategories();
        }
        [Route("")]
        [HttpPost]
        public Category AddNewCategory([FromBody] AddCategoryModel category)
        {
            ICategoryService service = new CategoryService();
            return service.AddNewCategory(category);
        }
    }
}
