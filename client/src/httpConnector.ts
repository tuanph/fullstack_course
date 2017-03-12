import { IConnector } from "./iConnector";
import { Http, Response } from "@angular/http";
import { Promise, PromiseFactory } from "./promise";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/observable";
import { Injectable } from "@angular/core";
import appConfig from "./appConfig";
// @Injectable()
export class HttpConnector implements IConnector {
    private http: Http;
    private rootUrl = appConfig.rootApiUrl;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    public get(url: string): Promise {
        let promise = PromiseFactory.create();
        promise.resolve([{
            id: 1, name: "name 1", img: "123.jpg"
        }])
        // url = this.rootUrl + url;
        // this.http.get(url)
        //     .map(this.handleResponse)
        //     .subscribe(
        //     (data: any) => {
        //         promise.resolve(data);
        //     },
        //     (error: any) => {
        //         promise.reject(error)
        //     });
        return promise;
    }
    private handleResponse(response: Response) {
        return response.json();
    }

    public post(url: string, item: any): Promise {
        let promise = PromiseFactory.create();
        url = this.rootUrl + url;
        this.http.post(url, item)
            .map(this.handleResponse)
            .subscribe(
            (data: any) => {
                promise.resolve(data)
            },
            (error: any) => {
                promise.reject(error)
            });
        return promise;
    }

}