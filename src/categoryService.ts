import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map"
import { Observable } from "rxjs/observable";
@Injectable() //Must declare because CategoryService is an InjectAble and It use a injectable
export class CategoryService {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    
    public getCategories(): any {
        return this.http.get("src/api/categories.json").map(this.handleData);
    }
    private handleData(response: Response) {
        return response.json();
    }
}