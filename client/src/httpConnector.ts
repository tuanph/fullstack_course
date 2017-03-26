import { IConnector } from "./iConnector";
import { Http, Response } from "@angular/http";
import { Promise, PromiseFactory } from "./promise";
import appHelper from "./appHelper";
import appConfig from "./appConfig";
import "rxjs/add/operator/map";
export class HttpConnector implements IConnector {

    private rootUrl = appConfig.rootApiUrl;
    public get(url: string): Promise {
        let http: Http = appHelper.injector.get(Http);
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

    public post(url: string, item: any): Promise {
        return null;
        //     let promise = PromiseFactory.create();
        //     url = this.rootUrl + url;
        //     this.http.post(url, item)
        //         .map(this.handleResponse)
        //         .subscribe(
        //         (data: any) => {
        //             promise.resolve(data)
        //         },
        //         (error: any) => {
        //             promise.reject(error)
        //         });
        //     return promise;
    }

}