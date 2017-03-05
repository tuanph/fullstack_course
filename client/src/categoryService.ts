import { Injectable } from "@angular/core";
import { Promise } from "./promise";
import { IConnector } from "./iConnector";
// import "rxjs/add/operator/map";
// import { Observable } from "rxjs/observable";
// import { Http, Response } from "@angular/http";
import { HttpConnector } from "./httpConnector";

@Injectable() //Must declare because CategoryService is an InjectAble and It use a injectable
export class CategoryService {
    // private http: Http;
    // constructor(http: Http) {
    //     this.http = http;
    // }

    // public getCategories(): any {
    //     return this.http.get("src/api/categories.json").map(this.handleData);
    // }
    // public getCategories(): any {
    //     let promise: Promise = new Promise();
    //     window.setTimeout(function () {
    //         promise.resolve(
    //             [
    //                 {
    //                     "id": 1,
    //                     "name": "Category11",
    //                     "description": "Description1",
    //                     "image": "ngoctrinh.jpg"
    //                 },
    //                 {
    //                     "id": 2,
    //                     "name": "Category22",
    //                     "description": "Description2",
    //                     "image": "maria.jpg"
    //                 }
    //             ]
    //         );
    //         // promise.reject("Bi loi roi nhe cung oi");
    //     }, 3000);

    //     return promise;
    // }

    // public getCategories(): Promise {
    // let promise = new Promise();
    // this.http.get("srdc/api/categories.json")
    //     .map(this.handleData)
    //     .subscribe(
    //     (data: any) => {
    //         promise.resolve(data);
    //     },
    //     (error: any) => {
    //         promise.reject(error);
    //     }
    //     );
    // return promise;
    // }

    // private handleData(response: Response) {
    //     return response.json();
    // }
    private iConnector: IConnector;

    constructor(iConnector: HttpConnector) {
        this.iConnector = iConnector;
    }
    public getCategories(): Promise {
        return this.iConnector.get("/api/categories");
    }
}