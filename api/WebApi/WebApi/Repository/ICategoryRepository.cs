namespace WebApi.Repository
{
    using System.Collections.Generic;
    using WebApi.Models;
    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        Category AddNewCategory(Category category);
    }
}