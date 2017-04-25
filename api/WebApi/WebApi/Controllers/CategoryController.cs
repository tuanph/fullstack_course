namespace WebApi.Controllers
{
    using MyDbContext;
    using Services;
    using System.Collections.Generic;
    using System.Web.Http;
    using Models;
    using global::Common.IoC;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        //Remember install CROS
        [Route("")]
        [HttpGet]
        [ResponseWrapper]
        public IList<Category> GetCategories()
        {
            ICategoryService service = IoCContainer.Resolve<ICategoryService>();
            GetCategoriesResponse respone = service.GetCategories();
            return respone.categories;
        }

        [Route("")]
        [HttpPost]
        [ResponseWrapper]
        public AddCategoryResponse AddNewCategory([FromBody] AddCategoryRequest category)
        {
            ICategoryService service = IoCContainer.Resolve<ICategoryService>();
            return service.AddNewCategory(category);
        }
    }
}
