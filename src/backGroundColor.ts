import { Directive, Input, ElementRef, AfterViewInit } from "@angular/core";

@Directive({
    selector: "[backGroundColor]"
})
export class BackGroundColor implements AfterViewInit {
    private el: ElementRef;
    @Input() myColor: string = "blue";
    constructor(el: ElementRef) {
        this.el = el;
    }

    ngAfterViewInit() {
        this.el.nativeElement.style.backgroundColor  = this.myColor;
        console.log('color ne :'+ this.myColor);
    }
}