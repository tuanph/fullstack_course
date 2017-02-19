import { Component } from "@angular/core";
import { Router } from "@angular/router";
import routerConfig from "./routerConfig";
@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    public route: Router;
    constructor(route: Router) {
        this.route = route;
    }
    public OnEditCustomerClicked(id: string) {
        this.route.navigate([routerConfig.editCategory.name, { id: id }]);
    }
};