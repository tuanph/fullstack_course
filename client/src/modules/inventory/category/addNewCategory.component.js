"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const addOrUpdateCategoryModel_1 = require("./addOrUpdateCategoryModel");
const categoryService_1 = require("../_share/services/categoryService");
const index_1 = require("../../../modules/common/index");
const router_1 = require("@angular/router");
let AddNewCategory = class AddNewCategory extends index_1.BasePage {
    constructor(router, categoryService) {
        super(router);
        this.newCategory = new addOrUpdateCategoryModel_1.AddOrUpdateCategoryModel();
        this.categoryService = categoryService;
    }
    onReady() {
        console.log("App ready");
    }
    onAddOrUpdateCategoryClicked() {
        // this.categoryService.addOrUpdateCategory(this.newCategory)
        //     .then((data: any) => {
        //         this.onCancelClicked();
        //         alert("Add new Category sucessful!");
        //     });
    }
    onCancelClicked() {
        this.newCategory = new addOrUpdateCategoryModel_1.AddOrUpdateCategoryModel();
    }
};
AddNewCategory = __decorate([
    core_1.Component({
        templateUrl: "src/modules/inventory/category/addNewCategory.html"
    }),
    __metadata("design:paramtypes", [router_1.Router, categoryService_1.CategoryService])
], AddNewCategory);
exports.AddNewCategory = AddNewCategory;
//# sourceMappingURL=addNewCategory.component.js.map