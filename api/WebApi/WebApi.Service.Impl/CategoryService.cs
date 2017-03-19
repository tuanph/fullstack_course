namespace WebApi.Service.Impl
{
    using Repository;
    using System.Collections.Generic;
    using WebApi.DbContext;
    using WebApi.Repository.Impl;
    using System;
    using Common.Exception;

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

        public LoginResponse Login(LoginRequest request)
        {
            this.ValidationLoginRequest(request);
            ICategoryRepository repo = new CategoryRepository();
            Category category = repo.GetCategoryByName(request.Name);
            //Check token ....
            return new LoginResponse { Name = category.Name, Description = category.Description };
        }

        private void ValidationLoginRequest(LoginRequest request)
        {
            ValidationException exception = new ValidationException();
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                exception.AddError("user.login.nameIsRequired");
            }
            if (string.IsNullOrWhiteSpace(request.Description))
            {
                exception.AddError("user.login.descriptionIsRequired");
            }
            exception.ThrowIfError();
        }
    }
}