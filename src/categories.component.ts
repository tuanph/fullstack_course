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
    private selectedCategory: any;
    constructor(route: Router, categoryService: CategoryService) {
        this.route = route;
        this.categories = categoryService.getCategories();
        this.selectedCategory = this.categories[0];
    }
    public OnEditCategoryClicked(category: any) {
        this.selectedCategory = category;
    }
    public onCategoryNameChanged(newCategoryName: string) {
        this.selectedCategory.name = newCategoryName;
    }
};