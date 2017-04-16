import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Categories } from "./category/categories.component";
import { AddNewCategory } from "./category/addNewCategory.component";
import { EditCategory } from "./category/editCategory.component";
import { CategoryService } from "./_share/services/categoryService";
import { BackGroundColor } from "../common/components/backGroundColor";
import { CategorySummary } from "./_share/components/categorySummary";
import { AppCommonModule } from "../../modules/common/commonModule";
import { SecurityRoutes } from "./securityRoutes";
import { IocNames, IocLifeCycle } from "@app/common";


@NgModule({
    imports: [CommonModule, AppCommonModule, SecurityRoutes],
    declarations: [Categories, AddNewCategory, EditCategory,
        BackGroundColor, CategorySummary
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class InventoryModule {
    constructor() {
        window.ioc.register([
            { name: IocNames.ICategoryService, instance: CategoryService, lifeCycle: IocLifeCycle.Singleton }
        ]);

    }
}
