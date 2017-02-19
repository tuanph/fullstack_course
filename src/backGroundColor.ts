import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";
@Directive({
    selector: "[backGroundColor]"
})
export class BackGroundColor implements AfterViewInit {
    @Input() color: string = "yellow";
    private el: ElementRef;
    constructor(el: ElementRef) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.el.nativeElement.style.backgroundColor = this.color;
    }
}