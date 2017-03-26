namespace WebApi.Repositories.Impl
{
    using WebApi.MyDbContext;
    using System.Collections.Generic;
    using System.Linq;
    using WebApi.Repositories;

    public class CategoryRepository : ICategoryRepository
    {
        private MyDbContext Context = new MyDbContext();
        public IList<Category> GetCategories()
        {
            return this.Context.Categories.ToList();
        }
        public Category AddNewCategory(Category category)
        {
            category = this.Context.Categories.Add(category);
            this.Context.SaveChanges();
            return category;
        }


    }
}