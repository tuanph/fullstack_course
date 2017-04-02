import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
    templateUrl: "src/modules/inventory/category/editCategory.html"
})
export class EditCategory {
    public activatedRoute: ActivatedRoute;
    public id: String;
    constructor(activatedRoute: ActivatedRoute) {
        this.activatedRoute = activatedRoute;
        this.id = this.activatedRoute.params["value"].id;
    }
}