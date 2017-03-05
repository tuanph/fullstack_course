import { Component } from "@angular/core";
import { Router } from "@angular/router";
import routerConfig from "./routerConfig";
import { CategoryService } from "./categoryService";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    public route: Router;
    private categories: any;
    private selectedCategory: any;
    constructor(route: Router, categoryService: CategoryService) {
        this.route = route;
        let self = this;
        categoryService.getCategories()
            .then((categories: Array<any>) => {
                self.categories = categories;
                self.selectedCategory = self.categories[0];
            })
            .error((error: any) => {
                console.log(error);
            });
    }
    public OnEditCategoryClicked(category: any) {
        this.selectedCategory = category;
    }
};