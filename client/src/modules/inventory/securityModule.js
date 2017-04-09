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
const http_1 = require("@angular/http");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const securityRoutes_1 = require("./securityRoutes");
const categories_component_1 = require("./category/categories.component");
const addNewCategory_component_1 = require("./category/addNewCategory.component");
const editCategory_component_1 = require("./category/editCategory.component");
const backGroundColor_1 = require("../common/components/backGroundColor");
const categorySummary_1 = require("./_share/components/categorySummary");
const commonModule_1 = require("../../modules/common/commonModule");
const appconfig_1 = require("../../config/appconfig");
const common_1 = require("@app/common");
let SecurityModule = class SecurityModule {
    constructor(app) {
        let injector = app["_injector"];
        common_1.default.appHelper.setInjector(injector);
        common_1.default.appHelper.setConfig(appconfig_1.default);
    }
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, securityRoutes_1.SecurityRoutes, http_1.HttpModule, commonModule_1.CommonModule],
        declarations: [categories_component_1.Categories, addNewCategory_component_1.AddNewCategory, editCategory_component_1.EditCategory,
            backGroundColor_1.BackGroundColor, categorySummary_1.CategorySummary, appconfig_1.default.layout
        ],
        bootstrap: [appconfig_1.default.layout],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA]
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map