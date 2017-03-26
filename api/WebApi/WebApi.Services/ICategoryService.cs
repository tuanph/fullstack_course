namespace WebApi.Services
{

    using System.Collections.Generic;
    using MyDbContext;
    using Common;

    public interface ICategoryService
    {
        GetCategoriesResponse GetCategories();
        AddCategoryResponse AddNewCategory(AddCategoryRequest category);
    }
}
