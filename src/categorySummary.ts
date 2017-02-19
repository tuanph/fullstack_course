import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
    selector: "category-Summary",
    templateUrl: "src/categorySummary.html"
})
export class CategorySummary {
    @Input() categoryName: string = null;
    @Output() onCategoryNameChanged: EventEmitter<string> = new EventEmitter<string>();

    public onValueChanged() {
        this.onCategoryNameChanged.emit(this.categoryName);
    }

    public printCategoryName() {
        console.log("Category name: " + this.categoryName);
    }
}