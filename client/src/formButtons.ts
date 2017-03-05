import { Component, Input } from "@angular/core";
@Component({
    selector: "form-Buttons",
    templateUrl: "src/formButtons.html"
})
export class FormButtons {
    @Input() label: string;
}