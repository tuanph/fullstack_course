import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ApplicationRef } from "@angular/core";
import { HttpModule } from "@angular/http";
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
// import { FormInput } from "./formInput";
// import { Page } from "./page";
// import { HttpConnector } from "./httpConnector";
// import { FormButton } from "./formButton";
// import { HorizontalForm } from "./horizontalForm";
// import { FormPrimaryButton } from "./formPrimaryButton";
import appHelper from "./modules/common/index";
import { CommonModule } from "./modules/common/commonModule";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoutes, HttpModule, CommonModule],
    declarations: [DefaultPage, Categories, AddNewCategory, EditCategory,
        BackGroundColor, CategorySummary
    ],
    bootstrap: [DefaultPage],
    // providers: [CategoryService, HttpConnector],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule {
    // constructor(ref: ApplicationRef) {
    //     appHelper.setInjector(ref["_injector"]);
    // }
}
