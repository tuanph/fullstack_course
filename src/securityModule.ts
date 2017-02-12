import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Categories } from "./categories.component";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoutes],
    declarations: [DefaultPage, Categories],
    bootstrap: [DefaultPage]
})
export class SecurityModule { }
