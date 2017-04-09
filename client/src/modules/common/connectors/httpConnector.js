"use strict";
const http_1 = require("@angular/http");
// import { Promise, PromiseFactory } from "./promise";
const promise_1 = require("../models/promise");
const appHelper_1 = require("../helpers/appHelper");
require("rxjs/add/operator/map");
class HttpConnector {
    constructor() {
        this.rootUrl = appHelper_1.default.config.rootApiUrl;
    }
    get(url) {
        let http = window.ioc.resolve(http_1.Http);
        let promise = promise_1.PromiseFactory.create();
        url = this.rootUrl + url;
        http.get(url)
            .map(this.handleResponse)
            .subscribe((data) => {
            promise.resolve(data);
        }, (error) => {
            promise.reject(error);
        });
        return promise;
    }
    handleResponse(response) {
        return response.json().data;
    }
}
exports.HttpConnector = HttpConnector;
//# sourceMappingURL=httpConnector.js.map