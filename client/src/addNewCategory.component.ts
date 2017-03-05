import { Component } from "@angular/core";
import { AddOrUpdateCategoryModel } from "./addOrUpdateCategoryModel";
import { CategoryService } from "./categoryService";
@Component({
    templateUrl: "src/addNewCategory.html"
})
export class AddNewCategory {
    private newCategory: AddOrUpdateCategoryModel = new AddOrUpdateCategoryModel();
    private categoryService: CategoryService;
    constructor(categoryService: CategoryService) {
        this.categoryService = categoryService;
    }
    private onAddOrUpdateCategoryClicked() {
        this.categoryService.addOrUpdateCategory(this.newCategory)
            .then((data: any) => {
                this.reset();
                alert("Add new Category sucessful!");
            });
    }
    private reset() {
        this.newCategory = new AddOrUpdateCategoryModel();
    }
}