import { NgModule, ApplicationRef } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import appConfig from "./config/appconfig";
import helperFacade from "@app/common";

// let routes: Routes = [
//     { path: "inventory", loadChildren: "./src/modules/inventory/securityModule#SecurityModule" }
// ];
let routes: any = helperFacade.routerHelper.getModuleRoute(appConfig.modules);
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
    declarations: [appConfig.layout],
    exports: [RouterModule, BrowserModule],
    bootstrap: [appConfig.layout]
})
export class AppModule {
    constructor(app: ApplicationRef) {
        let injector: any = app["_injector"];
        helperFacade.appHelper.setInjector(injector);
        helperFacade.appHelper.setConfig(appConfig);
    }
}