"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const categories_component_1 = require("./category/categories.component");
const addNewCategory_component_1 = require("./category/addNewCategory.component");
const editCategory_component_1 = require("./category/editCategory.component");
const routerConfig_1 = require("./routerConfig");
let routes = [
    { path: "", redirectTo: routerConfig_1.default.categories.name, pathMatch: "full" },
    { path: routerConfig_1.default.categories.name, component: categories_component_1.Categories },
    { path: routerConfig_1.default.addNewCategory.name, component: addNewCategory_component_1.AddNewCategory },
    { path: routerConfig_1.default.editCategory.name, component: editCategory_component_1.EditCategory }
];
let SecurityRoutes = class SecurityRoutes {
};
SecurityRoutes = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], SecurityRoutes);
exports.SecurityRoutes = SecurityRoutes;
//# sourceMappingURL=securityRoutes.js.map