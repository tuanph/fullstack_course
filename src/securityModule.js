"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const defaultPage_1 = require("./defaultPage");
const securityRoutes_1 = require("./securityRoutes");
const categories_component_1 = require("./categories.component");
const addNewCategory_component_1 = require("./addNewCategory.component");
const editCategory_component_1 = require("./editCategory.component");
const backGroundColor_1 = require("./backGroundColor");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, securityRoutes_1.SecurityRoutes],
        declarations: [defaultPage_1.DefaultPage, categories_component_1.Categories, addNewCategory_component_1.AddNewCategory, editCategory_component_1.EditCategory, backGroundColor_1.BackGroundColor],
        bootstrap: [defaultPage_1.DefaultPage]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map