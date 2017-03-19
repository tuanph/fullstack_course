namespace WebApi.Repository.Impl
{
    using WebApi.DbContext;
    using System.Collections.Generic;
    using System.Linq;
    using WebApi.Repository;
    using System;

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

        public Category GetCategoryByName(string name)
        {
            return this.Context.Categories.FirstOrDefault(category => category.Name == name);
        }
    }
}