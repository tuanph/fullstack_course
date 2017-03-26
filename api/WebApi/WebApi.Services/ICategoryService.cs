namespace WebApi.Services
{

    using System.Collections.Generic;
    using MyDbContext;

    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category AddNewCategory(AddCategoryModel category);
    }
}
