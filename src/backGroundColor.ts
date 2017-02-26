import { Directive, Input, AfterViewInit, ElementRef } from "@angular/core";
@Directive({
    selector: "[backgroundColor]"
})
export class BackGroundColor {
    @Input() myColor: string;
    private el: ElementRef;
    constructor(el: ElementRef) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.el.nativeElement.style.backgroundColor = this.myColor;
    }
}