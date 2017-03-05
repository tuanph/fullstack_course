import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "category-Summary",
    templateUrl: "src/categorySummary.html"
})
export class CategorySummary {
    @Input() categoryName: string;
    @Output() categoryNameChange: EventEmitter<string> = new EventEmitter<string>();
    public onValueChanged(newValue: string) {
        this.categoryName = newValue;
        this.categoryNameChange.emit(this.categoryName);
    }
}