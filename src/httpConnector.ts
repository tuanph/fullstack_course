import { IConnector } from "./iConnector";
import { Http, Response } from "@angular/http";
import { Promise, PromiseFactory  } from "./promise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { Injectable } from "@angular/core";

@Injectable() 
export class HttpConnector implements IConnector {
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }
    public get(url: string): Promise {
        let promise = PromiseFactory .create();
        this.http.get(url)
            .map(this.handleResponse)
            .subscribe(
            (data: any) => {
                promise.resolve(data);
            },
            (error: any) => {
                promise.reject(error)
            });
        return promise;
    }
    private handleResponse(response: Response) {
        return response.json();
    }

}