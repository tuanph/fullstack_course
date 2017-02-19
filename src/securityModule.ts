import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Categories } from "./categories.component";
import { AddNewCategory } from "./addNewCategory.component";
import { EditCategory } from "./editCategory.component";
import { CategoryService } from "./categoryService";
import { CategorySummary } from "./categorySummary";
import { BackGroundColor } from "./backGroundColor";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoutes],
    declarations: [DefaultPage, Categories, AddNewCategory, EditCategory, CategorySummary, BackGroundColor],
    bootstrap: [DefaultPage],
    providers: [CategoryService]
})
export class SecurityModule { }
