import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "form-Input",
    templateUrl: "src/formInput.html"
})
export class FormInput {
    @Input() label: string = "";
    @Input() value: string;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    public onValueChanged() {
        this.valueChange.emit(this.value);
    }
}