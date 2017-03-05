export class PromiseFactory {
    public static create(): Promise {
        return new Promise();
    }
}

export class Promise {
    private data: any;
    private errors: any;
    private errorCallback: any = null;
    private successCallback: any = null;

    public then(successCallback: any) {
        this.successCallback = successCallback;
        this.processPromise();
        return this;
    }
    public resolve(data: any) {
        this.data = data;
        this.processPromise();
        return this;
    }
    public error(errorCallback: any) {
        this.errorCallback = errorCallback;
        this.processPromise();
        return this;
    }
    public reject(errors: any) {
        this.errors = errors;
        this.processPromise();
        return this;
    }
    private processPromise() {
        if (this.data != null && this.successCallback != null) {
            this.successCallback(this.data);
        }
        if (this.errors != null && this.errorCallback != null) {
            this.errorCallback(this.errors);
        }
    }

}