import { Injectable } from "@angular/core";
import { Promise } from "./promise";
import { IConnector } from "./iConnector";
import { HttpConnector } from "./httpConnector";
import { AddOrUpdateCategoryModel } from "./addOrUpdateCategoryModel";

// @Injectable() //Must declare because CategoryService is an InjectAble and It use a injectable
export class CategoryService {
    // private iConnector: IConnector;
    // constructor(iConnector: HttpConnector) {
    //     this.iConnector = iConnector;
    // }
    public getCategories(): Promise {
        let iConnector = window.ioc.resolve("iConnector");
        return iConnector.get("/categories");
    }
    public addOrUpdateCategory(category: AddOrUpdateCategoryModel): Promise {
        let iConnector = window.ioc.resolve("iConnector");
        return iConnector.post("/categories", category);
    }
}