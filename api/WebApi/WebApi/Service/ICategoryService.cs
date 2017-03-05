namespace WebApi.Service
{
    using System.Collections.Generic;
    using WebApi.Models;
    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category AddNewCategory(AddCategoryModel category);
    }
}
