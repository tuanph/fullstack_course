namespace WebApi.Services.Impl
{
    using MyDbContext;
    using System.Collections.Generic;
    using WebApi.Repositories;
    using WebApi.Repositories.Impl;
    using System;
    using Common.Exception;

    public class CategoryService : ICategoryService
    {
        public Category AddNewCategory(AddCategoryModel category)
        {
            this.ValidateCategoryModel(category);
            ICategoryRepository repo = new CategoryRepository();
            Category newCategory = new Category
            {
                Name = category.Name,
                Description = category.Description,
                Image = category.Image
            };
            return repo.AddNewCategory(newCategory);
        }

        private void ValidateCategoryModel(AddCategoryModel category)
        {
            ValidationException exception = new ValidationException();
            if (String.IsNullOrWhiteSpace(category.Name))
            {
                exception.AddError("CategoryNameCannotBeBlank");
            }
            if (String.IsNullOrWhiteSpace(category.Description))
            {
                exception.AddError("CategoryDescriptionCannotBeBlank");
            }
            exception.ThrowIfError();
        }

        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }
    }
}