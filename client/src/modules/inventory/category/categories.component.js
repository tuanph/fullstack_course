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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const index_1 = require("../../../modules/common/index");
const index_2 = require("../../../modules/common/index");
let Categories = class Categories extends index_1.BasePage {
    constructor(route) {
        super(route);
        let self = this;
        let categoryService = window.ioc.resolve(index_2.IocNames.ICategoryService);
        categoryService.getCategories()
            .then((categories) => {
            self.categories = categories;
            self.selectedCategory = self.categories[0];
        })
            .error((error) => {
            console.log(error);
        });
    }
    OnEditCategoryClicked(category) {
        this.selectedCategory = category;
    }
};
Categories = __decorate([
    core_1.Component({
        templateUrl: "src/modules/inventory/category/categories.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], Categories);
exports.Categories = Categories;
;
//# sourceMappingURL=categories.component.js.map