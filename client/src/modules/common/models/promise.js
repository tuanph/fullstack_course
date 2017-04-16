"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PromiseFactory {
    static create() {
        return new Promise();
    }
}
exports.PromiseFactory = PromiseFactory;
class Promise {
    constructor() {
        this.errorCallback = null;
        this.successCallback = null;
    }
    then(successCallback) {
        this.successCallback = successCallback;
        this.processPromise();
        return this;
    }
    resolve(data) {
        this.data = data;
        this.processPromise();
        return this;
    }
    error(errorCallback) {
        this.errorCallback = errorCallback;
        this.processPromise();
        return this;
    }
    reject(errors) {
        this.errors = errors;
        this.processPromise();
        return this;
    }
    processPromise() {
        if (this.data != null && this.successCallback != null) {
            this.successCallback(this.data);
        }
        if (this.errors != null && this.errorCallback != null) {
            this.errorCallback(this.errors);
        }
    }
}
exports.Promise = Promise;
//# sourceMappingURL=promise.js.map