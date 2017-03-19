namespace WebApi.Service
{
    using WebApi.DbContext;
    using System.Collections.Generic;

    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category AddNewCategory(AddCategoryModel category);
        LoginResponse Login(LoginRequest request);
    }
}
