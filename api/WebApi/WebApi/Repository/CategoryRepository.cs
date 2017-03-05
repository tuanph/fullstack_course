namespace WebApi.Repository
{
    using DbContext;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using WebApi.Models;

    public class CategoryRepository : ICategoryRepository
    {
        private MyDbContext Context = new MyDbContext();
        public IList<Category> GetCategories()
        {
            return this.Context.Categories.ToList();
        }


    }
}