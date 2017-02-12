import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    public route: Router;
    constructor(route: Router) {
        this.route = route;
    }
    public OnEditCustomerClicked(id: string) {
        this.route.navigate(["/editCategory", id]);
    }
};