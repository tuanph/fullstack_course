namespace WebApi.Services
{
    using global::Common;
    using System.Collections.Generic;
    using WebApi.MyDbContext;

    public class GetCategoriesResponse : IEntity
    {
       public IList<Category> categories;
    }
}
