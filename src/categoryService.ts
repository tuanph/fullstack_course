export class CategoryService {
    public getCategories() {
        return [
            { id: 1, name: "Category1", description: "Description1", image: "ngoctrinh.jpg" },
            { id: 2, name: "Category2", description: "Description2", image: "maria.jpg" }
        ];
    }
}