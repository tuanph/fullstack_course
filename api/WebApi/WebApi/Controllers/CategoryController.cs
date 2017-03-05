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
    }

    //[Serializable()]//User for send back Data with XML format
    //[DataContract(Name = "category")]

}
