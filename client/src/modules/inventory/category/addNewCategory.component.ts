import { Component } from "@angular/core";
import { AddOrUpdateCategoryModel } from "./addOrUpdateCategoryModel";
import { CategoryService } from "../_share/services/categoryService";
import { BasePage } from "../../../modules/common/index";
import { Router } from "@angular/router";
@Component({
    templateUrl: "src/modules/inventory/category/addNewCategory.html"
})
export class AddNewCategory extends BasePage {
    private newCategory: AddOrUpdateCategoryModel = new AddOrUpdateCategoryModel();
    private categoryService: CategoryService;
    constructor(router: Router, categoryService: CategoryService) {
        super(router);
        this.categoryService = categoryService;
    }

    protected onReady() {
        console.log("App ready");
    }
    private onAddOrUpdateCategoryClicked() {
        // this.categoryService.addOrUpdateCategory(this.newCategory)
        //     .then((data: any) => {
        //         this.onCancelClicked();
        //         alert("Add new Category sucessful!");
        //     });
    }
    private onCancelClicked() {
        this.newCategory = new AddOrUpdateCategoryModel();
    }
}