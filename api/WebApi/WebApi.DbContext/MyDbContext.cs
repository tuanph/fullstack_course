namespace WebApi.DbContext
{
    using System.Data.Entity;
    public class MyDbContext : System.Data.Entity.DbContext
    {
        public MyDbContext() : base("Default")
        {
        }
        public DbSet<Category> Categories { get; set; }
    }
}