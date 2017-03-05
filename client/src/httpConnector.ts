import { IConnector } from "./iConnector";
import { Http, Response } from "@angular/http";
import { Promise, PromiseFactory } from "./promise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { Injectable } from "@angular/core";
import appConfig from "./appConfig";
@Injectable()
export class HttpConnector implements IConnector {
    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }
    public get(url: string): Promise {
        let rootUrl = appConfig.rootApiUrl;
        let promise = PromiseFactory.create();
        url = rootUrl + url;
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