namespace WebApi.Service
{
    using Repository;
    using System.Collections.Generic;
    using WebApi.Models;
    public class CategoryService : ICategoryService
    {
        private IList<Category> categories;

        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }
    }
}