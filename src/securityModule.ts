import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Categories } from "./categories.component";
import { AddNewCategory } from "./addNewCategory.component";
import { EditCategory } from "./editCategory.component";
import { CategoryService } from "./categoryService";
import { BackGroundColor } from "./backGroundColor";
import { CategorySummary } from "./categorySummary";
import { FormInput } from "./formInput";
import { Page } from "./page";
import { HttpModule } from "@angular/http";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoutes, HttpModule],
    declarations: [DefaultPage, Categories, AddNewCategory, EditCategory, BackGroundColor, CategorySummary, FormInput, Page],
    bootstrap: [DefaultPage],
    providers: [CategoryService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule { }
