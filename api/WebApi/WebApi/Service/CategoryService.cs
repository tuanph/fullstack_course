namespace WebApi.Service
{
    using Repository;
    using System.Collections.Generic;
    using WebApi.Models;
    using System;

    public class CategoryService : ICategoryService
    {
        public Category AddNewCategory(AddCategoryModel category)
        {
            ICategoryRepository repo = new CategoryRepository();
            Category newCategory = new Category
            {
                Name = category.Name,
                Description = category.Description,
                Image = category.Image
            };

            return repo.AddNewCategory(newCategory);
        }

        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }
    }
}