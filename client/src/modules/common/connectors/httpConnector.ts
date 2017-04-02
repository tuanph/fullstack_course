import { IConnector } from "./iConnector";
import { Http, Response } from "@angular/http";
// import { Promise, PromiseFactory } from "./promise";
import { Promise, PromiseFactory } from "../models/promise";
import appHelper from "../helpers/appHelper";
import "rxjs/add/operator/map";
export class HttpConnector implements IConnector {
    private rootUrl = appHelper.config.rootApiUrl;
    public get(url: string): Promise {
        let http: Http = window.ioc.resolve(Http);
        let promise = PromiseFactory.create();
        url = this.rootUrl + url;
        http.get(url)
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
        return response.json().data;
    }

}