import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "form-primary-button",
    template: `<form-button [label] = label [cls] = cls (click1)=onClicked($event)></form-button>`
})
export class FormPrimaryButton {
    private cls = "btn-primary";
    @Input() label: string;
    @Output() click1: EventEmitter<any> = new EventEmitter<any>();

    public onClicked(event: any) {
        this.click1.emit(event);
    }
}