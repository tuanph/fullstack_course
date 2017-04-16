namespace WebApi.Services.Impl
{
    using MyDbContext;
    using System.Collections.Generic;
    using WebApi.Repositories;
    using System;
    using Common.Exception;
    using Common.IoC;

    public class CategoryService : ICategoryService
    {
        public AddCategoryResponse AddNewCategory(AddCategoryRequest category)
        {
            this.ValidateCategoryModel(category);
            //ICategoryRepository repo = new CategoryRepository();
            ICategoryRepository repo = IoCContainer.Resolve<ICategoryRepository>();
            Category newCategory = new Category
            {
                Name = category.Name,
                Description = category.Description,
                Image = category.Image
            };
            Category returnCategory = repo.AddNewCategory(newCategory);
            AddCategoryResponse response = new AddCategoryResponse
            {
                Id = returnCategory.Id,
                Name = returnCategory.Name,
                Description = returnCategory.Description,
                Image = returnCategory.Image
            };
            return response;
        }
        private void ValidateCategoryModel(AddCategoryRequest category)
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
        public GetCategoriesResponse GetCategories()
        {
            //ICategoryRepository repo = new CategoryRepository();
            ICategoryRepository repo = IoCContainer.Resolve<ICategoryRepository>();
            IList<Category> categories = repo.GetCategories();
            GetCategoriesResponse response = new GetCategoriesResponse()
            {
                categories = categories
            };
            return response;
        }
    }
}