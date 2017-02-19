import { Component } from "@angular/core";
import { Router } from "@angular/router";
import routerConfig from "./routerConfig";
import { CategoryService } from "./categoryService";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    public route: Router;
    private categories: Array<any>;
    private selectedCategoryName: string;
    constructor(route: Router, categoryService: CategoryService) {
        this.route = route;
        this.categories = categoryService.getCategories();
    }
    public onEditCategoryClicked(categoryName: string) {
        // this.route.navigate([routerConfig.editCategory.name, { id: id }]);
        this.selectedCategoryName = categoryName;
    }

    public onCategoryNameChangedOnPearent(newCategoryName: string) {
        console.log("New CatagoryName : " + newCategoryName);
        this.selectedCategoryName = newCategoryName;
    }

};