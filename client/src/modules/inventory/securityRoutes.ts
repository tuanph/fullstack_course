import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Categories } from "./category/categories.component";
import { AddNewCategory } from "./category/addNewCategory.component";
import { EditCategory } from "./category/editCategory.component";
import routerConfig from "./routerConfig";
let routes: Routes = [
    { path: "", redirectTo: routerConfig.categories.name, pathMatch: "full" },
    { path: routerConfig.categories.name, component: Categories },
    { path: routerConfig.addNewCategory.name, component: AddNewCategory },
    { path: routerConfig.editCategory.name, component: EditCategory }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SecurityRoutes {

}