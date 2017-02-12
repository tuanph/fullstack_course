import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Categories } from "./categories.component";
let routes: Routes = [
    { path: "", redirectTo: "categories", pathMatch: "full" },
    { path: "categories", component: Categories }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SecurityRoutes { }