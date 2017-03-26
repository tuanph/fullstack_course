using Common;

namespace WebApi.MyDbContext
{

    //[Serializable()]//User for send back Data with XML format
    //[DataContract(Name = "category")]
    public class Category:IEntity
    {
        public Category()
        {

        }
        public Category(int id, string name, string description, string image)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Image = image;
        }
        //[DataMember(Name = "id")]
        public int Id { get; set; }
        //[DataMember(Name = "name")]
        public string Name { get; set; }
        //[DataMember(Name = "description")]
        public string Description { get; set; }
        //[DataMember(Name = "image")]
        public string Image { get; set; }
    }
}