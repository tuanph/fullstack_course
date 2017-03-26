namespace WebApi.Repositories
{
    using System.Collections.Generic;
    using MyDbContext;
    using Common;

    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        Category AddNewCategory(Category category);
    }
}