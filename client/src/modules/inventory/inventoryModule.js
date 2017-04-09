"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const categories_component_1 = require("./category/categories.component");
const addNewCategory_component_1 = require("./category/addNewCategory.component");
const editCategory_component_1 = require("./category/editCategory.component");
const backGroundColor_1 = require("../common/components/backGroundColor");
const categorySummary_1 = require("./_share/components/categorySummary");
const commonModule_1 = require("../../modules/common/commonModule");
const securityRoutes_1 = require("./securityRoutes");
let InventoryModule = class InventoryModule {
};
InventoryModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, commonModule_1.AppCommonModule, securityRoutes_1.SecurityRoutes],
        declarations: [categories_component_1.Categories, addNewCategory_component_1.AddNewCategory, editCategory_component_1.EditCategory,
            backGroundColor_1.BackGroundColor, categorySummary_1.CategorySummary
        ],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA]
    })
], InventoryModule);
exports.InventoryModule = InventoryModule;
//# sourceMappingURL=inventoryModule.js.map