namespace WebApi.Repository
{
    using WebApi.DbContext;
    using System.Collections.Generic;
    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        Category AddNewCategory(Category category);
        Category GetCategoryByName(string name);
    }
}