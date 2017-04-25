namespace WebApi.Services
{
    using global::Common;

    public class AddCategoryResponse : IEntity
    {
        public int Id { get; set; }
        //[DataMember(Name = "name")]
        public string Name { get; set; }
        //[DataMember(Name = "description")]
        public string Description { get; set; }
        //[DataMember(Name = "image")]
        public string Image { get; set; }
    }
}
