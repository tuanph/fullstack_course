import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ApplicationRef } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "../../defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Categories } from "./category/categories.component";
import { AddNewCategory } from "./category/addNewCategory.component";
import { EditCategory } from "./category/editCategory.component";
import { CategoryService } from "./_share/services/categoryService";
import { BackGroundColor } from "../common/components/backGroundColor";
import { CategorySummary } from "./_share/components/categorySummary";

import appHelper from "../../modules/common/index";
import { CommonModule } from "../../modules/common/commonModule";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoutes, HttpModule, CommonModule],
    declarations: [DefaultPage, Categories, AddNewCategory, EditCategory,
        BackGroundColor, CategorySummary
    ],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule {
}
