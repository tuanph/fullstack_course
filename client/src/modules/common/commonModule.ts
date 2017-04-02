import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FormButton } from "./components/formButton";
import { FormInput } from "./components/formInput";
import { Page } from "./components/page";
import { FormPrimaryButton } from "./components/formPrimaryButton";
import { HorizontalForm } from "./components/horizontalForm";
@NgModule({
    imports: [FormsModule],
    declarations: [FormButton, FormInput, Page, FormPrimaryButton, HorizontalForm],
    exports: [FormButton, FormInput]
})
export class CommonModule {
}