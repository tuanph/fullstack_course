import { Component } from "@angular/core";
import { Router } from "@angular/router";
import routerConfig from "./routerConfig";
import { ICategoryService } from "./icategoryService";
import { BasePage } from "./basePage";
import { IocNames } from "./enum";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories extends BasePage {
    private categories: any;
    private selectedCategory: any;
    constructor(route: Router) {
        super(route);
        let self = this;
        let categoryService: ICategoryService = window.ioc.resolve(IocNames.ICategoryService);
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